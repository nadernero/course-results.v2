import React, { useState, useMemo, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import type { StudentResult } from './types';

// --- SVG Icons ---
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;


interface AIChatViewProps {
    students: StudentResult[];
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AIChatView: React.FC<AIChatViewProps> = ({ students }) => {
    const { ai, apiKeyError } = useMemo(() => {
        const apiKey = process.env.API_KEY;
        const userFacingError = "عفواً، خدمة الذكاء الاصطناعي غير متاحة حالياً بسبب مشكلة في الإعدادات. يرجى التواصل مع مسؤول الخدمة.";
        if (!apiKey || apiKey === "undefined") {
            return { ai: null, apiKeyError: userFacingError };
        }
        try {
            const genAI = new GoogleGenAI({ apiKey });
            return { ai: genAI, apiKeyError: '' };
        } catch (error) {
            console.error("Error initializing GoogleGenAI:", error);
            return { ai: null, apiKeyError: userFacingError };
        }
    }, []);

    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: 'أهلاً بك! أنا مساعدك الذكي لتحليل بيانات الخدام. كيف يمكنني مساعدتك اليوم؟ يمكنك أن تسألني مثلاً: "ما هو متوسط الحضور في خدمة ابتدائي؟"' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        if (apiKeyError || !ai) {
            setMessages(prev => [...prev, { sender: 'ai', text: apiKeyError }]);
            setIsLoading(false);
            return;
        }
        
        try {
            const systemInstruction = `أنت مساعد ذكاء اصطناعي خبير ومحلل بيانات، متخصص في تحليل بيانات خدام كورس "مجتمع يسوع" في كنيسة القديس بولس بالعبور.
            مهمتك هي الإجابة بدقة وتقديم رؤى تحليلية بناءً على بيانات JSON التي سأزودك بها.

            **الهدف من التحليل:**
            هدفك هو مساعدة أمين الخدمة على فهم أداء الخدام، تحديد نقاط القوة والضعف، واكتشاف الخدام المتميزين أو الذين يحتاجون إلى دعم. قدم إجاباتك في هذا السياق.

            **قواعد صارمة يجب اتباعها:**

            1.  **مصدر البيانات الوحيد:** استخدم فقط بيانات JSON المقدمة في هذا الطلب. لا تخترع أي معلومات أو تستخدم أي معرفة خارجية. إذا كان السؤال لا يمكن الإجابة عليه من البيانات، أجب بوضوح "لا يمكنني الإجابة على هذا السؤال من البيانات المتاحة".

            2.  **فهم بنية البيانات:** البيانات عبارة عن مصفوفة من كائنات JSON. كل كائن يمثل **نتيجة كورس واحد** لخادم، ويحتوي على الحقول التالية: \`code\`, \`name\`, \`mobileNumber\`, \`service\` (قد يحتوي على عدة خدمات مفصولة بـ ' / '), \`courseName\`, \`score\` (قد يكون رقمًا أو "غائب"), \`attendance\` (نسبة مئوية).

            3.  **القاعدة الأهم (الخدام الفريدون مقابل التسجيلات):**
                *   يمكن لنفس الخادم أن يكون مسجلاً في كورسات متعددة. لذلك، قد تجد نفس \`code\` و \`name\` في صفوف متعددة.
                *   عندما يُسأل عن عدد "الخدام" أو "الأشخاص"، **يجب** عليك حساب عدد قيم \`code\` الفريدة في مجموعة البيانات ذات الصلة. هذا لمنع العد المزدوج.
                *   عندما يُسأل عن "التسجيلات" أو "نتائج الكورسات"، يمكنك حساب كل كائن في مجموعة البيانات.
                *   **مثال:** إذا سئلت "كم عدد الخدام في خدمة ابتدائي؟"، يجب عليك أولاً تصفية البيانات للكائنات التي يحتوي حقل \`service\` فيها على "خدمة ابتدائي"، ثم حساب عدد الـ \`code\` الفريدة في تلك القائمة المصفاة.

            4.  **كن استباقياً وقدم رؤى:**
                *   لا تكتفِ بالإجابة المباشرة. قدم رؤى إضافية. مثلاً، إذا سُئلت عن متوسط الدرجات، يمكنك مقارنته بالمتوسط العام أو ذكر أعلى وأقل درجة.
                *   ابحث عن الأنماط. مثلاً، "هل هناك علاقة بين نسبة الحضور العالية والدرجات المرتفعة؟"
                *   عندما تقدم قائمة، قدم ملخصًا بسيطًا في النهاية. مثلاً، "هؤلاء هم الخدام الخمسة الأعلى أداءً، ويلاحظ أن معظمهم من خدمة الشباب."

            5.  **خطوات التفكير:**
                *   **الخطوة 1: تحليل السؤال:** افهم ما إذا كان المستخدم يسأل عن خدام فريدين أم تسجيلات، وعن خدمة معينة أم جميع الخدمات.
                *   **الخطوة 2: تصفية البيانات:** قم بتصفية مصفوفة JSON بناءً على معايير السؤال.
                *   **الخطوة 3: إجراء الحساب:** قم بإجراء العملية الحسابية المطلوبة (عد فريد، متوسط، الخ).
                *   **الخطوة 4: توليد الرؤى:** فكر في معنى الأرقام. هل هي عالية؟ منخفضة؟ ما هي الخطوة التالية المقترحة؟
                *   **الخطوة 5: صياغة الإجابة:** قدم إجابة واضحة وموجزة باللغة العربية، تبدأ بالجواب المباشر ثم تتبعها بالتحليل والرؤى. استخدم تنسيق Markdown (مثل الجداول والقوائم) لتحسين القراءة.

            6.  **الأسلوب:** كن ودودًا ومتعاونًا، وتحدث كخبير تحليل بيانات يقدم تقريرًا لأمين الخدمة.

            البيانات الكاملة للخدام بصيغة JSON هي كالتالي:`;
            
            const prompt = `${systemInstruction}\n\n${JSON.stringify(students)}\n\nالسؤال: ${userMessage.text}`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-pro',
                contents: prompt,
            });

            const aiMessage: Message = { sender: 'ai', text: response.text };
            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {
            console.error("Error with Gemini API:", err);
            const errorMessage = "حدث خطأ أثناء التواصل مع المساعد الذكي. يرجى المحاولة مرة أخرى.";
            setMessages(prev => [...prev, { sender: 'ai', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const suggestedPrompts = [
        "من هم الخدام الذين حضروا كل الكورسات المسجلين فيها؟",
        "اعرض لي أعلى 5 خدام من حيث متوسط الدرجات.",
        "ما هي الخدمة التي لديها أعلى متوسط درجات؟",
        "قارن بين متوسط الحضور في كورس مجتمع يسوع وكورس إعداد الخدام.",
        "هل هناك خدام حاصلون على 100% حضور وأقل من 70 درجة؟",
        "من هو الخادم المسجل في أكبر عدد من الكورسات؟",
    ];

    return (
        <div className="flex flex-col h-[70vh] bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200/80 dark:border-slate-700">
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
                {messages.map((msg, index) => (
                     <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0"><BotIcon/></div>}
                        <div className={`px-4 py-3 rounded-2xl max-w-md md:max-w-lg shadow-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        </div>
                        {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-200 flex items-center justify-center flex-shrink-0"><UserIcon/></div>}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0"><BotIcon/></div>
                        <div className="px-4 py-3 rounded-2xl bg-gray-100 dark:bg-slate-700 text-gray-800 rounded-bl-none shadow-sm">
                            <div className="flex items-center justify-center gap-2">
                                <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>
            
            {!isLoading && messages.length < 3 && (
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400 w-full mb-1">أو جرب أحد هذه الأسئلة:</p>
                    {suggestedPrompts.map(prompt => (
                        <button key={prompt} onClick={() => setInput(prompt)} className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
                            {prompt}
                        </button>
                    ))}
                </div>
            )}
            
            <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50/70 dark:bg-slate-800/50 rounded-b-xl">
                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="اسأل شيئًا عن البيانات..." 
                        className="w-full px-4 py-2 text-gray-700 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition dark:text-gray-200"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <SendIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AIChatView;
