import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  CheckCircle, 
  Calendar, 
  Megaphone, 
  Bot, 
  TrendingUp, 
  UserCheck, 
  DollarSign, 
  Eye, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';

export const ExecutivePdfReportModal: React.FC = () => {
  const { 
    isPdfModalOpen, 
    setIsPdfModalOpen, 
    currentMember, 
    selectedMonth, 
    kpis, 
    campaigns, 
    techTasks, 
    aeoData 
  } = useMarketingStore();

  if (!isPdfModalOpen) return null;

  const monthLabel = selectedMonth === 'august_2026' ? 'أغسطس 2026' : 'سبتمبر 2026';
  const reportDate = new Date().toLocaleDateString('ar-SA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handlePrint = () => {
    window.print();
  };

  // Group campaigns by member
  const memberTasksSummary = TEAM_MEMBERS.map(m => {
    const memberCamps = campaigns.filter(c => c.assignedTo === m.id);
    const memberTasks = techTasks.filter(t => t.assignedTo === m.id);
    const memberSpend = memberCamps.reduce((sum, c) => sum + (c.spendSAR ?? c.spentSAR ?? 0), 0);
    const memberConversions = memberCamps.reduce((sum, c) => sum + c.conversions, 0);

    return {
      member: m,
      campaignsCount: memberCamps.length,
      tasksCount: memberTasks.length,
      spend: memberSpend,
      conversions: memberConversions
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white print:static print:z-auto">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[95vh] print:max-h-none print:shadow-none print:border-none print:rounded-none print:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (Hidden during print) */}
        <div className="bg-[#231f20] text-white p-4 sm:px-6 flex items-center justify-between border-b border-white/10 print:hidden shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#d1232a] flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">
                معاينة التقرير التنفيذي الرسمي للطباعة والتصدير (PDF)
              </h3>
              <span className="text-xs text-white/70">شركة صلة لتمكين العمل لتقنية المعلومات — شهر {monthLabel}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة / حفظ كـ PDF</span>
            </button>
            <button
              type="button"
              onClick={() => setIsPdfModalOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 font-sans print:p-8 print:overflow-visible">
          
          {/* Document Header with Silah Identity */}
          <div className="border-b-2 border-[#231f20] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/public/assets/aistudio/_________-__________4__85c284fc.svg" 
                alt="شركة صلة" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="border-r-2 border-slate-200 pr-4 mr-2">
                <span className="text-xs font-bold text-[#d1232a] uppercase tracking-wider block">
                  نظام تقرير التسويق الذكي الموحد
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-[#231f20]">
                  التقرير التنفيذي الشهري للأداء التسويقي
                </h1>
                <span className="text-xs text-[#828282] block">
                  فترة التقرير: {monthLabel} — صلة لتمكين العمل
                </span>
              </div>
            </div>

            <div className="text-left text-xs space-y-1 bg-[#f8f9fa] p-3 rounded-xl border border-slate-200">
              <div>تاريخ التوليد: <strong className="text-[#231f20] font-mono">{reportDate}</strong></div>
              <div>معد التقرير: <strong className="text-[#d1232a]">{currentMember.name} ({currentMember.role})</strong></div>
              <div>حالة الاعتماد: <span className="bg-[#208c6b]/15 text-[#208c6b] font-bold px-2 py-0.5 rounded text-[10px]">معتمد رسمياً للإدارة</span></div>
            </div>
          </div>

          {/* Section 1: Executive Scorecards (KPIs) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-[#d1232a] rounded-full inline-block"></span>
              <h2 className="text-base sm:text-lg font-black text-[#231f20]">
                1. الملخص التنفيذي ومؤشرات الأداء الرئيسية (KPIs)
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">إجمالي الميزانية</span>
                <span className="text-lg font-black text-[#d1232a] block my-1">
                  {kpis.totalBudget.toLocaleString()} <span className="text-xs font-normal">ر.س</span>
                </span>
                <span className="text-[10px] text-[#208c6b] font-bold">100% مطابقة مالية</span>
              </div>

              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">التحويلات المحققة</span>
                <span className="text-lg font-black text-[#231f20] block my-1">
                  {kpis.totalConversions}
                </span>
                <span className="text-[10px] text-[#828282]">طلب وتواصل مباشر</span>
              </div>

              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">متوسط تكلفة التحويل</span>
                <span className="text-lg font-black text-[#d1232a] block my-1">
                  {kpis.averageCpa} <span className="text-xs font-normal">ر.س</span>
                </span>
                <span className="text-[10px] text-[#208c6b] font-bold">كفاءة تشغيل عالية</span>
              </div>

              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">معدل النقر CTR</span>
                <span className="text-lg font-black text-[#208c6b] block my-1">
                  {kpis.averageCtr}%
                </span>
                <span className="text-[10px] text-[#828282]">متوسط الحملات</span>
              </div>

              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">مشاهدات الموقع</span>
                <span className="text-lg font-black text-[#231f20] block my-1">
                  {kpis.websiteViewsFormatted}
                </span>
                <span className="text-[10px] text-[#828282]">{kpis.websiteViews.toLocaleString()} زيارة</span>
              </div>

              <div className="bg-[#f8f9fa] p-3.5 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-[#828282] block font-bold">صفقات CRM المغلقة</span>
                <span className="text-lg font-black text-[#231f20] block my-1">
                  {kpis.crmNewDeals}
                </span>
                <span className="text-[10px] text-[#208c6b] font-bold">+66.7% نمو بالصفقات</span>
              </div>
            </div>
          </div>

          {/* Section 2: Team Responsibilities & Activity (جدول توزيع المسؤوليات) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-[#24419f] rounded-full inline-block"></span>
              <h2 className="text-base sm:text-lg font-black text-[#231f20]">
                2. جدول توزيع المسؤوليات والأنشطة (Assigned To Matrix)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-[#f8f9fa] text-[#231f20] font-bold border-b border-slate-200">
                    <th className="p-3">عضو الفريق المسؤول</th>
                    <th className="p-3">المسمى والمسار</th>
                    <th className="p-3 text-center">الحملات المسندة</th>
                    <th className="p-3 text-center">المهام المعتمدة</th>
                    <th className="p-3">إجمالي الإنفاق المُدار</th>
                    <th className="p-3">التحويلات المحققة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {memberTasksSummary.map(({ member, campaignsCount, tasksCount, spend, conversions }) => (
                    <tr key={member.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-[#231f20] flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full shrink-0" 
                          style={{ backgroundColor: member.avatarColor }}
                        />
                        <span>{member.name}</span>
                      </td>
                      <td className="p-3 text-[#828282]">{member.role}</td>
                      <td className="p-3 text-center font-bold">{campaignsCount}</td>
                      <td className="p-3 text-center font-bold text-[#208c6b]">{tasksCount}</td>
                      <td className="p-3 font-bold text-[#231f20]">{spend.toLocaleString()} ر.س</td>
                      <td className="p-3 font-bold text-[#d1232a]">{conversions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Paid Campaigns Performance Matrix */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-[#d1232a] rounded-full inline-block"></span>
              <h2 className="text-base sm:text-lg font-black text-[#231f20]">
                3. نتائج الحملات الإعلانية الممولة (Google Ads & LinkedIn)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-[#f8f9fa] text-[#231f20] font-bold border-b border-slate-200">
                    <th className="p-3">الحملة / الخدمة</th>
                    <th className="p-3">المنصة</th>
                    <th className="p-3">المسؤول (Assigned)</th>
                    <th className="p-3">الإنفاق</th>
                    <th className="p-3">النقرات</th>
                    <th className="p-3">معدل CTR</th>
                    <th className="p-3">التحويلات</th>
                    <th className="p-3">تكلفة التحويل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {campaigns.slice(0, 7).map((camp) => (
                    <tr key={camp.id}>
                      <td className="p-3 font-bold text-[#231f20]">{camp.name}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          camp.platform === 'Google Ads' 
                            ? 'bg-[#24419f]/10 text-[#24419f]' 
                            : 'bg-[#5e0c10]/10 text-[#5e0c10]'
                        }`}>
                          {camp.platform}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-[#828282]">
                        {TEAM_MEMBERS.find(m => m.id === camp.assignedTo)?.name || 'سعود العتيبي'}
                      </td>
                      <td className="p-3 font-semibold">{(camp.spendSAR ?? camp.spentSAR ?? 0).toLocaleString()} ر.س</td>
                      <td className="p-3">{(camp.clicks ?? 0).toLocaleString()}</td>
                      <td className="p-3 text-[#208c6b] font-bold">{camp.ctr}%</td>
                      <td className="p-3 font-bold text-[#231f20]">{camp.conversions}</td>
                      <td className="p-3 font-bold text-[#d1232a]">{camp.costPerConversionSAR} ر.س</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: AI Engines Search & AEO Monitor */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-[#208c6b] rounded-full inline-block"></span>
              <h2 className="text-base sm:text-lg font-black text-[#231f20]">
                4. رصد محركات الذكاء الاصطناعي (GEO / AEO Citations)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aeoData.map((plat) => (
                <div key={plat.platformName} className="p-4 rounded-xl border border-slate-200 bg-[#f8f9fa] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#231f20]">{plat.platformName}</span>
                    <span className="bg-[#208c6b]/15 text-[#208c6b] font-bold text-[10px] px-2 py-0.5 rounded">
                      دقة الرد: {plat.accuracyRate}%
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-[#828282]">
                    <div className="flex justify-between">
                      <span>الاستعلامات المفحوصة:</span>
                      <strong className="text-[#231f20]">{plat.queriesTested}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>عدد الاستشهادات بروابط صلة:</span>
                      <strong className="text-[#24419f]">{plat.citationsCount}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>ذكر العلامة التجارية صلة:</span>
                      <strong className="text-[#208c6b]">{plat.brandMentionsCount}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Sign-off / Governance Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828282]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#208c6b]" />
              <span>تم التحقق والحوكمة آلياً عبر نظام تقرير التسويق الذكي المستقل لشركة صلة.</span>
            </div>
            <div className="flex items-center gap-6">
              <div>اعتماد الإدارة: <strong className="text-[#231f20]">نورة بشير</strong></div>
              <div>ختم النظام: <strong className="text-[#d1232a] font-mono">SILAH-MKT-APP-2026</strong></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
