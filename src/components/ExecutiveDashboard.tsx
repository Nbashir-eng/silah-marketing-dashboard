import React from 'react';
import { 
  CheckCircle, 
  DollarSign, 
  Eye, 
  Megaphone, 
  UserCheck, 
  TrendingUp, 
  TrendingDown, 
  Mail, 
  MousePointer, 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  ChevronRight, 
  FileText,
  PieChart as PieChartIcon,
  Layers,
  Edit3
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';
import { TOP_PAGES_SEP_2026, TOP_PAGES_AUG_2026 } from '../data/marketingData';

interface ExecutiveDashboardProps {
  selectedMonth: string;
  onNavigateTab: (tabId: string) => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  onNavigateTab,
}) => {
  const { 
    kpis, 
    campaigns, 
    aeoData, 
    selectedMonth, 
    currentMember, 
    setIsPdfModalOpen 
  } = useMarketingStore();

  const topPages = selectedMonth === 'august_2026' ? TOP_PAGES_AUG_2026 : TOP_PAGES_SEP_2026;
  const monthName = selectedMonth === 'august_2026' ? 'أغسطس 2026' : 'سبتمبر 2026';
  const period = selectedMonth === 'august_2026' ? '01 إلى 31 أغسطس 2026' : '01 إلى 30 سبتمبر 2026';

  return (
    <div className="space-y-8 pb-12 animate-in fade-in">
      
      {/* Executive Header Banner styled in Silah Official Brand Gradient */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#231f20] via-[#5e0c10] to-[#d1232a] text-white p-6 sm:p-8 shadow-md">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 rounded-full bg-black/20 blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#d1232a]"></span>
              <span>نظام تقرير التسويق الذكي — التقرير التنفيذي الموحد</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              لوحة القيادة والمتابعة الشهرية — شركة صلة
            </h1>
            <p className="text-white/85 text-sm max-w-2xl font-medium leading-relaxed">
              استعراض شامل ودقيق للأداء التسويقي خلال فترة ({period}) ومقارنة العائد على الاستثمار مع نظام قواعد بيانات سحابي لحظي ومستقل بالكامل.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigateTab('campaigns_editor')}
              className="bg-white text-[#d1232a] hover:bg-slate-50 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Megaphone className="w-4 h-4" />
              <span>إدارة وتحديث الحملات</span>
            </button>
            <button
              type="button"
              onClick={() => setIsPdfModalOpen(true)}
              className="bg-black/40 hover:bg-black/50 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm backdrop-blur-xs flex items-center justify-center gap-2 transition cursor-pointer border border-white/20"
            >
              <FileText className="w-4 h-4" />
              <span>تنزيل التقرير الشهري (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5 Primary Executive Scorecards (Calculated Live in Real-time) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#231f20] flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#d1232a] rounded-full inline-block"></span>
            الملخص التنفيذي وأبرز المنجزات
          </h2>
          <div className="flex items-center gap-2 text-xs text-[#828282]">
            <span className="w-2 h-2 rounded-full bg-[#208c6b]"></span>
            <span>بيانات حية محدثة لشهر {monthName}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Card 1: Completed Tasks */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#d1232a]/30 transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#828282]">مهام منجزة</span>
              <div className="w-9 h-9 rounded-xl bg-[#208c6b]/10 text-[#208c6b] flex items-center justify-center group-hover:scale-105 transition">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#231f20] mb-1 font-mono">
              {kpis.completedTasksCount}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#828282]">
              <span className="text-[#208c6b] font-bold">100%</span>
              <span>تنفيذ المهام المعتمدة</span>
            </div>
          </div>

          {/* Card 2: Total Budget */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#d1232a]/30 transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#828282]">إجمالي الميزانية</span>
              <div className="w-9 h-9 rounded-xl bg-[#fdf2f2] text-[#d1232a] flex items-center justify-center group-hover:scale-105 transition">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#d1232a] mb-1 font-mono">
              {kpis.totalBudget.toLocaleString()} <span className="text-sm font-bold text-[#828282]">ر.س</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              {selectedMonth === 'september_2026' ? (
                <span className="text-[#208c6b] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +2.8% مقارنة بأغسطس
                </span>
              ) : (
                <span className="text-[#828282]">ميزانية شهر أغسطس</span>
              )}
            </div>
          </div>

          {/* Card 3: Website Views */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#d1232a]/30 transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#828282]">مشاهد للموقع</span>
              <div className="w-9 h-9 rounded-xl bg-[#24419f]/10 text-[#24419f] flex items-center justify-center group-hover:scale-105 transition">
                <Eye className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#231f20] mb-1 font-mono">
              {kpis.websiteViewsFormatted}
            </div>
            <div className="text-xs text-[#828282] font-medium">
              {kpis.websiteViews.toLocaleString()} زيارة إجمالية
            </div>
          </div>

          {/* Card 4: Ad Campaigns */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#d1232a]/30 transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#828282]">حملات إعلانية</span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition">
                <Megaphone className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#231f20] mb-1 font-mono">
              {kpis.activeCampaignsCount}
            </div>
            <div className="flex items-center gap-1 text-xs text-[#208c6b] font-bold">
              <span>Google Ads & LinkedIn</span>
            </div>
          </div>

          {/* Card 5: CRM New Deals */}
          <div className="bg-white rounded-2xl p-5 border-2 border-[#d1232a]/20 shadow-xs hover:border-[#d1232a] transition group col-span-2 md:col-span-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#231f20]">عميل / صفقة في CRM</span>
              <div className="w-9 h-9 rounded-xl bg-[#fdf2f2] text-[#d1232a] flex items-center justify-center group-hover:scale-105 transition">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-[#231f20] mb-1 font-mono">
              {kpis.crmNewDeals}
            </div>
            <div className="flex items-center gap-1 text-xs">
              {selectedMonth === 'september_2026' ? (
                <span className="text-[#208c6b] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +66.7% نمو بالصفقات
                </span>
              ) : (
                <span className="text-[#828282]">3 صفقات مسجلة</span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Grid: Campaigns & Email Marketing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Paid Campaigns Performance Matrix */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
            <div>
              <h3 className="font-bold text-[#231f20] text-base flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-[#d1232a]" />
                أداء الحملات الإعلانية الممولة (Google Ads & LinkedIn)
              </h3>
              <p className="text-xs text-[#828282]">تفصيل الظهور، النقرات، التحويلات، وتكلفة الاستحواذ مع حوكمة المسؤول عن البيانات</p>
            </div>
            
            <div className="flex items-center gap-3 text-xs bg-[#f8f9fa] px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="flex items-center gap-1 text-[#208c6b] font-bold">
                <PhoneCall className="w-3.5 h-3.5" /> {kpis.totalCalls} اتصال
              </span>
              <span className="w-px h-3 bg-slate-300" />
              <span className="flex items-center gap-1 text-[#208c6b] font-bold">
                <MessageSquare className="w-3.5 h-3.5" /> {kpis.totalWhatsApp} واتساب
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="bg-[#f8f9fa] text-[#231f20] font-bold border-b border-slate-200">
                  <th className="py-2.5 px-3 whitespace-nowrap">الإعلان / الخدمة</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">المنصة</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">المسؤول (Assigned)</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">الإنفاق</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">النقرات</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">معدل CTR</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">التحويلات</th>
                  <th className="py-2.5 px-3 whitespace-nowrap">تكلفة التحويل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-[#231f20]">
                {campaigns.map((camp) => {
                  const assignedMember = TEAM_MEMBERS.find(m => m.id === camp.assignedTo) || TEAM_MEMBERS[1];
                  return (
                    <tr key={camp.id} className="hover:bg-[#fdf2f2]/60 transition">
                      <td className="py-2.5 px-3 font-bold text-[#231f20] whitespace-nowrap">
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          <span className="w-2 h-2 rounded-full bg-[#d1232a] shrink-0"></span>
                          <span>{camp.name}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className={`inline-block whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          camp.platform === 'Google Ads' 
                            ? 'bg-[#24419f]/10 text-[#24419f] border border-[#24419f]/20' 
                            : 'bg-[#5e0c10]/10 text-[#5e0c10] border border-[#5e0c10]/20'
                        }`}>
                          {camp.platform}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: assignedMember.avatarColor }}
                          />
                          <span className="text-[11px] font-bold text-slate-700">{assignedMember.name}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-semibold whitespace-nowrap font-mono">{(camp.spendSAR ?? camp.spentSAR ?? 0).toLocaleString()} ر.س</td>
                      <td className="py-2.5 px-3 whitespace-nowrap font-mono">{(camp.clicks ?? 0).toLocaleString()}</td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="text-[#208c6b] font-bold font-mono">{camp.ctr}%</span>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#231f20] whitespace-nowrap font-mono">
                        {camp.conversions}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-[#d1232a] whitespace-nowrap font-mono">
                        {camp.costPerConversionSAR} ر.س
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-[#828282]">
            <span>إجمالي التحويلات المحققة: <strong className="text-[#231f20]">{kpis.totalConversions} تحويل</strong></span>
            <span>متوسط تكلفة التحويل العام: <strong className="text-[#d1232a]">{kpis.averageCpa} ر.س</strong></span>
          </div>
        </div>

        {/* Right 1 Col: Mailchimp Email Performance */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#208c6b]/15 text-[#208c6b] flex items-center justify-center font-black text-xs">
                  MC
                </div>
                <div>
                  <h3 className="font-bold text-[#231f20] text-sm">الحملات البريدية (Mailchimp)</h3>
                  <p className="text-[11px] text-[#828282]">النشرة الشهرية الدورية</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#208c6b]/10 text-[#208c6b] border border-[#208c6b]/20 font-bold px-2 py-0.5 rounded-full">
                نشط
              </span>
            </div>

            {/* Newsletter Subject Box */}
            <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 mb-4">
              <span className="text-[10px] text-[#828282] block font-bold mb-1">عنوان النشرة المرسلة:</span>
              <p className="text-xs font-bold text-[#231f20] line-clamp-2">
                "{kpis.emailNewsletterTitle}"
              </p>
            </div>

            {/* Email KPIs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#f8f9fa] p-3 rounded-xl border border-slate-100 text-center">
                <span className="text-[10px] text-[#828282] block font-bold">إجمالي الإرسال</span>
                <span className="text-lg font-black text-[#231f20] font-mono">{kpis.emailTotalSends.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400 block">Total Sends</span>
              </div>
              <div className="bg-[#208c6b]/10 p-3 rounded-xl border border-[#208c6b]/20 text-center">
                <span className="text-[10px] text-[#208c6b] block font-bold">معدل النقر CTR</span>
                <span className="text-lg font-black text-[#208c6b] font-mono">{kpis.emailClickRate}%</span>
                <span className="text-[10px] text-[#208c6b] block">{selectedMonth === 'september_2026' ? '1,073 نقرة' : '801 نقرة'}</span>
              </div>
              <div className="bg-[#24419f]/10 p-3 rounded-xl border border-[#24419f]/20 text-center">
                <span className="text-[10px] text-[#24419f] block font-bold">معدل الفتح</span>
                <span className="text-lg font-black text-[#24419f] font-mono">{kpis.emailOpenRate.toFixed(1)}%</span>
                <span className="text-[10px] text-[#24419f] block">{selectedMonth === 'september_2026' ? '4,101 فتح' : '5,452 فتح'}</span>
              </div>
              <div className="bg-[#fdf2f2] p-3 rounded-xl border border-[#fbd5d7] text-center">
                <span className="text-[10px] text-[#d1232a] block font-bold">معدل الارتداد</span>
                <span className="text-lg font-black text-[#d1232a] font-mono">{kpis.emailBounceRate}%</span>
                <span className="text-[10px] text-[#828282] block">إلغاء: 0.15%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fdf2f2] p-3 rounded-xl border border-[#fbd5d7] text-xs text-[#d1232a] font-medium flex items-center justify-between">
            <span>قفزة كفاءة النقر في سبتمبر:</span>
            <span className="font-black text-sm">+78.1% نمو</span>
          </div>
        </div>

      </div>

      {/* Grid: AI Search (GEO / AEO) & Website Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* GEO / AEO / ChatGPT Performance */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-[#231f20] text-base flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#d1232a]" />
                الظهور في محركات الذكاء الاصطناعي (GEO / AEO)
              </h3>
              <p className="text-xs text-[#828282]">رصد استشهادات ChatGPT و Google AI و Copilot</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('aeo_audit')}
              className="text-xs text-[#d1232a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>فتح مختبر الفحص</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Indicators Badges from Report */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-[#f8f9fa] p-2.5 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] text-[#828282] block font-bold">صفحات الخدمات</span>
              <span className="text-base font-black text-[#d1232a]">{kpis.aeoOptimizedPages}</span>
            </div>
            <div className="bg-[#f8f9fa] p-2.5 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] text-[#828282] block font-bold">الأسئلة المستهدفة</span>
              <span className="text-base font-black text-[#231f20]">{kpis.aeoFaqProgress}</span>
            </div>
            <div className="bg-[#f8f9fa] p-2.5 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] text-[#828282] block font-bold">المحتوى المعرفي</span>
              <span className="text-base font-black text-[#208c6b]">{kpis.aeoKnowledgeContent}</span>
            </div>
            <div className="bg-[#fdf2f2] p-2.5 rounded-xl border border-[#fbd5d7] text-center">
              <span className="text-[10px] text-[#d1232a] block font-bold">نسبة الظهور</span>
              <span className="text-base font-black text-[#d1232a]">{kpis.aeoVisibilityRate}%</span>
            </div>
          </div>

          {/* AI Platforms Comparison Cards */}
          <div className="grid grid-cols-3 gap-3">
            {aeoData.map((plat) => (
              <div key={plat.platformName} className="border border-slate-200 rounded-xl p-3 bg-linear-to-b from-white to-[#f8f9fa] text-center">
                <div className="font-bold text-xs text-[#231f20] mb-2">{plat.platformName}</div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-[#828282]">
                    <span>استعلامات:</span>
                    <strong className="text-[#231f20]">{plat.queriesTested}</strong>
                  </div>
                  <div className="flex justify-between text-[#828282]">
                    <span>استشهادات:</span>
                    <strong className="text-[#24419f] font-bold">{plat.citationsCount}</strong>
                  </div>
                  <div className="flex justify-between text-[#828282]">
                    <span>ذكر صلة:</span>
                    <strong className="text-[#208c6b] font-bold">{plat.brandMentionsCount}</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-[#828282] text-[10px]">دقة الرد:</span>
                    <span className="text-xs font-black text-[#d1232a]">{plat.accuracyRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Analytics & Most Viewed Pages */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-[#231f20] text-base flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-[#24419f]" />
                أكثر الصفحات زيارة على موقع صلة
              </h3>
              <p className="text-xs text-[#828282]">توزيع حركة الزوار والتحويل عبر الصفحات الرئيسية</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#24419f] bg-[#24419f]/10 px-2.5 py-1 rounded-lg">
              {kpis.websiteViewsFormatted} زيارة
            </span>
          </div>

          <div className="space-y-3">
            {topPages.slice(0, 5).map((page, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#231f20] flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-mono w-4">{idx + 1}</span>
                    <span>{page.pageName}</span>
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#828282]">{page.views.toLocaleString()}</span>
                    <span className="font-bold text-[#208c6b] font-mono w-10 text-left">{page.percentage}%</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-[#d1232a] to-[#24419f] rounded-full"
                    style={{ width: `${page.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
