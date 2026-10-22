import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  ArrowUpRight, 
  Plus, 
  Search, 
  Filter, 
  Code2, 
  Share2, 
  Database,
  Building,
  Check,
  User,
  X
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';
import { TechTask, TeamMemberId } from '../types/dashboard';

export const TechApprovalsTracker: React.FC = () => {
  const { techTasks, addTechTask, updateTechTask, currentMember } = useMarketingStore();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterMember, setFilterMember] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<TechTask['category']>('SEO تقني');
  const [newPriority, setNewPriority] = useState<TechTask['priority']>('عالية');
  const [newImpact, setNewImpact] = useState('');
  const [newAssignedTo, setNewAssignedTo] = useState<TeamMemberId>('majed');

  const filteredTasks = techTasks.filter(task => {
    const matchCat = filterCategory === 'all' || task.category === filterCategory;
    const matchStat = filterStatus === 'all' || task.status === filterStatus;
    const matchMember = filterMember === 'all' || task.assignedTo === filterMember;
    const matchSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        task.impact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        task.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchStat && matchMember && matchSearch;
  });

  const handleUpdateStatus = (taskId: string, newStatus: TechTask['status']) => {
    updateTechTask(taskId, { status: newStatus });
  };

  const handleUpdateAssigned = (taskId: string, memberId: TeamMemberId) => {
    updateTechTask(taskId, { assignedTo: memberId });
  };

  const handleAddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addTechTask({
      title: newTitle,
      category: newCategory,
      assignedTo: newAssignedTo,
      priority: newPriority,
      submissionDate: new Date().toISOString().split('T')[0],
      targetDate: '2026-10-30',
      status: 'مرفوع للتقنية',
      impact: newImpact || 'تحسين تجربة المستخدم ومحركات البحث وقواعد البيانات'
    });

    setNewTitle('');
    setNewImpact('');
    setShowAddModal(false);
  };

  // Status counts
  const countCompleted = techTasks.filter(t => t.status === 'تم الاعتماد والتنفيذ').length;
  const countPendingTech = techTasks.filter(t => t.status === 'مرفوع للتقنية' || t.status === 'جاري العمل').length;
  const countReview = techTasks.filter(t => t.status === 'قيد المراجعة').length;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in">
      
      {/* Intro Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>إدارة الاعتمادات والتكامل التقني و CRM</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              سجل التعديلات التقنية المرفوعة للقسم التقني وتكامل CRM
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              تتبع مركزي للتذاكر المرفوعة لفريق تقنية المعلومات (تعديلات الروابط، إضافة الـ Schema، صفحات الـ FAQ، تكامل CRM)، وإدارة منصات الموثوقية واستخراج قوائم B2B مع إسناد المسؤوليات وتتبع سجل التعديلات.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>رفع تذكرة تقنية جديدة</span>
          </button>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-800 font-bold block">تم الاعتماد والتنفيذ</span>
              <span className="text-2xl font-black text-emerald-700">{countCompleted} تذكرة</span>
            </div>
            <CheckCircle2 className="w-8 h-8 text-emerald-600/40" />
          </div>

          <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-amber-800 font-bold block">مرفوع وجاري العمل تقنياً</span>
              <span className="text-2xl font-black text-amber-700">{countPendingTech} تذكرة</span>
            </div>
            <Code2 className="w-8 h-8 text-amber-600/40" />
          </div>

          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-blue-800 font-bold block">قيد المراجعة الإدارية</span>
              <span className="text-2xl font-black text-blue-700">{countReview} تذكرة</span>
            </div>
            <Clock className="w-8 h-8 text-blue-600/40" />
          </div>
        </div>
      </div>

      {/* Trust Platforms Section (Lusha, Apollo, Mawsool, Google Maps) */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Database className="w-4 h-4 text-[#d1232a]" />
              <span>منصات الموثوقية وقواعد بيانات العملاء المحتملين (Trust & Data Platforms)</span>
            </h3>
            <p className="text-xs text-slate-500">
              أدوات استخراج جهات الاتصال المهنية وبناء الموثوقية وتغذية نظام CRM
            </p>
          </div>
          <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-bold">
            مسؤول المسار: ماجد القحطاني
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-linear-to-b from-white to-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-slate-900 text-sm">نظام LUSHA</span>
              <span className="text-[10px] font-bold bg-[#208c6b]/15 text-[#208c6b] px-2 py-0.5 rounded border border-[#208c6b]/30">
                معتمد رسمياً
              </span>
            </div>
            <p className="text-xs text-slate-600">
              تم اعتماده لتوليد ومشاركة بيانات العملاء المحتملين وتحديد مسؤوليات التحويل مع فريق المبيعات.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
              <span>الحالة في التقرير:</span>
              <strong className="text-[#208c6b] font-bold">تم الإنجاز والربط</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-linear-to-b from-white to-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-slate-900 text-sm">قاعدة خرائط جوجل (648 منشأة)</span>
              <span className="text-[10px] font-bold bg-[#24419f]/10 text-[#24419f] px-2 py-0.5 rounded border border-[#24419f]/30">
                قاعدة مكتملة
              </span>
            </div>
            <p className="text-xs text-slate-600">
              تشمل القطاع الصناعي، العقاري، الصحي، والإعاشة في الرياض، الخرج، والمنطقة الشرقية.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
              <span>تحويلات CRM:</span>
              <strong className="text-slate-900 font-bold">3 صفقات معتمدة</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-linear-to-b from-white to-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-slate-900 text-sm">منصة موصول (MAWSOOL)</span>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                قيد التفعيل
              </span>
            </div>
            <p className="text-xs text-slate-600">
              بناء الموثوقية وتأكيد بيانات المنشآت المحلية لتغذية محركات البحث ومساعدات الذكاء الاصطناعي.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
              <span>المراجعة:</span>
              <strong className="text-amber-700 font-bold">بانتظار الاعتماد النهائي</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Table & Controls */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d1232a]"
            >
              <option value="all">كافة التصنيفات</option>
              <option value="SEO تقني">SEO تقني</option>
              <option value="بيانات منظمة Schema">بيانات منظمة Schema</option>
              <option value="تطوير صفحات وFAQ">تطوير صفحات وFAQ</option>
              <option value="تكامل أنظمة CRM">تكامل أنظمة CRM</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d1232a]"
            >
              <option value="all">كافة الحالات</option>
              <option value="تم الاعتماد والتنفيذ">تم الاعتماد والتنفيذ</option>
              <option value="مرفوع للتقنية">مرفوع للتقنية</option>
              <option value="جاري العمل">جاري العمل</option>
              <option value="قيد المراجعة">قيد المراجعة</option>
            </select>

            <select
              value={filterMember}
              onChange={(e) => setFilterMember(e.target.value)}
              className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d1232a] font-bold text-[#231f20]"
            >
              <option value="all">كافة الأعضاء الأربعة</option>
              {TEAM_MEMBERS.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث في تذاكر التقنية..."
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#d1232a]"
            />
          </div>
        </div>

        {/* Tasks List */}
        <div className="divide-y divide-slate-100">
          {filteredTasks.map((task) => {
            const assignedMember = TEAM_MEMBERS.find(m => m.id === task.assignedTo) || TEAM_MEMBERS[3];
            return (
              <div key={task.id} className="p-4 sm:p-5 hover:bg-slate-50 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {task.id}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {task.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      task.priority === 'عالية جداً' ? 'bg-red-50 text-[#d1232a]' :
                      task.priority === 'عالية' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      الأولوية: {task.priority}
                    </span>
                    
                    {/* Assigned To Pill */}
                    <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px]">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: assignedMember.avatarColor }} />
                      <span className="font-bold text-[#231f20]">{assignedMember.name}</span>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm">
                    {task.title}
                  </h4>

                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-800">الأثر المتوقع:</strong> {task.impact}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <select
                    value={task.status}
                    onChange={(e) => handleUpdateStatus(task.id, e.target.value as any)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition cursor-pointer ${
                      task.status === 'تم الاعتماد والتنفيذ' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : task.status === 'قيد المراجعة'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    <option value="مرفوع للتقنية">مرفوع للتقنية</option>
                    <option value="جاري العمل">جاري العمل</option>
                    <option value="قيد المراجعة">قيد المراجعة</option>
                    <option value="تم الاعتماد والتنفيذ">تم الاعتماد والتنفيذ</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-black text-slate-900 text-base">
                رفع تذكرة تعديل تقني جديدة
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNewTask} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">عنوان التعديل التقني المطلوبة *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: تضمين Organization Schema في صفحة التوطين"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">التصنيف</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full text-xs p-2 rounded-xl border border-slate-200"
                  >
                    <option value="SEO تقني">SEO تقني</option>
                    <option value="بيانات منظمة Schema">بيانات منظمة Schema</option>
                    <option value="تطوير صفحات وFAQ">تطوير صفحات وFAQ</option>
                    <option value="تكامل أنظمة CRM">تكامل أنظمة CRM</option>
                    <option value="موثوقية وهوية رقمية">موثوقية وهوية رقمية</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">المسؤول (Assigned To)</label>
                  <select
                    value={newAssignedTo}
                    onChange={(e) => setNewAssignedTo(e.target.value as TeamMemberId)}
                    className="w-full text-xs p-2 rounded-xl border-2 border-[#d1232a]/40 font-bold"
                  >
                    {TEAM_MEMBERS.map(m => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">الأثر التسويقي المرجو</label>
                <input
                  type="text"
                  placeholder="مثال: ظهور روابط صلة في إجابات محركات الذكاء الاصطناعي"
                  value={newImpact}
                  onChange={(e) => setNewImpact(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  حفظ ورفع التذكرة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
