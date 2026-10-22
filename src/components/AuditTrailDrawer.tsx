import React, { useState } from 'react';
import { 
  ShieldCheck, 
  History, 
  User, 
  Clock, 
  Filter, 
  CheckCircle, 
  Edit3, 
  PlusCircle, 
  Trash2,
  RotateCcw
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';

export const AuditTrailDrawer: React.FC = () => {
  const { auditLogs, resetToDefaults } = useMarketingStore();
  const [memberFilter, setMemberFilter] = useState<string>('all');
  const [actionFilter, setActionFilter] = useState<string>('all');

  const filteredLogs = auditLogs.filter(log => {
    if (memberFilter !== 'all' && log.performedById !== memberFilter) return false;
    if (actionFilter !== 'all' && log.action !== actionFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-12 animate-in fade-in">
      
      {/* Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#fdf2f2] text-[#d1232a] px-3 py-1 rounded-full text-xs font-bold border border-[#fbd5d7] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>حوكمة وتتبع تعديلات النظام (Data Ownership & Audit Trail)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#231f20]">
            سجل التدقيق وتتبع العمليات للأعضاء الأربعة
          </h1>
          <p className="text-xs sm:text-sm text-[#828282] max-w-2xl mt-1 leading-relaxed">
            توثيق تاريخي فوري وشامل لكافة عمليات الإضافة، التعديل، والحذف التي ينفذها أعضاء الفريق، مع تسجيل اسم العضو، الوقت والتاريخ، ومحتوى التعديل.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={resetToDefaults}
            className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-2xs"
            title="إعادة ضبط النظام إلى البيانات المعتمدة الأولية"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>استرجاع بيانات الأساس</span>
          </button>
        </div>
      </div>

      {/* Filter and Log Feed Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#828282]" />
            <span className="font-bold text-[#231f20]">تصفية السجل حسب العضو:</span>
            <div className="flex flex-wrap gap-1 mr-2">
              <button
                type="button"
                onClick={() => setMemberFilter('all')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                  memberFilter === 'all'
                    ? 'bg-[#231f20] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                الكل
              </button>
              {TEAM_MEMBERS.map(m => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMemberFilter(m.id)}
                  className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer flex items-center gap-1 ${
                    memberFilter === m.id
                      ? 'bg-[#d1232a] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.avatarColor }} />
                  <span>{m.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#828282]">نوع الإجراء:</span>
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="text-xs p-1.5 rounded-lg border border-slate-200 bg-white font-semibold cursor-pointer"
            >
              <option value="all">كافة العمليات</option>
              <option value="إضافة">إضافة</option>
              <option value="تعديل">تعديل</option>
              <option value="اعتماد">اعتماد</option>
              <option value="حذف">حذف</option>
            </select>
          </div>
        </div>

        {/* Logs Timeline */}
        <div className="space-y-3.5">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-[#828282] text-xs">
              لا توجد عمليات مسجلة مطابقة لمعايير التصفية.
            </div>
          ) : (
            filteredLogs.map((log) => {
              const member = TEAM_MEMBERS.find(m => m.id === log.performedById);
              return (
                <div 
                  key={log.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-[#f8f9fa] hover:bg-white hover:border-[#d1232a]/30 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs group"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Action Icon / Badge */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      log.action === 'إضافة' ? 'bg-[#208c6b]/15 text-[#208c6b]' :
                      log.action === 'اعتماد' ? 'bg-[#24419f]/15 text-[#24419f]' :
                      log.action === 'تعديل' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600'
                    }`}>
                      {log.action === 'إضافة' ? <PlusCircle className="w-5 h-5" /> :
                       log.action === 'اعتماد' ? <CheckCircle className="w-5 h-5" /> :
                       log.action === 'تعديل' ? <Edit3 className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-sm text-[#231f20]">{log.entityName}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          {log.entityType}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fdf2f2] text-[#d1232a]">
                          {log.action}
                        </span>
                      </div>
                      <p className="text-xs text-[#828282] leading-relaxed">
                        {log.details}
                      </p>
                    </div>
                  </div>

                  {/* Author & Timestamp */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 text-xs shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: member?.avatarColor || '#d1232a' }}
                      />
                      <strong className="text-[#231f20]">{log.performedBy}</strong>
                    </div>
                    <span className="text-[11px] font-mono text-[#828282] flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{log.timestamp}</span>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="text-xs text-[#828282] pt-3 border-t border-slate-100 flex items-center justify-between">
          <span>إجمالي العمليات الموثقة: <strong className="text-[#231f20]">{filteredLogs.length} عملية</strong></span>
          <span>التحديث المباشر: متصل ومفعل في الوقت الفعلي</span>
        </div>
      </div>
    </div>
  );
};
