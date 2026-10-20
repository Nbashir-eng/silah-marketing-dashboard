import React, { useState } from 'react';
import { 
  Calculator, 
  Copy, 
  Check, 
  Sparkles, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  DollarSign, 
  Bot, 
  TrendingUp, 
  LineChart
} from 'lucide-react';
import { FORMULA_LIBRARY } from '../data/marketingData';

export const FormulasHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Live Calculator State
  const [calcTargetTasks, setCalcTargetTasks] = useState<number>(14);
  const [calcDoneTasks, setCalcDoneTasks] = useState<number>(14);
  const [calcSepBudget, setCalcSepBudget] = useState<number>(10194);
  const [calcAugBudget, setCalcAugBudget] = useState<number>(9916);

  const categories = [
    { id: 'all', label: 'كافة المعادلات' },
    { id: 'Status', label: 'حساب الحالات والاعتماد' },
    { id: 'Budget', label: 'الميزانيات والإنفاق الإعلاني' },
    { id: 'AEO', label: 'تحليلات الذكاء الاصطناعي AEO' },
    { id: 'Sparkline', label: 'الرسوم البيانية المدمجة (Sparkline)' },
    { id: 'MoM', label: 'المقارنة الشهرية والنمو' },
  ];

  const filteredFormulas = FORMULA_LIBRARY.filter((f) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      (selectedCategory === 'Status' && f.category.includes('الحالات')) ||
      (selectedCategory === 'Budget' && f.category.includes('الميزانيات')) ||
      (selectedCategory === 'AEO' && f.category.includes('الذكاء الاصطناعي')) ||
      (selectedCategory === 'Sparkline' && f.category.includes('Sparkline')) ||
      (selectedCategory === 'MoM' && f.category.includes('المقارنة'));

    const matchesSearch = 
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (formula: string, title: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(title);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
              <Calculator className="w-3.5 h-3.5" />
              <span>محرك المعادلات الحسابية المباشرة لـ Google Sheets</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              مكتبة معادلات Google Sheets الجاهزة للنسخ بنقرة واحدة
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              صيغ معادلات قياسية ومباشرة مصممة خصيصاً لهيكلة بيانات شركة صلة. تم اختبارها وتنسيقها لتوضع مباشرة في ورقة <strong>01_Executive_Dashboard</strong> لحساب الحالات، نسب الإنجاز، العائد على الإعلانات، ونسب دقة الذكاء الاصطناعي دون أي أخطاء.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#d1232a] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن معادلة أو مؤشر..."
              className="w-full pl-3 pr-9 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#d1232a]"
            />
          </div>
        </div>
      </div>

      {/* Interactive Formula Playground / Tester */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">مختبر تجربة المعادلات المباشرة (Live Formula Playground)</h3>
          </div>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg font-mono">
            محاكاة محرك جداول جوجل
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Test 1: Task Completion % */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-[#208c6b] block">
              1. معادلة نسبة إنجاز المهام: =COUNTIF(Range, "مكتمل") / COUNTA(Range)
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">المهام المنجزة المعتمدة:</label>
                <input
                  type="number"
                  value={calcDoneTasks}
                  onChange={(e) => setCalcDoneTasks(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-white font-mono font-bold"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">إجمالي المهام المخططة:</label>
                <input
                  type="number"
                  value={calcTargetTasks}
                  onChange={(e) => setCalcTargetTasks(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-white font-mono font-bold"
                />
              </div>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg flex items-center justify-between">
              <span className="text-xs text-slate-400">النتيجة التلقائية في الخلية:</span>
              <span className="text-lg font-black text-[#208c6b] font-mono">
                {((calcDoneTasks / (calcTargetTasks || 1)) * 100).toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Test 2: MoM Growth % */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-[#d1232a] block">
              2. معادلة النمو الشهري MoM: =(Current_Sep - Previous_Aug) / Previous_Aug
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">ميزانية سبتمبر 2026 (ر.س):</label>
                <input
                  type="number"
                  value={calcSepBudget}
                  onChange={(e) => setCalcSepBudget(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-white font-mono font-bold"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">ميزانية أغسطس 2026 (ر.س):</label>
                <input
                  type="number"
                  value={calcAugBudget}
                  onChange={(e) => setCalcAugBudget(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-white font-mono font-bold"
                />
              </div>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg flex items-center justify-between">
              <span className="text-xs text-slate-400">معدل التغير الشهري المحسوب:</span>
              <span className={`text-lg font-black font-mono ${
                calcSepBudget >= calcAugBudget ? 'text-[#208c6b]' : 'text-[#d1232a]'
              }`}>
                {calcSepBudget >= calcAugBudget ? '+' : ''}
                {(((calcSepBudget - calcAugBudget) / (calcAugBudget || 1)) * 100).toFixed(2)}%
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((item, idx) => {
          const isCopied = copiedFormula === item.title;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-[#d1232a]/30 transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Google Sheets Formula
                  </span>
                </div>
                
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {/* Code Block with Copy Button */}
                <div className="relative group">
                  <div className="p-3 bg-slate-900 text-[#208c6b] rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap break-all pr-10 border border-slate-800">
                    {item.formula}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.formula, item.title)}
                    className="absolute left-2 top-2 bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-lg transition cursor-pointer shadow-xs"
                    title="نسخ المعادلة إلى الحافظة"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-[#208c6b]" /> : <Copy className="w-4 h-4 text-slate-300" />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="text-slate-500">ناتج المعادلة ببيانات صلة:</span>
                  <span className="font-black text-[#d1232a]">{item.outputExample}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
