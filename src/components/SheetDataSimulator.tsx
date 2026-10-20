import React, { useState } from 'react';
import { 
  Table2, 
  Download, 
  Copy, 
  Check, 
  Search, 
  Plus, 
  Trash2, 
  FileSpreadsheet, 
  Sparkles,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { GOOGLE_SHEETS_ARCHITECTURE } from '../data/marketingData';
import { SheetTabDefinition } from '../types/dashboard';

export const SheetDataSimulator: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(GOOGLE_SHEETS_ARCHITECTURE[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tableData, setTableData] = useState<Record<string, Record<string, any>[]>>(() => {
    const initial: Record<string, Record<string, any>[]> = {};
    GOOGLE_SHEETS_ARCHITECTURE.forEach(tab => {
      initial[tab.id] = [...tab.sampleData];
    });
    return initial;
  });
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const activeTabDef = GOOGLE_SHEETS_ARCHITECTURE.find(t => t.id === selectedTabId) || GOOGLE_SHEETS_ARCHITECTURE[0];
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
    activeTabDef.columns.forEach(col => {
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
      [activeTabDef.id]: [...activeTabDef.sampleData]
    }));
  };

  // Export current tab to CSV
  const handleExportCSV = () => {
    const headers = activeTabDef.columns.map(c => `"${c.headerAr.replace(/"/g, '""')}"`).join(',');
    const rows = currentRows.map(row => {
      return activeTabDef.columns.map(c => {
        const val = row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
        return `"${val.replace(/"/g, '""')}"`;
      }).join(',');
    });

    const csvContent = '\uFEFF' + [headers, ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${activeTabDef.nameEn}_صلة_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy formatted table for direct paste into Google Sheets (TSV format)
  const handleCopyForGoogleSheets = () => {
    const headers = activeTabDef.columns.map(c => c.headerAr).join('\t');
    const rows = currentRows.map(row => {
      return activeTabDef.columns.map(c => {
        return row[c.headerEn] !== undefined ? String(row[c.headerEn]) : '';
      }).join('\t');
    });

    const tsvContent = [headers, ...rows].join('\n');
    navigator.clipboard.writeText(tsvContent);
    setCopiedStatus('sheets-copy');
    setTimeout(() => setCopiedStatus(null), 2500);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeTabDef.color }} />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">{activeTabDef.nameEn}</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Table2 className="w-5 h-5 text-[#d1232a]" />
            مستعرض ومحاكي جداول Google Sheets التفاعلي
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            تصفح البيانات الحقيقية لتقرير صلة، عدّل القيم مباشرة، ثم انسخ الجدول بنقرة واحدة والصقه في Google Sheets
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyForGoogleSheets}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            {copiedStatus === 'sheets-copy' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>تم النسخ! الصق مباشرة في Sheets</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>نسخ الجدول جاهز للصق (Ctrl+V)</span>
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
        {GOOGLE_SHEETS_ARCHITECTURE.map((tab) => {
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
              <span>{tab.nameAr}</span>
            </button>
          );
        })}
      </div>

      {/* Table Toolbar & Search */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">عدد الصفوف:</span>
            <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
              {filteredRows.length} صف
            </span>
            <button
              type="button"
              onClick={handleAddRow}
              className="text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1 transition cursor-pointer mr-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة صف جديد</span>
            </button>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="تصفية البيانات في الجدول..."
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
                {activeTabDef.columns.map((col) => (
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
                    {rowIdx + 2}
                  </td>
                  {activeTabDef.columns.map((col) => {
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
          <span>💡 نصيحة: عند لصق هذا الجدول في Google Sheets، سيتم الحفاظ على الأعمدة والأرقام تلقائياً.</span>
          <span className="font-mono text-slate-400">Silah Marketing Operating System • Sheet Simulator v2.0</span>
        </div>
      </div>

    </div>
  );
};
