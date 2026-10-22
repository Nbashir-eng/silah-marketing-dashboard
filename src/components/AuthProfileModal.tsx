import React from 'react';
import { X, CheckCircle, ShieldCheck, User, Sparkles, LogIn, ExternalLink } from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';
import { TeamMemberId } from '../types/dashboard';

interface AuthProfileModalProps {
  onNavigateTab?: (tabId: string) => void;
}

export const AuthProfileModal: React.FC<AuthProfileModalProps> = ({ onNavigateTab }) => {
  const { currentMember, setCurrentMemberId, isAuthModalOpen, setIsAuthModalOpen } = useMarketingStore();

  if (!isAuthModalOpen) return null;

  const handleSelectMember = (id: TeamMemberId, focusTab: string) => {
    setCurrentMemberId(id);
    setIsAuthModalOpen(false);
    if (onNavigateTab) {
      onNavigateTab(focusTab);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-linear-to-r from-[#231f20] via-[#5e0c10] to-[#d1232a] text-white p-6 sm:p-7">
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-white/70 font-semibold block">نظام تقرير التسويق الذكي — صلة</span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  تسجيل الدخول وتبديل بروفايل العضو
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-white/15 text-xs text-white/85 leading-relaxed">
            <span className="font-bold text-white ml-1">مبدأ الصلاحيات المتساوية:</span>
            يتمتع جميع أعضاء الفريق الأربعة بصلاحيات عامة متساوية وشاملة لإدخال وتعديل واعتماد البيانات، ويتم تسجيل اسم العضو تلقائياً في سجل التدقيق (Audit Trail) عند كل عملية.
          </div>
        </div>

        {/* Members Cards List */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="text-xs font-bold text-[#828282] mb-1">
            اختر الحساب لتسجيل الدخول والتوجه التلقائي للمدخلات المخصصة:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {TEAM_MEMBERS.map((member) => {
              const isActive = currentMember.id === member.id;
              return (
                <div
                  key={member.id}
                  onClick={() => handleSelectMember(member.id, member.focusTab)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between group ${
                    isActive 
                      ? 'border-[#d1232a] bg-[#fdf2f2]/60 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
                  }`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0"
                          style={{ backgroundColor: member.avatarColor }}
                        >
                          {member.initials}
                        </div>
                        <div>
                          <h4 className="font-black text-[#231f20] text-sm group-hover:text-[#d1232a] transition">
                            {member.name}
                          </h4>
                          <span className="text-[11px] text-[#828282] font-semibold block">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center gap-1 bg-[#208c6b] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                          <CheckCircle className="w-3 h-3" />
                          <span>نشط الآن</span>
                        </span>
                      )}
                    </div>

                    {/* Email & Description */}
                    <div className="text-[11px] font-mono text-slate-500 mb-2">
                      {member.email}
                    </div>
                    <p className="text-xs text-[#231f20]/80 leading-relaxed line-clamp-2">
                      {member.description}
                    </p>
                  </div>

                  {/* Focus Action link */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#828282]">
                      الواجهة الموجهة: <strong className="text-[#231f20]">{
                        member.focusTab === 'dashboard' ? 'اللوحة التنفيذية' :
                        member.focusTab === 'campaigns_editor' ? 'إدارة الحملات' :
                        member.focusTab === 'aeo_audit' ? 'رصد الذكاء الاصطناعي' : 'المهام والـ CRM'
                      }</strong>
                    </span>
                    <button
                      type="button"
                      className={`font-bold px-2.5 py-1 rounded-lg text-xs transition flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#d1232a] text-white'
                          : 'bg-slate-100 text-[#231f20] group-hover:bg-[#d1232a] group-hover:text-white'
                      }`}
                    >
                      <span>{isActive ? 'الحساب المعتمد' : 'دخول'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9fa] border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#828282]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#d1232a]" />
            <span>الحساب الحالي: <strong className="text-[#231f20]">{currentMember.name} ({currentMember.role})</strong></span>
          </div>
          <button
            type="button"
            onClick={() => setIsAuthModalOpen(false)}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 font-bold text-[#231f20] transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
