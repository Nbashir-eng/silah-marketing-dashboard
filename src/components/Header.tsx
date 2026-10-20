import React from 'react';
import { 
  LayoutDashboard, 
  Table2, 
  Calculator, 
  FileSpreadsheet, 
  Bot, 
  CheckCircle2, 
  Presentation, 
  Download, 
  Calendar,
  Layers
} from 'lucide-react';
import { ReportMonth } from '../types/dashboard';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedMonth: ReportMonth;
  setSelectedMonth: (month: ReportMonth) => void;
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedMonth,
  setSelectedMonth,
  onOpenExportModal,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'اللوحة التنفيذية', icon: LayoutDashboard },
    { id: 'blueprint', label: 'هيكلة Google Sheets', icon: Layers },
    { id: 'simulator', label: 'مستعرض الجداول والبيانات', icon: Table2 },
    { id: 'formulas', label: 'مكتبة المعادلات الجاهزة', icon: Calculator },
    { id: 'aeo_audit', label: 'رصد الذكاء الاصطناعي (AEO)', icon: Bot },
    { id: 'tech_tracker', label: 'التعديلات التقنية والاعتماد', icon: CheckCircle2 },
    { id: 'presentation', label: 'وضع عرض الإدارة (Slides)', icon: Presentation },
  ];

  return (
    <header className="bg-white border-b border-[#f2f2f2] sticky top-0 z-40 shadow-xs">
      {/* Top Bar with Silah Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Logo & Company Identity */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center gap-3">
              {/* Official Silah Vector SVG Logo */}
              <div className="h-12 flex items-center">
                <img 
                  src="/public/assets/aistudio/_________-__________4__85c284fc.svg" 
                  alt="شركة صلة لتمكين العمل لتقنية المعلومات" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* Exact user requested wording: "نظام تقرير التسويق الذكي" */}
              <div className="hidden sm:block">
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#fdf2f2] text-[#d1232a] font-bold border border-[#fbd5d7] flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d1232a]"></span>
                  نظام تقرير التسويق الذكي
                </span>
              </div>
            </div>
          </div>

          {/* Controls: Month Selector & Export Action */}
          <div className="flex items-center gap-3">
            {/* Month Switcher Pill */}
            <div className="flex items-center bg-[#f2f2f2] p-1 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium">
              <button
                type="button"
                onClick={() => setSelectedMonth('september_2026')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  selectedMonth === 'september_2026'
                    ? 'bg-[#d1232a] text-white font-bold shadow-xs'
                    : 'text-[#231f20] hover:text-[#d1232a]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>سبتمبر 2026</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMonth('august_2026')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  selectedMonth === 'august_2026'
                    ? 'bg-[#d1232a] text-white font-bold shadow-xs'
                    : 'text-[#231f20] hover:text-[#d1232a]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>أغسطس 2026</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMonth('comparison')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  selectedMonth === 'comparison'
                    ? 'bg-[#231f20] text-white font-bold shadow-xs'
                    : 'text-[#231f20] hover:text-[#d1232a]'
                }`}
              >
                <span>مقارنة MoM</span>
              </button>
            </div>

            {/* Export & Sheets Action Button */}
            <button
              type="button"
              onClick={onOpenExportModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#d1232a] hover:bg-[#b01c22] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>تصدير نموذج الشيت</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex overflow-x-auto no-scrollbar border-t border-[#f2f2f2] py-1.5 -mb-px">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all mx-0.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#fdf2f2] text-[#d1232a] border-b-2 border-[#d1232a]'
                    : 'text-[#231f20]/80 hover:text-[#d1232a] hover:bg-[#f8f9fa]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#d1232a]' : 'text-[#828282]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
