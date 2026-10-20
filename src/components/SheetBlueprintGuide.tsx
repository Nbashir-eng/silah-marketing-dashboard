import React, { useState } from 'react';
import { 
  Layers, 
  Table, 
  HelpCircle, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Download, 
  Filter, 
  FileSpreadsheet,
  Palette,
  ExternalLink
} from 'lucide-react';
import { GOOGLE_SHEETS_ARCHITECTURE } from '../data/marketingData';

export const SheetBlueprintGuide: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(GOOGLE_SHEETS_ARCHITECTURE[0].id);
  const [copiedHeader, setCopiedHeader] = useState<string | null>(null);
  const [expandedCol, setExpandedCol] = useState<string | null>(null);

  const activeTab = GOOGLE_SHEETS_ARCHITECTURE.find(t => t.id === selectedTabId) || GOOGLE_SHEETS_ARCHITECTURE[0];

  const handleCopyText = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHeader(identifier);
    setTimeout(() => setCopiedHeader(null), 2000);
  };

  const handleCopyAllHeaders = () => {
    const headers = activeTab.columns.map(c => c.headerAr).join('\t');
    navigator.clipboard.writeText(headers);
    setCopiedHeader('all-headers');
    setTimeout(() => setCopiedHeader(null), 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#fdf2f2] text-[#d1232a] px-3 py-1 rounded-full text-xs font-bold border border-[#fbd5d7]">
              <Layers className="w-3.5 h-3.5" />
              <span>المعمارية الهندسية لجداول بيانات Google Sheets</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              دليل تقسيم الأوراق (Tabs) وهيكلة الأعمدة التفصيلية لشركة صلة
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              تم تصميم هذه المعمارية المكونة من <strong>9 أوراق متكاملة</strong> لتمكين قسم التسويق من إدارة وتتبع كافة الأنشطة الشهرية (الحملات الممولة، تحسينات SEO، الذكاء الاصطناعي AEO، بنك الأسئلة الشائعة، التذاكر التقنية، قواعد البيانات، والخطة القادمة) بنظام ربط آلي يغذي لوحة الإدارة تلقائياً.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <button
              type="button"
              onClick={handleCopyAllHeaders}
              className="w-full sm:w-auto bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
            >
              {copiedHeader === 'all-headers' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>تم نسخ رؤوس الأعمدة للشيت!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ رؤوس أعمدة هذه الورقة للصف الأول</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 9 Tabs Navigation Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 block mb-3">اختر الورقة (Tab) لاستعراض أعمدتها وتفاصيلها الهندسية:</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {GOOGLE_SHEETS_ARCHITECTURE.map((tab) => {
              const isSelected = tab.id === selectedTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTabId(tab.id)}
                  className={`p-3 rounded-xl text-right transition border text-xs cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: tab.color }}
                    />
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                      Tab {tab.tabNumber}
                    </span>
                  </div>
                  <span className="font-bold line-clamp-1">{tab.nameAr}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Tab Detailed Spec */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Tab Header Banner */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full inline-block" 
                style={{ backgroundColor: activeTab.color }}
              />
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                {activeTab.nameEn}
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {activeTab.nameAr}
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl">
              <strong>الهدف والوظيفة:</strong> {activeTab.purpose}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <Palette className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500">لون الورقة المقترح في Google Sheets:</span>
            <div className="flex items-center gap-1.5 font-mono font-bold text-slate-800">
              <span className="w-3 h-3 rounded-full border border-slate-300" style={{ backgroundColor: activeTab.color }} />
              {activeTab.color}
            </div>
          </div>
        </div>

        {/* Columns Table Specification */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Table className="w-4 h-4 text-[#d1232a]" />
              جدول تفصيل الأعمدة، الرموز، وأنواع البيانات ({activeTab.columns.length} أعمدة)
            </h4>
            <span className="text-xs text-slate-500">
              انقر على أي معادلة أو رأس عمود لنسخه مباشرة
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-3 px-3 w-12 text-center">العمود</th>
                  <th className="py-3 px-3">رأس العمود (بالعربية)</th>
                  <th className="py-3 px-3">الرمز الإنجليزي (Header Code)</th>
                  <th className="py-3 px-3">نوع البيانات (Data Type)</th>
                  <th className="py-3 px-4">خيارات القائمة المنسدلة / المعادلة</th>
                  <th className="py-3 px-3">الوصف والشرح</th>
                  <th className="py-3 px-3">مثال تطبيقي</th>
                  <th className="py-3 px-2 w-10 text-center">نسخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {activeTab.columns.map((col) => {
                  const isCopied = copiedHeader === col.colLetter;
                  return (
                    <tr key={col.colLetter} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-900 bg-slate-50/50">
                        {col.colLetter}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-900">
                        {col.headerAr}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-slate-500">
                        {col.headerEn}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          col.dataType === 'Dropdown' 
                            ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                            : col.dataType === 'Percentage (%)' 
                            ? 'bg-[#208c6b]/15 text-[#208c6b] border border-[#208c6b]/30' 
                            : col.dataType === 'Currency (SAR)'
                            ? 'bg-[#fdf2f2] text-[#d1232a] border border-[#fbd5d7]'
                            : col.dataType === 'URL'
                            ? 'bg-[#24419f]/10 text-[#24419f] border border-[#24419f]/30'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {col.dataType}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {col.formula ? (
                          <div className="flex items-center gap-1.5 font-mono text-[11px] bg-[#fdf2f2] text-[#d1232a] px-2 py-1 rounded-md border border-[#fbd5d7]">
                            <span className="truncate">{col.formula}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyText(col.formula!, `formula-${col.colLetter}`)}
                              className="hover:text-red-900 cursor-pointer"
                              title="نسخ المعادلة"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        ) : col.dropdownOptions ? (
                          <div className="flex flex-wrap gap-1">
                            {col.dropdownOptions.map((opt, i) => (
                              <span key={i} className="bg-slate-100 text-slate-700 text-[10px] px-1.5 py-0.5 rounded border border-slate-200">
                                {opt}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px]">إدخال حر</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-slate-600 max-w-xs text-[11px]">
                        {col.description}
                      </td>
                      <td className="py-3 px-3 font-semibold text-slate-900 text-[11px]">
                        {col.example}
                      </td>
                      <td className="py-3 px-2 text-center">
                        <button
                          type="button"
                          onClick={() => handleCopyText(col.headerAr, col.colLetter)}
                          className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition cursor-pointer"
                          title="نسخ رأس العمود"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tab Suggested Google Sheets Formulas */}
        {activeTab.suggestedFormulas && activeTab.suggestedFormulas.length > 0 && (
          <div className="p-6 bg-slate-50/50 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              المعادلات الآلية المباشرة الموصى بها لهذه الورقة
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeTab.suggestedFormulas.map((sf, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">{sf.metric}</span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      الخلية: {sf.cellLocation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900 text-emerald-400 p-2 rounded-lg font-mono text-xs">
                    <span className="truncate">{sf.formula}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyText(sf.formula, `sf-${idx}`)}
                      className="text-slate-400 hover:text-white p-1 cursor-pointer"
                      title="نسخ المعادلة"
                    >
                      {copiedHeader === `sf-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">{sf.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>


      {/* Step-by-Step Google Sheets Setup Guide */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
            خطوات إعداد ملف Google Sheets الاحترافي لصلة (خلال 5 دقائق)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            دليل عملي لتجهيز الشيت بأعلى معايير التنسيق المؤسسي ومشاركته مع الإدارة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[#d1232a] text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm">إنشاء وتسمية الأوراق الـ 9</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              قم بإنشاء جدول جديد في Google Sheets، وأضف 9 أوراق (Tabs) مطابقة للأسماء المقترحة أعلاه. انقر بالزر الأيمن على كل Tab واختر <strong>Change color</strong> لتعيين الألوان المعتمدة (الأحمر، الرمادي، الأخضر).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm">تثبيت الصف الأول وقوائم التحقق</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              انسخ رؤوس الأعمدة والصقها في الصف الأول (Row 1). فعّل تجميد الصف من <code>View &gt; Freeze &gt; 1 row</code>. أضف القوائم المنسدلة من <code>Data &gt; Data validation &gt; Dropdown</code> للحالات المعتمدة.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm">لصق المعادلات والتنسيق الشرطي</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              انسخ معادلات <code>COUNTIF</code> و <code>SUMIFS</code> إلى ورقة <strong>01_Executive_Dashboard</strong> لسحب البيانات آلياً من الأوراق الأخرى بدون تدخل يدوي شهري، مع تفعيل الألوان التلقائية لحالات الاعتماد.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
