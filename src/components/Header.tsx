import React from 'react';
import { 
  LayoutDashboard, 
  Table2, 
  Bot, 
  CheckCircle2, 
  Presentation, 
  Download, 
  Calendar,
  Megaphone,
  ShieldCheck,
  User,
  History,
  FileText
} from 'lucide-react';
import { useMarketingStore } from '../context/MarketingStore';
import { ReportMonth } from '../types/dashboard';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { 
    currentMember, 
    setIsAuthModalOpen, 
    selectedMonth, 
    setSelectedMonth, 
    setIsPdfModalOpen 
  } = useMarketingStore();

  const navItems = [
    { id: 'dashboard', label: 'اللوحة التنفيذية', icon: LayoutDashboard },
    { id: 'campaigns_editor', label: 'إدارة الحملات والإعلانات', icon: Megaphone },
    { id: 'aeo_audit', label: 'رصد الذكاء الاصطناعي (AEO)', icon: Bot },
    { id: 'tech_tracker', label: 'المهام التقنية و CRM', icon: CheckCircle2 },
    { id: 'simulator', label: 'مستعرض البيانات الموحدة', icon: Table2 },
    { id: 'audit_trail', label: 'سجل تدقيق التعديلات', icon: History },
    { id: 'presentation', label: 'وضع عرض الإدارة (Slides)', icon: Presentation },
  ];

  return (
    <header className="bg-white border-b border-[#f2f2f2] sticky top-0 z-40 shadow-xs print:hidden">
      {/* Top Bar with Silah Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Official Logo & System Title */}
          <div className="flex items-center space-x-3 space-x-reverse shrink-0">
            <div className="flex items-center gap-3">
              {/* Official Silah Vector SVG Logo */}
              <div className="h-11 sm:h-12 flex items-center">
                <img 
                  src="/public/assets/aistudio/_________-__________4__85c284fc.svg" 
                  alt="شركة صلة لتمكين العمل لتقنية المعلومات" 
                  className="h-9 sm:h-11 w-auto object-contain"
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

          {/* Controls: Month Switcher, PDF Export, User Auth Profile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Month Switcher Pill */}
            <div className="flex items-center bg-[#f2f2f2] p-1 rounded-xl border border-slate-200 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedMonth('september_2026')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedMonth === 'september_2026'
                    ? 'bg-[#d1232a] text-white font-bold shadow-xs'
                    : 'text-[#231f20] hover:text-[#d1232a]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 hidden xs:inline" />
                <span>سبتمبر 2026</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMonth('august_2026')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedMonth === 'august_2026'
                    ? 'bg-[#d1232a] text-white font-bold shadow-xs'
                    : 'text-[#231f20] hover:text-[#d1232a]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 hidden xs:inline" />
                <span>أغسطس 2026</span>
              </button>
            </div>

            {/* Prominent PDF Export Button (تنزيل التقرير الشهري) */}
            <button
              type="button"
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#d1232a] hover:bg-[#b01c22] text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer"
              title="تصدير وتنزيل التقرير الشهري التنفيذي بصيغة PDF"
            >
              <FileText className="w-4 h-4" />
              <span>تنزيل التقرير الشهري (PDF)</span>
            </button>

            {/* Team Member Auth / Profile Switcher Badge */}
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 bg-[#f8f9fa] hover:bg-slate-100 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 transition cursor-pointer text-right group"
              title="تبديل بروفايل العضو وتسجيل الدخول"
            >
              <div 
                className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs"
                style={{ backgroundColor: currentMember.avatarColor }}
              >
                {currentMember.initials || currentMember.name.slice(0, 2)}
              </div>
              <div className="hidden md:block">
                <span className="text-xs font-bold text-[#231f20] block group-hover:text-[#d1232a] transition leading-tight">
                  {currentMember.name}
                </span>
                <span className="text-[10px] text-[#828282] block leading-tight">
                  {currentMember.role}
                </span>
              </div>
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
                className={`flex items-center gap-2 px-3 sm:px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all mx-0.5 cursor-pointer ${
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
