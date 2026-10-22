import React, { useState } from 'react';
import { 
  Table2, 
  Download, 
  Copy, 
  Check, 
  Search, 
  Plus, 
  Trash2, 
  RefreshCw,
  Database
} from 'lucide-react';
import { GOOGLE_SHEETS_ARCHITECTURE } from '../data/marketingData';
import { SheetTabColumn, SheetTabDefinition } from '../types/dashboard';

export const SheetDataSimulator: React.FC = () => {
  const tabs = GOOGLE_SHEETS_ARCHITECTURE as (SheetTabDefinition & {
    nameAr: string;
    nameEn: string;
    columns: SheetTabColumn[];
    sampleData: Record<string, any>[];
  })[];

  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tableData, setTableData] = useState<Record<string, Record<string, any>[]>>(() => {
    const initial: Record<string, Record<string, any>[]> = {};
    tabs.forEach(tab => {
      initial[tab.id] = [...(tab.sampleData || [])];
    });
    return initial;
  });
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const activeTabDef = tabs.find(t => t.id === selectedTabId) || tabs[0];
  const currentColumns = activeTabDef.columns || [];
  const currentRows = tableData[activeTabDef.id] || [];

  // Filter rows by search
  const filteredRows = currentRows.filter(row => {
    return Object.values(row).some(val => 
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleCellChange = (rowIndex: number, colKey: string, newValue: string) => {
    setTableData(prev => {
      const updatedRows = [...(prev[activeTabDef.id] || [])];
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        [colKey]: newValue
      };
      return {
        ...prev,
        [activeTabDef.id]: updatedRows
      };
    });
  };

  const handleAddRow = () => {
    const emptyRow: Record<string, any> = {};
    currentColumns.forEach(col => {
      emptyRow[col.headerEn] = col.example || '';
    });
    setTableData(prev => ({
      ...prev,
      [activeTabDef.id]: [...(prev[activeTabDef.id] || []), emptyRow]
    }));
  };

  const handleDeleteRow = (index: number) => {
    setTableData(prev => ({
      ...prev,
      [activeTabDef.id]: (prev[activeTabDef.id] || []).filter((_, i) => i !== index)
    }));
  };

  const handleResetData = () => {
    setTableData(prev => ({
      ...prev,
      [activeTabDef.id]: [...(activeTabDef.sampleData || [])]
    }));
  };

  // Export current tab to CSV
  const handleExportCSV = () => {
    const headers = currentColumns.map(c => `"${c.headerAr.replace(/"/g, '""')}"`).join(',');
    const rows = currentRows.map(row => {
      return currentColumns.map(c => {
        const val = row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
        return `"${val.replace(/"/g, '""')}"`;
      }).join(',');
    });

    const csvContent = '\uFEFF' + [headers, ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${activeTabDef.nameEn || activeTabDef.name || 'data'}_صلة_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy formatted table for direct paste (TSV format)
  const handleCopyClipboard = () => {
    const headers = currentColumns.map(c => c.headerAr).join('\t');
    const rows = currentRows.map(row => {
      return currentColumns.map(c => {
        return row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
      }).join('\t');
    });

    const tsvContent = [headers, ...rows].join('\n');
    navigator.clipboard.writeText(tsvContent);
    setCopiedStatus('copied');
    setTimeout(() => setCopiedStatus(null), 2500);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeTabDef.color }} />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">{activeTabDef.nameEn || activeTabDef.name}</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Table2 className="w-5 h-5 text-[#d1232a]" />
            مستعرض قواعد البيانات وسجلات التسويق الموحدة
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            استعراض وتعديل وتصفية السجلات والجداول التشغيلية لشركة صلة مع إمكانية التعديل وتصدير البيانات بصيغة CSV أو نسخها للحافظة.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyClipboard}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            {copiedStatus === 'copied' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>تم النسخ للحافظة بنجاح!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>نسخ بيانات الجدول</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>تصدير CSV</span>
          </button>

          <button
            type="button"
            onClick={handleResetData}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition cursor-pointer"
            title="إعادة تعيين البيانات الأصلية"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs Selector Ribbon */}
      <div className="flex overflow-x-auto gap-1.5 pb-1 no-scrollbar">
        {tabs.map((tab) => {
          const isSelected = tab.id === selectedTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedTabId(tab.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }} />
              <span>{tab.nameAr || tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Table Toolbar & Search */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">عدد السجلات:</span>
            <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
              {filteredRows.length} سجل
            </span>
            <button
              type="button"
              onClick={handleAddRow}
              className="text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1 transition cursor-pointer mr-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة سجل جديد</span>
            </button>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="تصفية السجلات والبيانات..."
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#d1232a]"
            />
          </div>
        </div>

        {/* The Spreadsheet Matrix */}
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full text-right text-xs border-collapse font-sans">
            <thead className="sticky top-0 z-20 bg-slate-100 text-slate-700 font-bold shadow-2xs">
              <tr>
                <th className="py-2 px-2 w-10 text-center border-b border-l border-slate-300 bg-slate-200 font-mono text-[11px]">
                  #
                </th>
                {currentColumns.map((col) => (
                  <th 
                    key={col.colLetter} 
                    className="py-2.5 px-3 border-b border-l border-slate-300 whitespace-nowrap min-w-[140px]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900">{col.headerAr}</span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/70 px-1 rounded">
                        {col.colLetter}
                      </span>
                    </div>
                  </th>
                ))}
                <th className="py-2.5 px-2 w-12 text-center border-b border-slate-300">إجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredRows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-amber-50/30 transition group">
                  <td className="py-2 px-2 text-center font-mono font-bold text-slate-400 bg-slate-50 border-l border-slate-200">
                    {rowIdx + 1}
                  </td>
                  {currentColumns.map((col) => {
                    const cellValue = row[col.headerEn] !== undefined ? row[col.headerEn] : '';
                    return (
                      <td 
                        key={col.colLetter} 
                        className="py-2 px-2 border-l border-slate-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#d1232a] focus-within:z-10"
                      >
                        <input
                          type="text"
                          value={cellValue}
                          onChange={(e) => handleCellChange(rowIdx, col.headerEn, e.target.value)}
                          className="w-full bg-transparent border-0 focus:outline-none text-xs font-medium text-slate-800 px-1 py-0.5 rounded"
                        />
                      </td>
                    );
                  })}
                  <td className="py-2 px-2 text-center">
                    <button
                      type="button"
                      onClick={() => handleDeleteRow(rowIdx)}
                      className="text-slate-300 hover:text-rose-600 p-1 rounded transition opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="حذف الصف"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Notes */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            نظام قواعد بيانات صلة الموحد • حفظ وتحديث فوري لكافة السجلات التشغيلية
          </span>
          <span className="font-mono text-slate-400">Silah Unified Marketing System • Database Simulator v2.0</span>
        </div>
      </div>

    </div>
  );
};
