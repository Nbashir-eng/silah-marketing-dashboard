import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  FileSpreadsheet, 
  Layers, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GOOGLE_SHEETS_ARCHITECTURE } from '../data/marketingData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadAllCSVs = () => {
    GOOGLE_SHEETS_ARCHITECTURE.forEach((tabDef, i) => {
      setTimeout(() => {
        const headers = tabDef.columns.map(c => `"${c.headerAr.replace(/"/g, '""')}"`).join(',');
        const rows = tabDef.sampleData.map(row => {
          return tabDef.columns.map(c => {
            const val = row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
            return `"${val.replace(/"/g, '""')}"`;
          }).join(',');
        });

        const csvContent = '\uFEFF' + [headers, ...rows].join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${tabDef.tabNumber}_${tabDef.nameEn}_صلة.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, i * 200);
    });
  };

  const handleCopySingleTab = (tabDef: typeof GOOGLE_SHEETS_ARCHITECTURE[0]) => {
    const headers = tabDef.columns.map(c => c.headerAr).join('\t');
    const rows = tabDef.sampleData.map(row => {
      return tabDef.columns.map(c => {
        return row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
      }).join('\t');
    });

    const tsvContent = [headers, ...rows].join('\n');
    navigator.clipboard.writeText(tsvContent);
    setCopiedTab(tabDef.id);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fdf2f2] text-[#d1232a] flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">
                تصدير واستيراد نموذج Google Sheets المعتمد
              </h3>
              <p className="text-xs text-slate-500">
                قوالب جاهزة للنسخ أو التنزيل متوافقة بنسبة 100% مع حساب صلة على Google Workspace
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Bulk Download Button */}
        <div className="p-4 rounded-2xl bg-[#231f20] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              تنزيل حزمة الأوراق التسعة كاملة (CSV Bundle)
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              يقوم بتنزيل 9 ملفات CSV منفصلة لكل ورقة عمل جاهزة للاستيراد المباشر في Google Drive.
            </p>
          </div>
          <button
            type="button"
            onClick={handleDownloadAllCSVs}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>تنزيل كافة الملفات</span>
          </button>
        </div>

        {/* Individual Tab Quick Copy */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase">
            نسخ محتوى أي ورقة للصق المباشر (Ctrl+V) في Google Sheets:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {GOOGLE_SHEETS_ARCHITECTURE.map((tab) => {
              const isCopied = copiedTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className="p-3 rounded-xl border border-slate-200 hover:border-red-200 transition bg-slate-50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tab.color }} />
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{tab.nameAr}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopySingleTab(tab)}
                    className="p-1.5 rounded-lg text-xs font-bold text-[#d1232a] hover:bg-red-50 flex items-center gap-1 transition cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1.5">
          <strong className="block font-bold">طريقة الاستيراد في Google Drive:</strong>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>افتح Google Sheets وأنشئ مستنداً جديداً باسم <code>صلة - التقرير التسويقي الشهري 2026</code>.</li>
            <li>اذهب إلى <code>ملف (File) &gt; استيراد (Import) &gt; تحميل (Upload)</code> واختر ملفات الـ CSV.</li>
            <li>اختر خيار "إدراج أوراق جديدة" لكل ملف للمحافظة على تقسيم الـ Tabs التسعة.</li>
          </ol>
        </div>

      </div>
    </div>
  );
};
