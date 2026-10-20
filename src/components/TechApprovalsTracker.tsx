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
  Check
} from 'lucide-react';
import { TECH_TASKS_DATABASE, LEAD_GEN_SUMMARY } from '../data/marketingData';
import { TechTask } from '../types/dashboard';

export const TechApprovalsTracker: React.FC = () => {
  const [tasks, setTasks] = useState<TechTask[]>(TECH_TASKS_DATABASE);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<TechTask['category']>('SEO تقني');
  const [newPriority, setNewPriority] = useState<TechTask['priority']>('عالية');
  const [newImpact, setNewImpact] = useState('');

  const filteredTasks = tasks.filter(task => {
    const matchCat = filterCategory === 'all' || task.category === filterCategory;
    const matchStat = filterStatus === 'all' || task.status === filterStatus;
    const matchSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        task.impact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        task.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchStat && matchSearch;
  });

  const handleUpdateStatus = (taskId: string, newStatus: TechTask['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const handleAddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: TechTask = {
      id: `TECH-${tasks.length + 101}`,
      title: newTitle,
      category: newCategory,
      assignedTo: 'فريق التقنية',
      priority: newPriority,
      submissionDate: new Date().toISOString().split('T')[0],
      targetDate: '2026-10-30',
      status: 'مرفوع للتقنية',
      impact: newImpact || 'تحسين تجربة المستخدم ومحركات البحث'
    };

    setTasks([newTask, ...tasks]);
    setNewTitle('');
    setNewImpact('');
    setShowAddModal(false);
  };

  // Status counts
  const countCompleted = tasks.filter(t => t.status === 'تم الاعتماد والتنفيذ').length;
  const countPendingTech = tasks.filter(t => t.status === 'مرفوع للتقنية' || t.status === 'جاري العمل').length;
  const countReview = tasks.filter(t => t.status === 'قيد المراجعة').length;

  return (
    <div className="space-y-8 pb-12">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>إدارة الاعتمادات والتكامل التقني ومنصات الموثوقية</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              سجل التعديلات التقنية المرفوعة للقسم التقني ومنصات الموثوقية
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              تتبع مركزي للتذاكر المرفوعة لفريق تقنية المعلومات (تعديلات الروابط، إضافة الـ Schema، صفحات الـ FAQ، تكامل CRM)، إلى جانب إدارة أدوات التنقيب والموثوقية (LUSHA, APOLLO, MAWSOOL).
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
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
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Database className="w-4 h-4 text-[#d1232a]" />
              منصات الموثوقية وقواعد بيانات العملاء المحتملين (Trust & Data Platforms)
            </h3>
            <p className="text-xs text-slate-500">
              أدوات استخراج جهات الاتصال المهنية وبناء الموثوقية الخارجية
            </p>
          </div>
          <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-bold">
            التكامل مع CRM
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
              <span className="font-black text-slate-900 text-sm">منصات APOLLO & MAWSOOL</span>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                تجربة وتقييم
              </span>
            </div>
            <p className="text-xs text-slate-600">
              بحث وتجربة الوصول إلى بيانات التواصل المهنية لصناع القرار وعينات تجريبية مع المبيعات.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
              <span>الخطوة القادمة:</span>
              <strong className="text-amber-700 font-bold">مقارنة التكلفة والجودة</strong>
            </div>
          </div>

        </div>
      </div>

      {/* Tech Tasks Kanban / Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
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
          {filteredTasks.map((task) => (
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
                    task.priority.includes('عالية جداً')
                      ? 'bg-rose-100 text-rose-700'
                      : task.priority === 'عالية'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-slate-400">
                    المسؤول: <strong>{task.assignedTo}</strong>
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm">
                  {task.title}
                </h4>

                <p className="text-xs text-slate-500">
                  <strong className="text-slate-700">الأثر التسويقي:</strong> {task.impact}
                </p>
              </div>

              {/* Status Selector Dropdown */}
              <div className="flex items-center gap-3">
                <div className="text-left text-xs text-slate-400 hidden sm:block">
                  <div>تاريخ الرفع: {task.submissionDate}</div>
                  <div>المستهدف: {task.targetDate}</div>
                </div>

                <select
                  value={task.status}
                  onChange={(e) => handleUpdateStatus(task.id, e.target.value as any)}
                  className={`text-xs font-bold rounded-xl px-3 py-2 border transition cursor-pointer ${
                    task.status === 'تم الاعتماد والتنفيذ'
                      ? 'bg-[#208c6b]/15 text-[#208c6b] border-[#208c6b]/30'
                      : task.status === 'مرفوع للتقنية'
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : task.status === 'جاري العمل'
                      ? 'bg-[#24419f]/10 text-[#24419f] border-[#24419f]/30'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <option value="تم الاعتماد والتنفيذ">تم الاعتماد والتنفيذ ✅</option>
                  <option value="مرفوع للتقنية">مرفوع للتقنية 🚀</option>
                  <option value="جاري العمل">جاري العمل 🛠️</option>
                  <option value="قيد المراجعة">قيد المراجعة ⏳</option>
                  <option value="بانتظار الملاحظات">بانتظار الملاحظات ⚠️</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">رفع تذكرة تقنية / تعديل على الموقع</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddNewTask} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">عنوان المهمة التقنية:</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="مثال: إضافة ترميز Schema.org FAQ لصفحة المتسوق الخفي"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#d1232a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">تصنيف التذكرة:</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#d1232a]"
                  >
                    <option value="SEO تقني">SEO تقني</option>
                    <option value="بيانات منظمة Schema">بيانات منظمة Schema</option>
                    <option value="تطوير صفحات وFAQ">تطوير صفحات وFAQ</option>
                    <option value="تكامل أنظمة CRM">تكامل أنظمة CRM</option>
                    <option value="موثوقية وهوية رقمية">موثوقية وهوية رقمية</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">الأولوية:</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#d1232a]"
                  >
                    <option value="عالية جداً">عالية جداً 🔥</option>
                    <option value="عالية">عالية</option>
                    <option value="متوسطة">متوسطة</option>
                    <option value="منخفضة">منخفضة</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">الأثر التسويقي المتوقع:</label>
                <input
                  type="text"
                  value={newImpact}
                  onChange={(e) => setNewImpact(e.target.value)}
                  placeholder="مثال: زيادة الظهور في نتائج الذكاء الاصطناعي وخفض تكلفة التحويل"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#d1232a]"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#d1232a] text-white hover:bg-[#b01c22] font-bold shadow-xs cursor-pointer"
                >
                  إضافة التذكرة للشيت
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
