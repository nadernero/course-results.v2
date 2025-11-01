

import React, { useCallback, useRef } from 'react';
import type { CertificateTexts } from './App';
import { useToast } from './ToastProvider';

interface SettingsViewProps {
    certificateTexts: CertificateTexts;
    setCertificateTexts: React.Dispatch<React.SetStateAction<CertificateTexts>>;
}

const textLabels: Record<keyof CertificateTexts, string> = {
    mainTitle: 'العنوان الرئيسي للشهادة',
    subTitle1: 'السطر الثاني (تحت العنوان الرئيسي)',
    subTitle2: 'السطر الثالث (تحت العنوان الرئيسي)',
    introLine: 'جملة التقديم الأولية',
    bodyLine1: 'النص قبل اسم الخدمة',
    bodyLine2: 'النص قبل اسم الكورس',
    bodyLine3: 'اسم الكورس (سيتم استبداله تلقائياً)',
    bodyLine4: 'نهاية فقرة الاجتياز (السطر الأول)',
    bodyLine5: 'بداية فقرة التقدير (السطر الثاني)',
    patronageTitle: 'عنوان الراعي',
    patronName: 'اسم الراعي وتفاصيله',
    responsiblePriestTitle: 'لقب الكاهن المسؤول',
};


const SettingsView: React.FC<SettingsViewProps> = ({ certificateTexts, setCertificateTexts }) => {
     const { addToast } = useToast();
     const debounceTimeout = useRef<number | null>(null);

    const showSaveToast = useCallback(() => {
        addToast('تم حفظ التغييرات تلقائياً.', 'success');
    }, [addToast]);
    
    const debouncedToast = useCallback(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = window.setTimeout(() => {
            showSaveToast();
        }, 1000); // Show toast 1 second after last change
    }, [showSaveToast]);

    const handleTextChange = (key: keyof CertificateTexts, value: string) => {
        setCertificateTexts(prev => ({ ...prev, [key]: value }));
        debouncedToast();
    };

    return (
        <div className="w-full">
            <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100">إدارة نصوص الشهادة</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    هنا يمكنك تعديل جميع النصوص التي تظهر في شهادة التقدير. التغييرات التي تجريها هنا ستنعكس مباشرة على جميع الشهادات التي يتم إنشاؤها.
                </p>
            </header>

            <div className="border border-gray-200/80 dark:border-slate-700 rounded-lg shadow-sm">
                <div className="p-6 bg-white dark:bg-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-t-lg">
                   {Object.keys(certificateTexts).map((key) => (
                        <div key={key}>
                            <label htmlFor={key} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                {textLabels[key as keyof CertificateTexts]}
                            </label>
                            <textarea
                                id={key}
                                rows={key === 'patronName' ? 3 : 2}
                                value={certificateTexts[key as keyof CertificateTexts]}
                                onChange={(e) => handleTextChange(key as keyof CertificateTexts, e.target.value)}
                                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
                                disabled={key === 'bodyLine3'}
                            />
                            {key === 'bodyLine3' && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">هذا الحقل يتم تحديثه تلقائياً باسم الكورس الفعلي.</p>}
                        </div>
                    ))}
                </div>
                 <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-gray-200/80 dark:border-slate-700 rounded-b-lg text-left">
                    <button className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-300">
                        حفظ التغييرات (اختياري)
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">ملاحظة: يتم حفظ التغييرات تلقائياً أثناء الكتابة. هذا الزر وظيفته مستقبلية.</p>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
