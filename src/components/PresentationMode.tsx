import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  CheckCircle, 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  Megaphone, 
  Bot, 
  Users, 
  DollarSign, 
  Target,
  FileSpreadsheet
} from 'lucide-react';
import { MONTHLY_OVERVIEW, CAMPAIGNS_SEP_2026, MARKETING_ROADMAP } from '../data/marketingData';

export const PresentationMode: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    {
      title: 'الملخص التنفيذي وأهم مؤشرات الإنجاز',
      subtitle: 'نظرة شمولية على نتائج سبتمبر 2026 ومقارنتها بالشهر السابق وفق هوية صلة',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">الميزانية المستثمرة</span>
              <div className="text-3xl font-black text-white mb-1">10,194 ر.س</div>
              <span className="text-[#208c6b] text-xs font-bold bg-white/90 px-2 py-0.5 rounded-md inline-block">+2.8% مقارنة بأغسطس</span>
            </div>
            <div className="bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">المهام المنجزة</span>
              <div className="text-3xl font-black text-white mb-1">14 مهمة</div>
              <span className="text-[#208c6b] text-xs font-bold bg-white/90 px-2 py-0.5 rounded-md inline-block">100% التزام بالمستهدف</span>
            </div>
            <div className="bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">مشاهدات الموقع</span>
              <div className="text-3xl font-black text-white mb-1">27,820</div>
              <span className="text-white/70 text-xs">حركة نشطة على صفحات التقديم</span>
            </div>
            <div className="bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">صفقات / عملاء CRM</span>
              <div className="text-3xl font-black text-[#d1232a] bg-white px-2 py-0.5 rounded-lg mb-1 inline-block">5 صفقات</div>
              <span className="text-white text-xs font-bold block mt-1">+66.7% نمو في المبيعات</span>
            </div>
          </div>

          <div className="bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d1232a]" />
              الرسالة الجوهرية للإدارة العليا:
            </h4>
            <p className="text-white/90 text-sm leading-relaxed">
              شهد شهر سبتمبر 2026 قفزة نوعية في <strong>جودة التحويلات وتحقيق عائد مباشر للمبيعات</strong>؛ حيث ارتفعت صفقات الـ CRM إلى 5 صفقات جديدة (+66.7%)، مع مضاعفة معدل النقر التفاعلي للنشرة البريدية بنسبة +78.1%، وتحقيق استشهادات قوية لصلة في محركات الذكاء الاصطناعي بنسبة استشهاد 70% في Google AI و 60% في ChatGPT.
            </p>
          </div>
        </div>
      ),
      speakerNotes: 'ركز أمام الإدارة على كفاءة الميزانية: الإنفاق زاد بنسبة طفيفة 2.8% فقط بينما ارتفعت صفقات الـ CRM من 3 إلى 5 صفقات.'
    },
    {
      title: 'كفاءة الحملات الإعلانية ومصادر التحويلات',
      subtitle: 'توزيع الإنفاق بين Google Ads و LinkedIn وحصاد الاتصالات والواتساب',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15">
              <span className="text-white/70 text-xs block font-bold mb-1">Google Ads (5 حملات)</span>
              <div className="text-2xl font-black text-white mb-2">5,768 ر.س</div>
              <ul className="text-xs text-white/80 space-y-1.5">
                <li>• حلول التوطين: 58 تحويل (12 ر.س/تحويل)</li>
                <li>• تعهيد الأعمال: 108 تحويل (14 ر.س/تحويل)</li>
                <li>• التوطين عبر المعاهد: 53 تحويل (26 ر.س/تحويل)</li>
                <li>• الإفصاح التدريبي: 41 تحويل (23 ر.س/تحويل)</li>
              </ul>
            </div>

            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15">
              <span className="text-white/70 text-xs block font-bold mb-1">LinkedIn Ads & InMail</span>
              <div className="text-2xl font-black text-white mb-2">4,153 ر.س</div>
              <ul className="text-xs text-white/80 space-y-1.5">
                <li>• استهداف دقيق لمسميات الموارد البشرية (HR)</li>
                <li>• حملات بريد InMail ولدت 42 عميلاً محتملاً</li>
                <li>• الإفصاح التدريبي InMail حقق CPL بـ 47 ر.س فقط</li>
                <li>• المتسوق الخفي وصل إلى 4,941 قيادي مستهدف</li>
              </ul>
            </div>

            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15">
              <span className="text-white/70 text-xs block font-bold mb-1">قنوات الاتصال المباشرة</span>
              <div className="text-2xl font-black text-[#208c6b] bg-white px-2 py-0.5 rounded-lg mb-2 inline-block">245 تفاعل مباشر</div>
              <div className="space-y-3 pt-2">
                <div className="bg-white/10 p-3 rounded-xl flex justify-between items-center text-xs">
                  <span>نقرات الواتساب:</span>
                  <strong className="text-emerald-300 text-sm">166 محادثة فورية</strong>
                </div>
                <div className="bg-white/10 p-3 rounded-xl flex justify-between items-center text-xs">
                  <span>نقرات الاتصال الهاتفي:</span>
                  <strong className="text-white text-sm">79 اتصال مباشر</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/25 backdrop-blur-md p-4 rounded-xl border border-white/15 flex items-center justify-between text-xs text-white">
            <span>التوصية: تعزيز ميزانية حملة تعهيد الأعمال (108 تحويل بتكلفة 14 ر.س فقط) لارتفاع الطلب السوقي.</span>
          </div>
        </div>
      ),
      speakerNotes: 'أبرز للإدارة تفوق إعلانات الواتساب المباشرة على نماذج الويب التقليدية، مما سرّع دورة إغلاق صفقات المبيعات.'
    },
    {
      title: 'الريادة في محركات الذكاء الاصطناعي (GEO / AEO)',
      subtitle: 'موقع صلة واستشهاداتها في ChatGPT و Google AI و Copilot',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">Google AI (SGE & Gemini)</span>
              <div className="text-3xl font-black text-white mb-2">70% دقة</div>
              <p className="text-xs text-white/80">
                8 من 10 استعلامات ذكرت خدمات صلة، و 7 استشهادات مباشرة برابط موقع صلة.
              </p>
            </div>
            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">ChatGPT (OpenAI)</span>
              <div className="text-3xl font-black text-white mb-2">60% دقة</div>
              <p className="text-xs text-white/80">
                6 من 10 استعلامات ذكرت خدمات صلة، و 7 استشهادات بمصدر الموقع الرسمي.
              </p>
            </div>
            <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center">
              <span className="text-white/70 text-xs block font-bold mb-1">Microsoft Copilot</span>
              <div className="text-3xl font-black text-white mb-2">50% دقة</div>
              <p className="text-xs text-white/80">
                4 من 10 استعلامات رصدت صلة، و 4 استشهادات لمراكز الأعمال والعمل عن بعد.
              </p>
            </div>
          </div>

          <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-2">
            <span className="text-white font-bold text-xs block">خطوات تعزيز الظهور في الذكاء الاصطناعي:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/90">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#208c6b] bg-white rounded-full shrink-0 mt-0.5" />
                <span>نشر بنك الأسئلة الشائعة (15 من 30 سؤالاً منجزاً حتى الآن).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#208c6b] bg-white rounded-full shrink-0 mt-0.5" />
                <span>تضمين أكواد Schema.org المنظمة في صفحتي الإفصاح والتوظيف.</span>
              </div>
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'بين للإدارة أن الاستثمار المبكر في تهيئة الذكاء الاصطناعي (GEO) يضع صلة في صدارة خيارات الذكاء التوليدي قبل المنافسين.'
    },
    {
      title: 'خارطة المبادرات القادمة والتوصيات التنفيذية',
      subtitle: 'جدول الربع الأخير 2026 (أكتوبر ونوفمبر) وترويج الخدمات الجديدة',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKETING_ROADMAP.map((item, idx) => (
              <div key={idx} className="bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-[#d1232a] text-white font-bold px-2 py-0.5 rounded-full text-[10px]">
                    {item.targetMonth}
                  </span>
                  <span className="text-white/70 font-semibold">{item.channel}</span>
                </div>
                <h4 className="font-bold text-white text-sm">{item.initiative}</h4>
                <p className="text-xs text-white/80">{item.objective}</p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-[#208c6b] font-bold">
                  الحالة: {item.status}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/25 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-2 text-xs text-white">
            <h4 className="font-bold text-amber-300 text-sm">قرارات نطلب اعتمادها من الإدارة اليوم:</h4>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>اعتماد الميزانية التقديرية لرعاية <strong>بودكاست مختلف</strong> لشهر نوفمبر.</li>
              <li>الموافقة على التعاقد مع مزود خدمات إعلانات الواتساب API لإطلاق حملة التوطين المباشرة.</li>
              <li>اعتماد ربط وتغذية نظام CRM التلقائي ببيانات LUSHA لخدمة فريق المبيعات.</li>
            </ul>
          </div>
        </div>
      ),
      speakerNotes: 'اختم العرض بالقرارات الثلاثة المطلوبة بوضوح لضمان استمرار الزخم والتنفيذ في موعده.'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Presentation Deck Container in Silah Identity Dark Gradient */}
      <div className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-[#231f20] via-[#5e0c10] to-[#8a151b] text-white p-6 sm:p-10 shadow-xl transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 overflow-y-auto' : ''
      }`}>
        
        {/* Top Control Bar with Official Silah White Logo */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/15">
          <div className="flex items-center gap-4">
            <div className="h-10 sm:h-12 flex items-center bg-transparent">
              <img 
                src="/public/assets/aistudio/_________-______09c003d7.svg" 
                alt="شركة صلة لتمكين العمل لتقنية المعلومات" 
                className="h-9 sm:h-11 w-auto object-contain bg-transparent"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-[11px] font-bold text-white/60 block">نظام تقرير التسويق الذكي</span>
              <h2 className="text-xs sm:text-sm font-bold text-white">
                عرض تقرير الأداء التنفيذي لمجلس الإدارة
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-white/15 px-3 py-1.5 rounded-xl border border-white/20">
              شريحة {currentSlide + 1} من {slides.length}
            </span>
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer text-white"
              title={isFullscreen ? 'تصغير' : 'ملء الشاشة'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Slide Title & Subtitle */}
        <div className="mb-6 space-y-1">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {slides[currentSlide].title}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm font-medium">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Slide Body */}
        <div className="min-h-[340px]">
          {slides[currentSlide].content}
        </div>

        {/* Speaker Notes Box */}
        <div className="mt-8 pt-4 border-t border-white/15 bg-black/30 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-4 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-white/80 flex items-center gap-2">
            <span className="font-bold text-amber-300">ملاحظة للمقدم (Speaker Note):</span>
            <span>{slides[currentSlide].speakerNotes}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              disabled={currentSlide === 0}
              onClick={handlePrev}
              className="bg-white/15 hover:bg-white/25 disabled:opacity-30 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>
            <button
              type="button"
              disabled={currentSlide === slides.length - 1}
              onClick={handleNext}
              className="bg-[#d1232a] hover:bg-[#b01c22] text-white disabled:opacity-30 px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
