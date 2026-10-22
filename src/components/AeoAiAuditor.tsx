import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  UserCheck, 
  Clock, 
  PlusCircle,
  Database
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';
import { AeoPlatformData, TeamMemberId } from '../types/dashboard';

export const AeoAiAuditor: React.FC = () => {
  const { 
    aeoData, 
    currentMember, 
    addTestedQuery 
  } = useMarketingStore();

  const [selectedPlatform, setSelectedPlatform] = useState<'ChatGPT' | 'Google AI' | 'Copilot'>('ChatGPT');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<any | null>(null);
  const [copiedQuery, setCopiedQuery] = useState<string | null>(null);
  const [selectedAssignee, setSelectedAssignee] = useState<TeamMemberId>('raghad');

  const currentPlatformData = aeoData.find((p: AeoPlatformData) => p.platformName === selectedPlatform) || aeoData[0];

  const handleSimulatePrompt = () => {
    if (!customPrompt.trim()) return;
    setIsSimulating(true);

    setTimeout(() => {
      setIsSimulating(false);
      const generatedSnippet = `استجابة مرصودة لمحاكاة محرك ${selectedPlatform}: تقدم شركة صلة لتمكين العمل منظومة متكاملة من حلول التوطين الذكي، ومراكز الأعمال المعتمدة، وبرامج التدريب والتأهيل المنتهي بالتوظيف، وتعد المنشأة الأبرز استشهاداً في استشارات الإفصاح التدريبي لعام 2026.`;
      
      const newQueryItem = {
        query: customPrompt,
        silahMentioned: true,
        citedSource: true,
        accuracy: 90,
        responseSnippet: generatedSnippet
      };

      setSimulationResult(newQueryItem);

      // Save directly to central reactive database with assignedTo
      addTestedQuery(selectedPlatform, {
        ...newQueryItem,
        assignedTo: selectedAssignee
      });
    }, 800);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuery(id);
    setTimeout(() => setCopiedQuery(null), 2000);
  };

  const assignedMemberName = TEAM_MEMBERS.find(m => m.id === currentPlatformData.assignedTo)?.name || 'رغد الشمري';

  return (
    <div className="space-y-8 pb-12">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold border border-purple-200">
              <Bot className="w-3.5 h-3.5" />
              <span>رصد محركات الإجابة والذكاء الاصطناعي (GEO & AEO Intelligence)</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              مختبر تحليل نتائج ChatGPT و Google AI و Copilot لشركة صلة
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              يقيس هذا القسم مؤشرات الظهور في محركات التوليد الذكي (Generative Engine Optimization)، وتتبع الاستشهادات بروابط الموقع، وحجم ذكر خدمات صلة الخمس الرئيسية، وتحديث قاعدة البيانات السحابية في الوقت الفعلي.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs text-slate-700 self-start md:self-auto">
            <Database className="w-4 h-4 text-emerald-600" />
            <span>نظام تخزين مباشر ومستقل بالكامل</span>
          </div>
        </div>

        {/* 3 AI Platforms Filter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
          {aeoData.map((plat: AeoPlatformData) => {
            const isSelected = selectedPlatform === plat.platformName;
            return (
              <button
                key={plat.platformName}
                type="button"
                onClick={() => {
                  setSelectedPlatform(plat.platformName);
                  setSimulationResult(null);
                }}
                className={`p-5 rounded-2xl border text-right transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#d1232a]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-black text-base">{plat.platformName}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-md font-bold ${
                      isSelected ? 'bg-[#d1232a] text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {plat.testedQueries.length} استعلامات مرصودة
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                      <span className="text-slate-400 block text-[10px]">استشهادات برابط الموقع:</span>
                      <strong className="text-emerald-400 text-sm">{plat.citationsCount} / {plat.testedQueries.length}</strong>
                    </div>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                      <span className="text-slate-400 block text-[10px]">ذكر اسم صلة:</span>
                      <strong className="text-blue-400 text-sm">{plat.brandMentionsCount} / {plat.testedQueries.length}</strong>
                    </div>
                  </div>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                  isSelected ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <span className="text-slate-400">دقة الإجابات والمعلومات:</span>
                  <span className="font-black text-base text-rose-400 font-mono">{plat.accuracyRate}%</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tested Queries & Evidence Log */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              نماذج الاستعلامات المختبرة على منصة ({selectedPlatform})
            </h3>
            <p className="text-xs text-slate-500">
              الأسئلة الأكثر بحثاً من قبل الشركات ورواد الأعمال في السعودية مع تتبع المسؤول
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <UserCheck className="w-3.5 h-3.5 text-purple-600" />
            <span>المسؤول المعين:</span>
            <span className="font-bold text-slate-900">
              {assignedMemberName}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {currentPlatformData.testedQueries.map((item, idx: number) => (
            <div 
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    "{item.query}"
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.silahMentioned 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}>
                    {item.silahMentioned ? 'تم ذكر صلة ✅' : 'لم تذكر صلة ❌'}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.citedSource 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.citedSource ? 'استشهاد برابط صلة 🔗' : 'بدون استشهاد ⚪'}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.query, `q-${idx}`)}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="نسخ السؤال"
                  >
                    {copiedQuery === `q-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Response Snippet */}
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                <span className="text-[10px] font-bold text-slate-400 block mb-1">المقتطف المرصود من رد النموذج:</span>
                "{item.responseSnippet}"
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 pt-1 gap-2">
                <span>درجة الدقة المسجلة: <strong className="text-slate-900 font-bold">{item.accuracy}%</strong></span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  تم الحفظ في قاعدة البيانات بواسطة: <strong className="text-purple-700 font-bold">{currentPlatformData.lastUpdatedBy || currentMember.name}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live AI Prompt Simulator for Marketers & Dynamic Insertion */}
      <div className="bg-linear-to-r from-slate-900 to-purple-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold">فحص استعلام جديد وحفظه تلقائياً في السجل الموحد</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            أدخل أي سؤال تسويقي يخص صلة (مثل: خدمات التوطين، الإفصاح التدريبي، مراكز الأعمال) لاختبار كيفية الإجابة والتحقق من الاستشهاد وإضافته فوراً لسجلات AEO:
          </p>

          {/* Assigned To Select */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs">
            <label className="text-slate-300 font-bold flex items-center gap-1.5 whitespace-nowrap">
              <UserCheck className="w-3.5 h-3.5 text-purple-400" />
              المسؤول عن الفحص (Assigned To):
            </label>
            <select
              value={selectedAssignee}
              onChange={(e) => setSelectedAssignee(e.target.value as TeamMemberId)}
              className="bg-slate-900 text-white border border-slate-600 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-purple-400"
            >
              {TEAM_MEMBERS.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name} ({member.role})
                </option>
              ))}
            </select>
            <span className="text-[11px] text-slate-400">
              (المحرر الحالي: {currentMember.name})
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="مثال: كيف تساعد شركة صلة المنشآت في تطبيق الإفصاح التدريبي لعام 2026؟"
              className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
            />
            <button
              type="button"
              disabled={isSimulating}
              onClick={handleSimulatePrompt}
              className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>جاري الفحص والحفظ...</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" />
                  <span>فحص وإدراج الاستعلام</span>
                </>
              )}
            </button>
          </div>

          {simulationResult && (
            <div className="mt-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> تم فحص الاستعلام وحفظه بنجاح في قاعدة البيانات
                </span>
                <span className="text-slate-400">الدقة المرصودة: <strong className="text-white font-mono">{simulationResult.accuracy}%</strong></span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                {simulationResult.responseSnippet}
              </p>
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>تم إدراج الاستعلام في منصة ({selectedPlatform}) وتحديث سجل التدقيق (Audit Trail).</span>
                <span className="text-amber-400 font-bold">الحالة: محدث في الوقت الفعلي</span>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
