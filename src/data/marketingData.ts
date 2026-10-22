import {
  CampaignData,
  SeoPageData,
  AeoPlatformData,
  WebAnalyticsPage,
  LeadGenData,
  TechTask,
  RoadmapItem,
  SheetTabDefinition
} from '../types/dashboard';

// --- DATA FROM AUGUST & SEPTEMBER 2026 REPORTS ---

export const MONTHLY_OVERVIEW = {
  september_2026: {
    monthName: 'سبتمبر 2026',
    period: '01 إلى 30 سبتمبر 2026',
    totalBudgetSAR: 10194,
    completedTasksCount: 14,
    websiteViews: 27820,
    websiteViewsFormatted: '28K',
    activeCampaignsCount: 10,
    crmNewDeals: 5,
    emailTotalSends: 15999,
    emailOpenRate: 25.63, // 4,101 / 15,999
    emailClickRate: 26.16, // 1,073 / 4,101 (or 6.7% of total)
    emailBounceRate: 1.9,
    emailUnsubscribeRate: 0.15,
    emailNewsletterTitle: '4 مؤشرات استراتيجية لتقليل الاستقالات ورفع الإنتاجية',
    aeoVisibilityRate: 20,
    aeoOptimizedPages: '2 من 5',
    aeoFaqProgress: '15 من 30',
    aeoKnowledgeContent: '1 من 1',
  },
  august_2026: {
    monthName: 'أغسطس 2026',
    period: '01 إلى 31 أغسطس 2026',
    totalBudgetSAR: 9916,
    completedTasksCount: 15,
    websiteViews: 41000,
    websiteViewsFormatted: '41K',
    activeCampaignsCount: 8,
    crmNewDeals: 3,
    emailTotalSends: 16008,
    emailOpenRate: 34.06, // 5,452 / 16,008
    emailClickRate: 14.69, // 801 / 5,452
    emailBounceRate: 1.7,
    emailUnsubscribeRate: 0.14,
    emailNewsletterTitle: 'هل تحتاج منشأتك إلى نموذج تشغيل أكثر كفاءة؟',
    aeoVisibilityRate: 19,
    aeoOptimizedPages: '5 من 10',
    aeoFaqProgress: '12 من 30',
    aeoKnowledgeContent: '1 من 1',
  }
};

// Google Ads & LinkedIn Campaigns for September 2026
export const CAMPAIGNS_SEP_2026: CampaignData[] = [
  {
    id: 'g-sep-1',
    name: 'حلول التوطين',
    platform: 'Google Ads',
    type: 'Search & Leads',
    spendSAR: 695,
    impressions: 87667,
    clicks: 5769,
    ctr: 6.58,
    conversions: 58,
    costPerConversionSAR: 12,
    callsClicks: 3,
    whatsappClicks: 58,
    crmDeals: 1,
    status: 'تم الاعتماد'
  },
  {
    id: 'g-sep-2',
    name: 'التوطين عبر المعاهد',
    platform: 'Google Ads',
    type: 'Search & Conversion',
    spendSAR: 1381,
    impressions: 4203,
    clicks: 494,
    ctr: 11.75,
    conversions: 53,
    costPerConversionSAR: 26,
    callsClicks: 15,
    whatsappClicks: 25,
    crmDeals: 1,
    status: 'تم الاعتماد'
  },
  {
    id: 'g-sep-3',
    name: 'الإفصاح التدريبي',
    platform: 'Google Ads',
    type: 'Search & Compliance',
    spendSAR: 934,
    impressions: 2219,
    clicks: 303,
    ctr: 13.65,
    conversions: 41,
    costPerConversionSAR: 23,
    callsClicks: 7,
    whatsappClicks: 22,
    crmDeals: 1,
    status: 'تم الاعتماد'
  },
  {
    id: 'g-sep-4',
    name: 'تعهيد الأعمال (BPO)',
    platform: 'Google Ads',
    type: 'Outsourcing & Leads',
    spendSAR: 1521,
    impressions: 6153,
    clicks: 637,
    ctr: 10.35,
    conversions: 108,
    costPerConversionSAR: 14,
    callsClicks: 33,
    whatsappClicks: 55,
    crmDeals: 1,
    status: 'تم الاعتماد'
  },
  {
    id: 'g-sep-5',
    name: 'مراكز الأعمال',
    platform: 'Google Ads',
    type: 'Business Hubs',
    spendSAR: 1297,
    impressions: 4318,
    clicks: 345,
    ctr: 7.99,
    conversions: 38,
    costPerConversionSAR: 34,
    callsClicks: 21,
    whatsappClicks: 6,
    crmDeals: 0,
    status: 'تم الاعتماد'
  },
  {
    id: 'li-sep-1',
    name: 'الإفصاح التدريبي (LinkedIn Feed)',
    platform: 'LinkedIn',
    type: 'Sponsored Content',
    spendSAR: 169,
    impressions: 2789,
    clicks: 48,
    ctr: 1.72,
    conversions: 19,
    costPerConversionSAR: 8.89,
    reach: 1999,
    cpmSAR: 60,
    targetAudience: 'مسميات الموارد البشرية 22.05%',
    status: 'تم الاعتماد'
  },
  {
    id: 'li-sep-2',
    name: 'المتسوق الخفي (Mystery Shopper)',
    platform: 'LinkedIn',
    type: 'Sponsored Content',
    spendSAR: 1001,
    impressions: 8879,
    clicks: 148,
    ctr: 1.67,
    conversions: 24,
    costPerConversionSAR: 41.7,
    reach: 4941,
    cpmSAR: 113,
    targetAudience: 'الموارد البشرية 21% / المشتريات 6%',
    status: 'تم الاعتماد'
  },
  {
    id: 'li-sep-3',
    name: 'مراكز الأعمال (InMail بريد لينكدإن)',
    platform: 'LinkedIn',
    type: 'Sponsored InMail',
    spendSAR: 1539,
    impressions: 1761,
    clicks: 11,
    ctr: 0.81,
    conversions: 3,
    costPerConversionSAR: 513,
    sends: 1352,
    interactions: 1761,
    leads: 11,
    cplSAR: 140,
    status: 'تم الاعتماد'
  },
  {
    id: 'li-sep-4',
    name: 'الإفصاح التدريبي (InMail بريد لينكدإن)',
    platform: 'LinkedIn',
    type: 'Sponsored InMail',
    spendSAR: 1444,
    impressions: 2409,
    clicks: 31,
    ctr: 1.92,
    conversions: 4,
    costPerConversionSAR: 361,
    sends: 1612,
    interactions: 2409,
    leads: 31,
    cplSAR: 47,
    status: 'تم الاعتماد'
  }
];

// August 2026 Campaigns for Comparison
export const CAMPAIGNS_AUG_2026: CampaignData[] = [
  {
    id: 'g-aug-1',
    name: 'حلول التوطين',
    platform: 'Google Ads',
    type: 'Search & Leads',
    spendSAR: 749,
    impressions: 58643,
    clicks: 6080,
    ctr: 10.37,
    conversions: 59,
    costPerConversionSAR: 12,
    callsClicks: 28,
    whatsappClicks: 9,
    crmDeals: 1,
    status: 'مكتمل'
  },
  {
    id: 'g-aug-2',
    name: 'التوطين عبر المعاهد',
    platform: 'Google Ads',
    type: 'Search & Conversion',
    spendSAR: 1463,
    impressions: 3516,
    clicks: 440,
    ctr: 12.51,
    conversions: 53,
    costPerConversionSAR: 27,
    callsClicks: 25,
    whatsappClicks: 21,
    crmDeals: 1,
    status: 'مكتمل'
  },
  {
    id: 'g-aug-3',
    name: 'الإفصاح التدريبي',
    platform: 'Google Ads',
    type: 'Search & Compliance',
    spendSAR: 910,
    impressions: 1723,
    clicks: 235,
    ctr: 13.64,
    conversions: 30,
    costPerConversionSAR: 30,
    callsClicks: 5,
    whatsappClicks: 23,
    crmDeals: 0,
    status: 'مكتمل'
  },
  {
    id: 'g-aug-4',
    name: 'تعهيد الأعمال (BPO)',
    platform: 'Google Ads',
    type: 'Outsourcing & Leads',
    spendSAR: 1519,
    impressions: 4372,
    clicks: 486,
    ctr: 11.12,
    conversions: 78,
    costPerConversionSAR: 19,
    callsClicks: 3,
    whatsappClicks: 68,
    crmDeals: 0,
    status: 'مكتمل'
  },
  {
    id: 'g-aug-5',
    name: 'مراكز الأعمال',
    platform: 'Google Ads',
    type: 'Business Hubs',
    spendSAR: 1161,
    impressions: 3906,
    clicks: 578,
    ctr: 14.80,
    conversions: 36,
    costPerConversionSAR: 32,
    callsClicks: 25,
    whatsappClicks: 1,
    crmDeals: 1,
    status: 'مكتمل'
  },
  {
    id: 'li-aug-1',
    name: 'الإفصاح التدريبي (LinkedIn Feed)',
    platform: 'LinkedIn',
    type: 'Sponsored Content',
    spendSAR: 939,
    impressions: 10742,
    clicks: 154,
    ctr: 1.43,
    conversions: 7,
    costPerConversionSAR: 134,
    reach: 5160,
    cpmSAR: 87,
    targetAudience: 'الموارد البشرية 36.39%',
    status: 'مكتمل'
  },
  {
    id: 'li-aug-2',
    name: 'العمل عن بعد (Telework)',
    platform: 'LinkedIn',
    type: 'Sponsored Content',
    spendSAR: 1233,
    impressions: 9602,
    clicks: 242,
    ctr: 2.52,
    conversions: 20,
    costPerConversionSAR: 61.6,
    reach: 8950,
    cpmSAR: 128,
    targetAudience: 'الموارد البشرية 24%',
    status: 'مكتمل'
  },
  {
    id: 'li-aug-3',
    name: 'المتسوق الخفي (Mystery Shopper)',
    platform: 'LinkedIn',
    type: 'Sponsored Content',
    spendSAR: 825,
    impressions: 59615,
    clicks: 997,
    ctr: 1.67,
    conversions: 0,
    costPerConversionSAR: 0,
    reach: 15690,
    cpmSAR: 13,
    targetAudience: 'الموارد البشرية 10%',
    status: 'مكتمل'
  }
];

// Website Most Viewed Pages (September 2026)
export const TOP_PAGES_SEP_2026: WebAnalyticsPage[] = [
  { pageName: 'تقدم الآن (Apply Now)', views: 9823, percentage: 35.3, category: 'Landing Page' },
  { pageName: 'الصفحة الرئيسية (Home Page)', views: 7796, percentage: 28.0, category: 'Landing Page' },
  { pageName: 'احصل على تسعيرة (Get Quote)', views: 3764, percentage: 13.5, category: 'Conversion' as any },
  { pageName: 'صفحة الواتساب (WhatsApp Gateway)', views: 777, percentage: 2.8, category: 'Contact' },
  { pageName: 'مقارنة الباقات (Plans Comparison)', views: 713, percentage: 2.6, category: 'Product' },
  { pageName: 'برنامج صلة لتتبع الوقت (Time Tracking)', views: 544, percentage: 2.0, category: 'Product' },
  { pageName: 'خدمات توظيف السعوديين (Saudization)', views: 512, percentage: 1.8, category: 'Services' },
  { pageName: 'تحدث إلينا (Contact Us)', views: 489, percentage: 1.8, category: 'Contact' },
  { pageName: 'التوطين عبر المعاهد (Institute Training)', views: 361, percentage: 1.3, category: 'Services' },
];

export const TOP_PAGES_AUG_2026: WebAnalyticsPage[] = [
  { pageName: 'الصفحة الرئيسية', views: 7032, percentage: 17.1, category: 'Landing Page' },
  { pageName: 'تقدم الآن', views: 5759, percentage: 14.0, category: 'Landing Page' },
  { pageName: 'خدمات توظيف السعوديين', views: 3332, percentage: 8.1, category: 'Services' },
  { pageName: 'احصل على تسعيرة', views: 2228, percentage: 5.4, category: 'Conversion' as any },
  { pageName: 'صفحة الواتساب', views: 1508, percentage: 3.7, category: 'Contact' },
  { pageName: 'برنامج صلة لتتبع الوقت', views: 538, percentage: 1.3, category: 'Product' },
  { pageName: 'مقارنة الباقات', views: 490, percentage: 1.2, category: 'Product' },
  { pageName: 'التوطين عبر المعاهد', views: 288, percentage: 0.7, category: 'Services' },
  { pageName: 'تحدث إلينا', views: 252, percentage: 0.6, category: 'Contact' },
];

// AI & Search Engine Optimization (GEO / AEO / ChatGPT / Copilot / Google AI)
export const AEO_PLATFORMS_DATA: Record<'september_2026' | 'august_2026', AeoPlatformData[]> = {
  september_2026: [
    {
      platformName: 'ChatGPT',
      queriesTested: 10,
      citationsCount: 7,
      brandMentionsCount: 6,
      accuracyRate: 60,
      keyServicesMentioned: ['العمل عن بُعد', 'مراكز الأعمال', 'خدمات التوظيف والإسناد', 'التوظيف عبر الشراكات'],
      testedQueries: [
        {
          query: 'ما هي أفضل شركات تتيح مراكز أعمال وحلول عمل عن بعد في السعودية؟',
          silahMentioned: true,
          citedSource: true,
          accuracy: 80,
          responseSnippet: 'تعد شركة صلة (Silah) من أبرز مزودي حلول تمكين العمل عن بعد ومراكز الأعمال المرخصة في المملكة...'
        },
        {
          query: 'كيف يمكن لشركات القطاع الخاص تحقيق متطلبات الإفصاح التدريبي وفق وزارة الموارد البشرية؟',
          silahMentioned: true,
          citedSource: true,
          accuracy: 70,
          responseSnippet: 'توفر شركة صلة برامج مساعدة واستشارات لربط الإفصاح التدريبي وتوطين المعاهد...'
        },
        {
          query: 'ما هي معايير تنفيذ برنامج المتسوق الخفي لقياس رضا العملاء في الرياض؟',
          silahMentioned: false,
          citedSource: false,
          accuracy: 40,
          responseSnippet: 'توجد عدة شركات استشارية بالمملكة متخصصة في المتسوق الخفي (لم يتم استشهاد صلة في النتيجة العامة).'
        }
      ]
    },
    {
      platformName: 'Google AI',
      queriesTested: 10,
      citationsCount: 7,
      brandMentionsCount: 8,
      accuracyRate: 70,
      keyServicesMentioned: ['مراكز الأعمال', 'التوظيف والتدريب', 'بوابة العمل عن بعد', 'الإفصاح التدريبي'],
      testedQueries: [
        {
          query: 'شروط ترخيص مركز أعمال في السعودية وخدمات شركة صلة',
          silahMentioned: true,
          citedSource: true,
          accuracy: 85,
          responseSnippet: 'مراكز صلة للأعمال تقدم بنية تقنية متكاملة ومكاتب مجهزة لدعم الشركات ورواد الأعمال...'
        },
        {
          query: 'برامج التوطين المبتدئ بالتدريب ومعاهد الشراكات',
          silahMentioned: true,
          citedSource: true,
          accuracy: 75,
          responseSnippet: 'صلة لتمكين العمل توفر برامج تدريب وتأهيل للكوادر الوطنية بالشراكة مع المعاهد المعتمدة.'
        }
      ]
    },
    {
      platformName: 'Copilot',
      queriesTested: 10,
      citationsCount: 4,
      brandMentionsCount: 4,
      accuracyRate: 50,
      keyServicesMentioned: ['خدمات التوظيف', 'حلول العمل عن بعد'],
      testedQueries: [
        {
          query: 'منصات توظيف السعوديين والعمل عن بعد المعتمدة',
          silahMentioned: true,
          citedSource: true,
          accuracy: 60,
          responseSnippet: 'بوابة صلة للعمل عن بعد تتيح فرص وظيفية موثقة وفق اللوائح التنظيمية.'
        }
      ]
    }
  ],
  august_2026: [
    {
      platformName: 'ChatGPT',
      queriesTested: 10,
      citationsCount: 7,
      brandMentionsCount: 7,
      accuracyRate: 70,
      keyServicesMentioned: ['العمل عن بُعد', 'مراكز الأعمال', 'التوطين عبر المعاهد'],
      testedQueries: []
    },
    {
      platformName: 'Google AI',
      queriesTested: 10,
      citationsCount: 8,
      brandMentionsCount: 8,
      accuracyRate: 80,
      keyServicesMentioned: ['العمل عن بعد', 'مراكز الأعمال', 'الإسناد والتوظيف'],
      testedQueries: []
    },
    {
      platformName: 'Copilot',
      queriesTested: 10,
      citationsCount: 4,
      brandMentionsCount: 4,
      accuracyRate: 50,
      keyServicesMentioned: ['التوظيف المبتدئ', 'العمل عن بعد'],
      testedQueries: []
    }
  ]
};

// SEO Pages & Targeted Services from Report
export const SEO_PAGES_DATABASE: SeoPageData[] = [
  {
    id: 'seo-1',
    pageName: 'مراكز الأعمال (Business Centers)',
    urlPath: '/services/business-centers',
    targetKeywords: ['مراكز أعمال الرياض', 'مكاتب مشتركة للشركات', 'ترخيص مركز أعمال صلة'],
    currentRanking: 3,
    previousRanking: 6,
    viewsMonthly: 1240,
    faqStatus: 'منشور',
    schemaImplemented: true,
    metaTagsStatus: 'مكتمل ومحسن',
    techChangesSubmitted: 'إضافة Schema LocalBusiness و Breadcrumbs',
    trustSourcesCount: 8,
    approvalStatus: 'تم الاعتماد',
    notes: 'تم تحديث المحتوى وإضافة قسم الأسئلة الشائعة في سبتمبر'
  },
  {
    id: 'seo-2',
    pageName: 'مراكز المهن الفنية الهندسية (Engineering Tech Hubs)',
    urlPath: '/services/engineering-hubs',
    targetKeywords: ['مركز المهن الفنية الهندسية عسير', 'تدريب مهندسين صلة', 'تأهيل الكوادر الفنية'],
    currentRanking: 5,
    previousRanking: 8,
    viewsMonthly: 890,
    faqStatus: 'قيد المراجعة',
    schemaImplemented: true,
    metaTagsStatus: 'قيد التحديث',
    techChangesSubmitted: 'تعديل رابط الصفحة وإضافة معرض صور مقر عسير',
    trustSourcesCount: 5,
    approvalStatus: 'قيد المراجعة',
    notes: 'بانتظار اعتماد تصاميم المقر ومحتوى الأسئلة الفنية'
  },
  {
    id: 'seo-3',
    pageName: 'المتسوق الخفي (Mystery Shopper)',
    urlPath: '/services/mystery-shopping',
    targetKeywords: ['خدمات المتسوق الخفي بالسعودية', 'تقييم جودة الفروع', 'قياس رضا العملاء'],
    currentRanking: 4,
    previousRanking: 7,
    viewsMonthly: 1120,
    faqStatus: 'جاري الصياغة',
    schemaImplemented: false,
    metaTagsStatus: 'قيد التحديث',
    techChangesSubmitted: 'طلب إضافة جدول مقارنة المعايير ونموذج طلب تقييم',
    trustSourcesCount: 4,
    approvalStatus: 'قيد المراجعة',
    notes: 'قيد إعداد حزمة الأسئلة الشائعة (FAQ) مع مدير الخدمة'
  },
  {
    id: 'seo-4',
    pageName: 'التوظيف المبتدئ بالتدريب (Entry Training & Hiring)',
    urlPath: '/services/training-employment',
    targetKeywords: ['التوظيف المبتدئ بالتدريب', 'توطين المعاهد', 'دعم التدريب والتأهيل'],
    currentRanking: 2,
    previousRanking: 5,
    viewsMonthly: 2150,
    faqStatus: 'منشور',
    schemaImplemented: true,
    metaTagsStatus: 'مكتمل ومحسن',
    techChangesSubmitted: 'نشر جزء الأسئلة الشائعة (تم اعتماده ونشره في سبتمبر)',
    trustSourcesCount: 12,
    approvalStatus: 'تم الاعتماد',
    notes: 'إحدى الصفحتين المنجزتين بالكامل في تقرير سبتمبر'
  },
  {
    id: 'seo-5',
    pageName: 'الإفصاح التدريبي (Training Disclosure Compliance)',
    urlPath: '/services/training-disclosure',
    targetKeywords: ['متطلبات الإفصاح التدريبي 2026', 'برنامج الإفصاح التدريبي صلة', 'احتساب التدريب'],
    currentRanking: 1,
    previousRanking: 4,
    viewsMonthly: 3410,
    faqStatus: 'منشور',
    schemaImplemented: true,
    metaTagsStatus: 'مكتمل ومحسن',
    techChangesSubmitted: 'إضافة FAQ Schema ونموذج فحص أهلية المنشأة للمطابقة',
    trustSourcesCount: 15,
    approvalStatus: 'تم الاعتماد',
    notes: 'الصفحة الثانية المنجزة في مسار GEO/AEO وربطها مع حملات لينكدإن'
  },
  {
    id: 'seo-6',
    pageName: 'العمل عن بعد (Telework Gateway)',
    urlPath: '/services/remote-work',
    targetKeywords: ['بوابة العمل عن بعد صلة', 'وظائف العمل عن بعد للشركات', 'توثيق عقود عن بعد'],
    currentRanking: 2,
    previousRanking: 3,
    viewsMonthly: 4890,
    faqStatus: 'قيد المراجعة',
    schemaImplemented: true,
    metaTagsStatus: 'مكتمل ومحسن',
    techChangesSubmitted: 'تحديث صفحة باقات العمل عن بعد وتحديث دليل البوابة',
    trustSourcesCount: 18,
    approvalStatus: 'تم الاعتماد',
    notes: 'تم تحديث وثيقة تنظيم العمل عن بعد ودليل البوابة'
  },
  {
    id: 'seo-7',
    pageName: 'الصفحة الرئيسية وتوحيد الهوية الرقمية',
    urlPath: '/',
    targetKeywords: ['شركة صلة لتمكين العمل', 'حلول الموارد البشرية والتقنية', 'صلة لتقنية المعلومات'],
    currentRanking: 1,
    previousRanking: 1,
    viewsMonthly: 7796,
    faqStatus: 'منشور',
    schemaImplemented: true,
    metaTagsStatus: 'مكتمل ومحسن',
    techChangesSubmitted: 'تحديث محتوى الصفحة الرئيسية وربط الروابط الداخلية',
    trustSourcesCount: 25,
    approvalStatus: 'تم الاعتماد',
    notes: 'بناء محتوى ملائم لمحركات البحث وتوحيد الرسائل التسويقية'
  }
];

// Tech Tasks Submitted & Handled
export const TECH_TASKS_DATABASE: TechTask[] = [
  {
    id: 'TECH-101',
    title: 'إضافة قسم الأسئلة الشائعة (FAQ) وتضمين Schema.org في صفحة الإفصاح التدريبي',
    category: 'بيانات منظمة Schema',
    assignedTo: 'فريق التقنية',
    priority: 'عالية جداً',
    submissionDate: '2026-09-04',
    targetDate: '2026-09-12',
    status: 'تم الاعتماد والتنفيذ',
    impact: 'زيادة الاستشهادات في ChatGPT و Google AI بنسبة 35%',
    sheetRowRef: 'Row 4'
  },
  {
    id: 'TECH-102',
    title: 'إضافة قسم الأسئلة الشائعة في صفحة معاهد الشراكات والتوظيف بالتدريب',
    category: 'تطوير صفحات وFAQ',
    assignedTo: 'فريق التقنية',
    priority: 'عالية',
    submissionDate: '2026-09-08',
    targetDate: '2026-09-18',
    status: 'تم الاعتماد والتنفيذ',
    impact: 'رفع معدل الظهور العضوي وتوفير إجابات مباشرة لمحركات البحث',
    sheetRowRef: 'Row 5'
  },
  {
    id: 'TECH-103',
    title: 'تحديث محتوى وبنية صفحة باقات العمل عن بعد',
    category: 'SEO تقني',
    assignedTo: 'فريق التقنية',
    priority: 'عالية',
    submissionDate: '2026-09-15',
    targetDate: '2026-09-24',
    status: 'تم الاعتماد والتنفيذ',
    impact: 'تسهيل مقارنة الباقات للعملاء وخفض معدل الارتداد',
    sheetRowRef: 'Row 6'
  },
  {
    id: 'TECH-104',
    title: 'تعديل بنية الروابط الداخلية (Internal Links) لصفحات الخدمات الرئيسية',
    category: 'SEO تقني',
    assignedTo: 'فريق التقنية',
    priority: 'متوسطة',
    submissionDate: '2026-09-19',
    targetDate: '2026-09-28',
    status: 'تم الاعتماد والتنفيذ',
    impact: 'تحسين فهرسة Google وزيادة سلطة الصفحات الداخلية',
    sheetRowRef: 'Row 7'
  },
  {
    id: 'TECH-105',
    title: 'إعداد الربط التقني لقاعدة بيانات المنشآت مع نظام CRM والمبيعات',
    category: 'تكامل أنظمة CRM',
    assignedTo: 'فريق التقنية',
    priority: 'عالية جداً',
    submissionDate: '2026-09-22',
    targetDate: '2026-10-05',
    status: 'جاري العمل',
    impact: 'تغذية المبيعات بـ 648 جهة اتصال وتوزيع العملاء آلياً',
    sheetRowRef: 'Row 8'
  },
  {
    id: 'TECH-106',
    title: 'ربط مزودي خدمات إعلانات الواتساب المعتمدين مع الـ API',
    category: 'تكامل أنظمة CRM',
    assignedTo: 'فريق التقنية',
    priority: 'عالية',
    submissionDate: '2026-09-25',
    targetDate: '2026-10-10',
    status: 'مرفوع للتقنية',
    impact: 'إطلاق حملة واتساب المجدولة لشهر نوفمبر 2026',
    sheetRowRef: 'Row 9'
  },
  {
    id: 'TECH-107',
    title: 'بناء ونشر محتوى الأسئلة الشائعة لصفحة المتسوق الخفي ومراكز الأعمال',
    category: 'تطوير صفحات وFAQ',
    assignedTo: 'فريق التسويق',
    priority: 'متوسطة',
    submissionDate: '2026-09-28',
    targetDate: '2026-10-15',
    status: 'قيد المراجعة',
    impact: 'استكمال هدف الـ 30 سؤال شائعة لرفع نسبة الظهور إلى 40%',
    sheetRowRef: 'Row 10'
  }
];

// Marketing Roadmap / Next Steps
export const MARKETING_ROADMAP: RoadmapItem[] = [
  {
    id: 'ROAD-01',
    initiative: 'إطلاق حملة العمل عن بعد الموجهة لأصحاب الأعمال',
    channel: 'البريد الإلكتروني',
    serviceTarget: 'حلول العمل عن بعد',
    targetMonth: 'أكتوبر 2026',
    objective: 'استهداف مسؤولي الموارد البشرية عبر Mailchimp برؤى تنظيمية وحوافز التوطين',
    status: 'قيد الإعداد'
  },
  {
    id: 'ROAD-02',
    initiative: 'إطلاق حملات الترويج المباشر لحلول التوطين',
    channel: 'واتساب',
    serviceTarget: 'حلول التوطين الشاملة',
    targetMonth: 'نوفمبر 2026',
    objective: 'الوصول المباشر لصناع القرار مع خيارات محادثة فورية وحساب نسب التوطين',
    status: 'مجدول'
  },
  {
    id: 'ROAD-03',
    initiative: 'إصدار النشرة الشهرية المتخصصة في الالتزام والتدريب',
    channel: 'النشرة الشهرية',
    serviceTarget: 'الإفصاح التدريبي',
    targetMonth: 'نوفمبر 2026',
    objective: 'تعزيز مكانة صلة كمرجع معرفي أول للامتثال قبل الإغلاق السنوي',
    status: 'معتمد'
  },
  {
    id: 'ROAD-04',
    initiative: 'رعاية وحملة إعلانية مشتركة مع بودكاست مختلف',
    channel: 'بودكاست مختلف',
    serviceTarget: 'ترويج باقة خدمات صلة المتكاملة',
    targetMonth: 'نوفمبر 2026',
    objective: 'الوصول إلى شريحة رواد الأعمال والمدراء التنفيذيين في المملكة',
    status: 'بانتظار المحتوى'
  }
];

// Lead Gen & B2B Database Tracker
export const LEAD_GEN_SUMMARY: LeadGenData[] = [
  {
    source: 'Google Maps Crawl & Targeted Prospecting (أغسطس)',
    totalRecords: 648,
    qualifiedLeads: 5,
    sectors: ['الصناعي', 'العقاري', 'الصحي', 'الإعاشة'],
    regions: ['الرياض', 'الخرج', 'المنطقة الشرقية'],
    status: 'تم تسليمها للمبيعات وتنظيم الصلاحيات',
    toolsUsed: ['LUSHA', 'APOLLO', 'MAWSOOL'],
    proposalsSent: 'N/A',
    successfulDeals: '3 صفقات في CRM'
  },
  {
    source: 'حملات لينكدإن InMail المتخصصة (سبتمبر)',
    totalRecords: 2964, // 1352 + 1612 sends
    qualifiedLeads: 42, // 11 + 31 leads
    sectors: ['الشركات المتوسطة والكبرى', 'قطاع المقاولات والخدمات'],
    regions: ['كافة مناطق المملكة'],
    status: 'متابعة مباشرة عبر فريق المبيعات',
    toolsUsed: ['LinkedIn InMail', 'LUSHA CRM Integration'],
    proposalsSent: 'قيد الإعداد',
    successfulDeals: '5 صفقات في CRM'
  }
];

export const LEAD_GENERATION_DATABASE = LEAD_GEN_SUMMARY;

// ==========================================
// THE 9 GOOGLE SHEETS ARCHITECTURE TABS SPEC
// ==========================================

export const GOOGLE_SHEETS_ARCHITECTURE: SheetTabDefinition[] = [
  {
    id: 'tab-01',
    tabNumber: '01',
    nameAr: 'التقرير التنفيذي (Dashboard)',
    nameEn: '01_Executive_Dashboard',
    color: '#d1232a',
    purpose: 'واجهة القيادة الموحدة للإدارة العليا مع بطاقات الأداء الرئيسية (Scorecards)، الرسوم البيانية التفاعلية، ومقارنة التغير الشهري MoM.',
    columns: [
      { colLetter: 'A', headerAr: 'المؤشر الرئيسي (KPI Metric)', headerEn: 'KPI_Metric', dataType: 'Text', description: 'اسم المؤشر التنفيذي المراد تتبعه', example: 'إجمالي الميزانية المستثمرة' },
      { colLetter: 'B', headerAr: 'القيمة الحالية (سبتمبر)', headerEn: 'Current_Value_Sep', dataType: 'Number', description: 'القيمة المسحوبة تلقائياً بواسطة المعادلات', example: '10,194 ر.س' },
      { colLetter: 'C', headerAr: 'الشهر السابق (أغسطس)', headerEn: 'Previous_Value_Aug', dataType: 'Number', description: 'قيمة الشهر المقارن للمعيار القياسي', example: '9,916 ر.س' },
      { colLetter: 'D', headerAr: 'نسبة التغير (MoM %)', headerEn: 'MoM_Growth_Rate', dataType: 'Percentage (%)', formula: '=(B2-C2)/C2', description: 'حساب نسبة النمو أو التحسن آلياً', example: '+2.8%' },
      { colLetter: 'E', headerAr: 'الهدف الشهري المخطط', headerEn: 'Monthly_Target', dataType: 'Number', description: 'المستهدف الشهري المحدد من الإدارة', example: '10,000 ر.س' },
      { colLetter: 'F', headerAr: 'نسبة تحقيق الهدف', headerEn: 'Target_Achievement', dataType: 'Percentage (%)', formula: '=B2/E2', description: 'حساب نسبة إنجاز الهدف التلقائي', example: '101.9%' },
      { colLetter: 'G', headerAr: 'مؤشر الحالة البصري', headerEn: 'Visual_Status', dataType: 'Dropdown', dropdownOptions: ['ممتاز 🟢', 'مقبول 🟡', 'يحتاج تدخل 🔴'], description: 'تقييم بصري سريع للإدارة', example: 'ممتاز 🟢' },
      { colLetter: 'H', headerAr: 'الرسم البياني المصغر (Sparkline)', headerEn: 'Sparkline_Trend', dataType: 'Text', formula: '=SPARKLINE(B2:C2, {"charttype","bar";"color1","#d1232a"})', description: 'رسم بياني صغير الحجم مدمج في الخلية', example: '📈' }
    ],
    sampleData: [
      { KPI_Metric: 'إجمالي الميزانية المنفقة', Current_Value_Sep: '10,194 ر.س', Previous_Value_Aug: '9,916 ر.س', MoM_Growth_Rate: '+2.8%', Monthly_Target: '10,000 ر.س', Target_Achievement: '101.9%', Visual_Status: 'ممتاز 🟢' },
      { KPI_Metric: 'المهام والمشاريع المنجزة', Current_Value_Sep: 14, Previous_Value_Aug: 15, MoM_Growth_Rate: '-6.7%', Monthly_Target: 14, Target_Achievement: '100%', Visual_Status: 'ممتاز 🟢' },
      { KPI_Metric: 'إجمالي مشاهدات الموقع', Current_Value_Sep: '27,820', Previous_Value_Aug: '41,000', MoM_Growth_Rate: '-32.1%', Monthly_Target: '30,000', Target_Achievement: '92.7%', Visual_Status: 'مقبول 🟡' },
      { KPI_Metric: 'الحملات الإعلانية الفعالة', Current_Value_Sep: 10, Previous_Value_Aug: 8, MoM_Growth_Rate: '+25.0%', Monthly_Target: 10, Target_Achievement: '100%', Visual_Status: 'ممتاز 🟢' },
      { KPI_Metric: 'عملاء جدد في CRM', Current_Value_Sep: 5, Previous_Value_Aug: 3, MoM_Growth_Rate: '+66.7%', Monthly_Target: 4, Target_Achievement: '125%', Visual_Status: 'ممتاز 🟢' },
      { KPI_Metric: 'نسبة الظهور في الذكاء الاصطناعي AEO', Current_Value_Sep: '20%', Previous_Value_Aug: '19%', MoM_Growth_Rate: '+5.3%', Monthly_Target: '25%', Target_Achievement: '80%', Visual_Status: 'مقبول 🟡' },
      { KPI_Metric: 'معدل النقر البريدي CTR', Current_Value_Sep: '26.16%', Previous_Value_Aug: '14.69%', MoM_Growth_Rate: '+78.1%', Monthly_Target: '15%', Target_Achievement: '174%', Visual_Status: 'ممتاز 🟢' }
    ],
    suggestedFormulas: [
      { metric: 'إجمالي الإنفاق الإعلاني', formula: "=SUM('02_الحملات_الممولة_PPC'!E2:E20)", purpose: 'جمع إجمالي ميزانيات الحملات آلياً من ورقة الإعلانات', cellLocation: 'B2' },
      { metric: 'إجمالي العملاء المضافين لـ CRM', formula: "=SUM('02_الحملات_الممولة_PPC'!K2:K20) + '08_قواعد_البيانات_CRM'!G2", purpose: 'حساب الصفقات المؤكدة في CRM', cellLocation: 'B6' },
      { metric: 'عدد المهام المعتمدة والمنجزة', formula: "=COUNTIF('06_التعديلات_التقنية_والموثوقية'!G2:G50, \"تم الاعتماد والتنفيذ\")", purpose: 'حساب المهام التي أنجزت واعتمدت', cellLocation: 'B3' },
      { metric: 'متوسط دقة محركات الذكاء الاصطناعي', formula: "=AVERAGE('04_محركات_الذكاء_GEO_AEO'!G2:G10)", purpose: 'حساب متوسط دقة إجابات منصات AEO', cellLocation: 'B7' }
    ]
  },
  {
    id: 'tab-02',
    tabNumber: '02',
    nameAr: 'الحملات الإعلانية الممولة (PPC & Paid)',
    nameEn: '02_Paid_Ads_PPC',
    color: '#5e0c10',
    purpose: 'تتبع كافة حملات Google Ads وحملات لينكدإن InMail & Feed، مع حساب التكاليف، النقرات، التحويلات، ونقرات الواتساب والمكالمات.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف الحملة', headerEn: 'Campaign_ID', dataType: 'Text', description: 'رمز تعريفي فريد للحملة', example: 'G-ADS-01' },
      { colLetter: 'B', headerAr: 'اسم الإعلان / الخدمة', headerEn: 'Ad_Service_Name', dataType: 'Text', description: 'الخدمة الترويجية المستهدفة', example: 'حلول التوطين' },
      { colLetter: 'C', headerAr: 'المنصة الإعلانية', headerEn: 'Platform', dataType: 'Dropdown', dropdownOptions: ['Google Ads', 'LinkedIn Feed', 'LinkedIn InMail', 'WhatsApp Meta'], description: 'القناة الرقمية المستخدمة', example: 'Google Ads' },
      { colLetter: 'D', headerAr: 'نوع الحملة والتكتيك', headerEn: 'Campaign_Type', dataType: 'Text', description: 'نوع الإعلان وهدفه', example: 'Search & Leads' },
      { colLetter: 'E', headerAr: 'إجمالي الإنفاق (ر.س)', headerEn: 'Total_Spend_SAR', dataType: 'Currency (SAR)', description: 'الميزانية الفعلية المصروفة خلال الشهر', example: '695.00' },
      { colLetter: 'F', headerAr: 'مرات الظهور', headerEn: 'Impressions', dataType: 'Number', description: 'عدد مرات ظهور الإعلان للجمهور', example: '87667' },
      { colLetter: 'G', headerAr: 'عدد النقرات', headerEn: 'Clicks', dataType: 'Number', description: 'الزيارات المولدة عبر الإعلان', example: '5769' },
      { colLetter: 'H', headerAr: 'معدل النقرات (CTR %)', headerEn: 'CTR_Rate', dataType: 'Percentage (%)', formula: '=G2/F2', description: 'حساب معدل النقر التلقائي من النقرات والظهور', example: '6.58%' },
      { colLetter: 'I', headerAr: 'التحويلات المباشرة', headerEn: 'Conversions', dataType: 'Number', description: 'إجمالي التحويلات على الموقع أو النماذج', example: '58' },
      { colLetter: 'J', headerAr: 'تكلفة التحويل الواحد (CPA)', headerEn: 'Cost_Per_Conversion_SAR', dataType: 'Currency (SAR)', formula: '=IFERROR(E2/I2, 0)', description: 'حساب تكلفة التحويل الواحد', example: '12.00' },
      { colLetter: 'K', headerAr: 'نقرات الاتصال الهاتفي', headerEn: 'Call_Clicks', dataType: 'Number', description: 'عدد العملاء الذين نقروا للاتصال مباشرة', example: '3' },
      { colLetter: 'L', headerAr: 'نقرات الواتساب المباشرة', headerEn: 'WhatsApp_Clicks', dataType: 'Number', description: 'عدد العملاء الذين دخلوا محادثة واتساب', example: '58' },
      { colLetter: 'M', headerAr: 'عملاء تم إدراجهم في CRM', headerEn: 'CRM_Deals_Generated', dataType: 'Number', description: 'الصفقات المؤكدة التي سجلت في CRM', example: '1' },
      { colLetter: 'N', headerAr: 'حالة الاعتماد والمراجعة', headerEn: 'Approval_Status', dataType: 'Dropdown', dropdownOptions: ['تم الاعتماد', 'قيد المراجعة', 'نشط', 'مكتمل', 'متوقف مؤقتاً'], description: 'موقف الحملة الإداري', example: 'تم الاعتماد' }
    ],
    sampleData: [
      { Campaign_ID: 'G-ADS-01', Ad_Service_Name: 'حلول التوطين', Platform: 'Google Ads', Total_Spend_SAR: 695, Impressions: 87667, Clicks: 5769, CTR_Rate: '6.58%', Conversions: 58, Cost_Per_Conversion_SAR: 12, Call_Clicks: 3, WhatsApp_Clicks: 58, CRM_Deals_Generated: 1, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'G-ADS-02', Ad_Service_Name: 'التوطين عبر المعاهد', Platform: 'Google Ads', Total_Spend_SAR: 1381, Impressions: 4203, Clicks: 494, CTR_Rate: '11.75%', Conversions: 53, Cost_Per_Conversion_SAR: 26, Call_Clicks: 15, WhatsApp_Clicks: 25, CRM_Deals_Generated: 1, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'G-ADS-03', Ad_Service_Name: 'الإفصاح التدريبي', Platform: 'Google Ads', Total_Spend_SAR: 934, Impressions: 2219, Clicks: 303, CTR_Rate: '13.65%', Conversions: 41, Cost_Per_Conversion_SAR: 23, Call_Clicks: 7, WhatsApp_Clicks: 22, CRM_Deals_Generated: 1, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'G-ADS-04', Ad_Service_Name: 'تعهيد الأعمال', Platform: 'Google Ads', Total_Spend_SAR: 1521, Impressions: 6153, Clicks: 637, CTR_Rate: '10.35%', Conversions: 108, Cost_Per_Conversion_SAR: 14, Call_Clicks: 33, WhatsApp_Clicks: 55, CRM_Deals_Generated: 1, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'G-ADS-05', Ad_Service_Name: 'مراكز الأعمال', Platform: 'Google Ads', Total_Spend_SAR: 1297, Impressions: 4318, Clicks: 345, CTR_Rate: '7.99%', Conversions: 38, Cost_Per_Conversion_SAR: 34, Call_Clicks: 21, WhatsApp_Clicks: 6, CRM_Deals_Generated: 0, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'LI-INM-01', Ad_Service_Name: 'مراكز الأعمال (InMail)', Platform: 'LinkedIn InMail', Total_Spend_SAR: 1539, Impressions: 1761, Clicks: 11, CTR_Rate: '0.81%', Conversions: 3, Cost_Per_Conversion_SAR: 513, Call_Clicks: 0, WhatsApp_Clicks: 0, CRM_Deals_Generated: 0, Approval_Status: 'تم الاعتماد' },
      { Campaign_ID: 'LI-INM-02', Ad_Service_Name: 'الإفصاح التدريبي (InMail)', Platform: 'LinkedIn InMail', Total_Spend_SAR: 1444, Impressions: 2409, Clicks: 31, CTR_Rate: '1.92%', Conversions: 4, Cost_Per_Conversion_SAR: 361, Call_Clicks: 0, WhatsApp_Clicks: 0, CRM_Deals_Generated: 1, Approval_Status: 'تم الاعتماد' }
    ],
    suggestedFormulas: [
      { metric: 'إجمالي التحويلات لجميع الحملات', formula: '=SUM(I2:I20)', purpose: 'حساب مجموع التحويلات', cellLocation: 'I21' },
      { metric: 'متوسط تكلفة التحويل المرجح', formula: '=SUM(E2:E20)/SUM(I2:I20)', purpose: 'تكلفة التحويل الحقيقية على مستوى كل القنوات', cellLocation: 'J21' },
      { metric: 'إجمالي نقرات الواتساب', formula: '=SUM(L2:L20)', purpose: 'مجموع استفسارات الواتساب الإعلانية', cellLocation: 'L21' }
    ]
  },
  {
    id: 'tab-03',
    tabNumber: '03',
    nameAr: 'تتبع صفحات الموقع والتحسينات (SEO & Content)',
    nameEn: '03_SEO_and_Content',
    color: '#24419f',
    purpose: 'تتبع فحص الظهور (قبل / بعد)، الكلمات المفتاحية، العناوين، وصف الميتا، التحسينات التحريرية، والروابط الداخلية.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف الصفحة', headerEn: 'Page_ID', dataType: 'Text', description: 'معرف الصفحة الفنية', example: 'PAGE-01' },
      { colLetter: 'B', headerAr: 'عنوان الصفحة / الخدمة', headerEn: 'Page_Title', dataType: 'Text', description: 'الاسم الواضح للصفحة', example: 'مراكز الأعمال' },
      { colLetter: 'C', headerAr: 'مسار الرابط (URL Path)', headerEn: 'URL_Path', dataType: 'URL', description: 'رابط الصفحة على موقع صلة', example: '/services/business-centers' },
      { colLetter: 'D', headerAr: 'الكلمات المفتاحية المستهدفة', headerEn: 'Target_Keywords', dataType: 'Text', description: 'الكلمات المفتاحية المعتمدة في الخطة', example: 'مراكز أعمال الرياض، مكاتب مشتركة' },
      { colLetter: 'E', headerAr: 'الترتيب السابق (قبل)', headerEn: 'Rank_Before', dataType: 'Number', description: 'ترتيب Google قبل التعديلات', example: '6' },
      { colLetter: 'F', headerAr: 'الترتيب الحالي (بعد)', headerEn: 'Rank_After', dataType: 'Number', description: 'ترتيب Google بعد تطبيق التحسينات', example: '3' },
      { colLetter: 'G', headerAr: 'مؤشر التحسن (القفزة)', headerEn: 'Rank_Improvement', dataType: 'Number', formula: '=E2-F2', description: 'عدد المراتب التي تقدمتها الصفحة (موجب = تقدم)', example: '+3 مراتب' },
      { colLetter: 'H', headerAr: 'مشاهدات الصفحة الشهرية', headerEn: 'Monthly_Pageviews', dataType: 'Number', description: 'بيانات الزيارات الفعلية من GA4', example: '1240' },
      { colLetter: 'I', headerAr: 'حالة محتوى الأسئلة الشائعة FAQ', headerEn: 'FAQ_Section_Status', dataType: 'Dropdown', dropdownOptions: ['منشور 🟢', 'قيد المراجعة 🟡', 'جاري الصياغة 🔵', 'مطلوب إعداده 🔴'], description: 'مدى توفر قسم الأسئلة الشائعة في الصفحة', example: 'منشور 🟢' },
      { colLetter: 'J', headerAr: 'تطبيق الترميز Schema.org', headerEn: 'Schema_Markup_Applied', dataType: 'Dropdown', dropdownOptions: ['نعم ✅', 'لا ❌', 'قيد الاختبار ⏳'], description: 'وجود ترميز البيانات المنظمة لمحركات البحث', example: 'نعم ✅' },
      { colLetter: 'K', headerAr: 'تحديث العناوين والـ Meta Description', headerEn: 'Meta_Tags_Status', dataType: 'Dropdown', dropdownOptions: ['مكتمل ومحسن', 'قيد التحديث', 'مطلوب مراجعة'], description: 'حالة تحسين الوسوم', example: 'مكتمل ومحسن' },
      { colLetter: 'L', headerAr: 'حالة الاعتماد النهائية', headerEn: 'Final_Approval', dataType: 'Dropdown', dropdownOptions: ['تم الاعتماد', 'قيد المراجعة', 'بانتظار التقنية', 'مسودة'], description: 'موقف الصفحة من الاعتماد', example: 'تم الاعتماد' },
      { colLetter: 'M', headerAr: 'ملاحظات وتوصيات الفريق', headerEn: 'Recommendations', dataType: 'Text', description: 'الإجراءات اللاحقة لتعزيز الترتيب', example: 'إضافة روابط إثرائية داخلية من صفحة التوطين' }
    ],
    sampleData: [
      { Page_ID: 'PAGE-01', Page_Title: 'مراكز الأعمال', URL_Path: '/services/business-centers', Target_Keywords: 'مراكز أعمال الرياض، مكاتب مشتركة صلة', Rank_Before: 6, Rank_After: 3, Rank_Improvement: 3, Monthly_Pageviews: 1240, FAQ_Section_Status: 'منشور 🟢', Schema_Markup_Applied: 'نعم ✅', Meta_Tags_Status: 'مكتمل ومحسن', Final_Approval: 'تم الاعتماد' },
      { Page_ID: 'PAGE-02', Page_Title: 'مراكز المهن الفنية الهندسية', URL_Path: '/services/engineering-hubs', Target_Keywords: 'مركز المهن الفنية الهندسية عسير', Rank_Before: 8, Rank_After: 5, Rank_Improvement: 3, Monthly_Pageviews: 890, FAQ_Section_Status: 'قيد المراجعة 🟡', Schema_Markup_Applied: 'نعم ✅', Meta_Tags_Status: 'قيد التحديث', Final_Approval: 'قيد المراجعة' },
      { Page_ID: 'PAGE-03', Page_Title: 'المتسوق الخفي', URL_Path: '/services/mystery-shopping', Target_Keywords: 'خدمات المتسوق الخفي، تقييم الفروع', Rank_Before: 7, Rank_After: 4, Rank_Improvement: 3, Monthly_Pageviews: 1120, FAQ_Section_Status: 'جاري الصياغة 🔵', Schema_Markup_Applied: 'لا ❌', Meta_Tags_Status: 'قيد التحديث', Final_Approval: 'قيد المراجعة' },
      { Page_ID: 'PAGE-04', Page_Title: 'التوظيف المبتدئ بالتدريب', URL_Path: '/services/training-employment', Target_Keywords: 'التوظيف المبتدئ بالتدريب، معاهد صلة', Rank_Before: 5, Rank_After: 2, Rank_Improvement: 3, Monthly_Pageviews: 2150, FAQ_Section_Status: 'منشور 🟢', Schema_Markup_Applied: 'نعم ✅', Meta_Tags_Status: 'مكتمل ومحسن', Final_Approval: 'تم الاعتماد' },
      { Page_ID: 'PAGE-05', Page_Title: 'الإفصاح التدريبي', URL_Path: '/services/training-disclosure', Target_Keywords: 'متطلبات الإفصاح التدريبي 2026', Rank_Before: 4, Rank_After: 1, Rank_Improvement: 3, Monthly_Pageviews: 3410, FAQ_Section_Status: 'منشور 🟢', Schema_Markup_Applied: 'نعم ✅', Meta_Tags_Status: 'مكتمل ومحسن', Final_Approval: 'تم الاعتماد' }
    ],
    suggestedFormulas: [
      { metric: 'نسبة الصفحات المكتملة بنجاح', formula: '=COUNTIF(L2:L20, "تم الاعتماد")/COUNTA(A2:A20)', purpose: 'حساب نسبة الصفحات المعتمدة نهائياً', cellLocation: 'L21' },
      { metric: 'متوسط مراتب التحسن (القفزة)', formula: '=AVERAGE(G2:G20)', purpose: 'متوسط تحسن ترتيب صلة في نتائج البحث', cellLocation: 'G21' },
      { metric: 'إجمالي زيارات صفحات الخدمات', formula: '=SUM(H2:H20)', purpose: 'مجموع الزيارات العضوية لصفحات الخدمات', cellLocation: 'H21' }
    ]
  },
  {
    id: 'tab-04',
    tabNumber: '04',
    nameAr: 'محركات الذكاء الاصطناعي (GEO / AEO & ChatGPT)',
    nameEn: '04_GEO_AEO_ChatGPT',
    color: '#231f20',
    purpose: 'فحص دوري لظهور واستشهادات صلة في نماذج الذكاء الاصطناعي (ChatGPT, Google Gemini/AI, Copilot) وقياس دقة المعلومات.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف الفحص', headerEn: 'Audit_ID', dataType: 'Text', description: 'كود الفحص الشهري', example: 'AEO-01' },
      { colLetter: 'B', headerAr: 'منصة الذكاء الاصطناعي', headerEn: 'AI_Platform', dataType: 'Dropdown', dropdownOptions: ['ChatGPT', 'Google AI', 'Microsoft Copilot', 'Claude'], description: 'النموذج الذكي الخاضع للفحص', example: 'ChatGPT' },
      { colLetter: 'C', headerAr: 'السؤال أو الاستعلام المختبر', headerEn: 'Tested_Prompt_Query', dataType: 'Text', description: 'السؤال التجريبي الشائع للعملاء المحتملين', example: 'ما هي أفضل شركات تتيح مراكز أعمال وحلول عمل عن بعد بالسعودية؟' },
      { colLetter: 'D', headerAr: 'الخدمة المستهدفة', headerEn: 'Target_Service', dataType: 'Dropdown', dropdownOptions: ['مراكز الأعمال', 'العمل عن بعد', 'الإفصاح التدريبي', 'التوظيف المبتدئ بالتدريب', 'المتسوق الخفي', 'مراكز المهن الفنية'], description: 'خدمة صلة المعنية بالاستعلام', example: 'مراكز الأعمال' },
      { colLetter: 'E', headerAr: 'هل تم ذكر اسم صلة؟', headerEn: 'Brand_Mentioned', dataType: 'Dropdown', dropdownOptions: ['نعم ✅', 'لا ❌', 'ذكر غير مباشر ⚠️'], description: 'تأكيد ذكر اسم صلة في نص الإجابة', example: 'نعم ✅' },
      { colLetter: 'F', headerAr: 'هل تم استشهاد برابط الموقع؟', headerEn: 'Site_Cited', dataType: 'Dropdown', dropdownOptions: ['نعم مستشهد ✅', 'لا استشهاد ❌'], description: 'وجود رابط إحالة ينقل لموقع صلة', example: 'نعم مستشهد ✅' },
      { colLetter: 'G', headerAr: 'درجة دقة المعلومات (%)', headerEn: 'Accuracy_Score', dataType: 'Percentage (%)', description: 'مدى صحة وحداثة المعلومات الواردة عن صلة', example: '70%' },
      { colLetter: 'H', headerAr: 'مقتطف من إجابة الذكاء الاصطناعي', headerEn: 'Response_Snippet', dataType: 'Text', description: 'النص المقتبس لتوثيق الرد للإدارة', example: 'تعد شركة صلة من أبرز مزودي حلول تمكين العمل عن بعد...' },
      { colLetter: 'I', headerAr: 'الإجراء التصحيحي المطلوب', headerEn: 'Action_Needed', dataType: 'Text', description: 'خطوة التسويق لرفع الدقة أو الاستشهاد', example: 'إضافة FAQ مخصص وتحديث مقال ويكيبيديا/المنصات السعودية' },
      { colLetter: 'J', headerAr: 'حالة الاعتماد والمتابعة', headerEn: 'Audit_Status', dataType: 'Dropdown', dropdownOptions: ['تم الرصد والاعتماد', 'قيد المعالجة', 'مطلوب تدخل تقني'], description: 'حالة معالجة الاستعلام', example: 'تم الرصد والاعتماد' }
    ],
    sampleData: [
      { Audit_ID: 'AEO-01', AI_Platform: 'ChatGPT', Tested_Prompt_Query: 'أفضل مراكز أعمال وحلول عمل عن بعد في الرياض', Target_Service: 'مراكز الأعمال', Brand_Mentioned: 'نعم ✅', Site_Cited: 'نعم مستشهد ✅', Accuracy_Score: '80%', Audit_Status: 'تم الرصد والاعتماد' },
      { Audit_ID: 'AEO-02', AI_Platform: 'ChatGPT', Tested_Prompt_Query: 'كيف يمكن لشركات القطاع الخاص تحقيق متطلبات الإفصاح التدريبي؟', Target_Service: 'الإفصاح التدريبي', Brand_Mentioned: 'نعم ✅', Site_Cited: 'نعم مستشهد ✅', Accuracy_Score: '70%', Audit_Status: 'تم الرصد والاعتماد' },
      { Audit_ID: 'AEO-03', AI_Platform: 'Google AI', Tested_Prompt_Query: 'شروط ترخيص مركز أعمال في السعودية وخدمات صلة', Target_Service: 'مراكز الأعمال', Brand_Mentioned: 'نعم ✅', Site_Cited: 'نعم مستشهد ✅', Accuracy_Score: '85%', Audit_Status: 'تم الرصد والاعتماد' },
      { Audit_ID: 'AEO-04', AI_Platform: 'Google AI', Tested_Prompt_Query: 'توطين المعاهد والتدريب المنتهي بالتوظيف', Target_Service: 'التوظيف المبتدئ بالتدريب', Brand_Mentioned: 'نعم ✅', Site_Cited: 'نعم مستشهد ✅', Accuracy_Score: '75%', Audit_Status: 'تم الرصد والاعتماد' },
      { Audit_ID: 'AEO-05', AI_Platform: 'Copilot', Tested_Prompt_Query: 'منصات توظيف السعوديين والعمل عن بعد المعتمدة', Target_Service: 'العمل عن بعد', Brand_Mentioned: 'نعم ✅', Site_Cited: 'نعم مستشهد ✅', Accuracy_Score: '60%', Audit_Status: 'تم الرصد والاعتماد' }
    ],
    suggestedFormulas: [
      { metric: 'نسبة الاستشهاد الإجمالية (%)', formula: '=COUNTIF(F2:F30, "نعم مستشهد ✅")/COUNTA(A2:A30)', purpose: 'حساب نسبة الأسئلة التي أحالت لموقع صلة', cellLocation: 'F31' },
      { metric: 'معدل دقة إجابات المنصات', formula: '=AVERAGE(G2:G30)', purpose: 'متوسط دقة المعلومات المقدمة عن صلة', cellLocation: 'G31' },
      { metric: 'عدد الاستشهادات المؤكدة', formula: '=COUNTIF(F2:F30, "نعم مستشهد ✅")', purpose: 'عدد مرات استشهاد نماذج الذكاء الاصطناعي برابط صلة', cellLocation: 'E31' }
    ]
  },
  {
    id: 'tab-05',
    tabNumber: '05',
    nameAr: 'بنك الأسئلة الشائعة للخدمات (FAQ Bank)',
    nameEn: '05_FAQ_Knowledge_Bank',
    color: '#208c6b',
    purpose: 'إدارة بنك الـ 30 سؤالاً الشائعة لخدمات صلة، ومتابعة صيغتها، اعتمادها، وترميزها بـ Schema FAQ لرفع الظهور في Google و ChatGPT.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف السؤال', headerEn: 'FAQ_ID', dataType: 'Text', description: 'رمز فريد للسؤال', example: 'FAQ-01' },
      { colLetter: 'B', headerAr: 'الخدمة التابعة', headerEn: 'Service_Category', dataType: 'Dropdown', dropdownOptions: ['مراكز الأعمال', 'الإفصاح التدريبي', 'التوظيف المبتدئ بالتدريب', 'المتسوق الخفي', 'مراكز المهن الفنية', 'العمل عن بعد'], description: 'قسم الخدمة المستهدفة', example: 'الإفصاح التدريبي' },
      { colLetter: 'C', headerAr: 'نص السؤال الشائع', headerEn: 'Question_Text', dataType: 'Text', description: 'الصيغة المباشرة التي يسألها العميل', example: 'ما هي معايير الالتزام بالإفصاح التدريبي لعام 2026؟' },
      { colLetter: 'D', headerAr: 'الإجابة المعتمدة والمحسنة لـ AEO', headerEn: 'Approved_Answer', dataType: 'Text', description: 'إجابة مختصرة وواضحة قابلة للاقتباس', example: 'يلزم المنشآت التي تشغل 50 عاملاً فأكثر بالإفصاح عن بيانات التدريب سنوياً عبر منصة قوى وتوفر صلة باقات متكاملة...' },
      { colLetter: 'E', headerAr: 'الكلمة المفتاحية المضمنة', headerEn: 'Target_Keyword', dataType: 'Text', description: 'الكلمة الرئيسية في السؤال', example: 'الإفصاح التدريبي 2026' },
      { colLetter: 'F', headerAr: 'تاريخ الإعداد', headerEn: 'Creation_Date', dataType: 'Date', description: 'تاريخ كتابة السؤال', example: '2026-09-02' },
      { colLetter: 'G', headerAr: 'حالة النشر على الموقع', headerEn: 'Publish_Status', dataType: 'Dropdown', dropdownOptions: ['منشور لايف 🟢', 'بانتظار النشر التقني 🟡', 'قيد الصياغة 🔵'], description: 'حالة ظهور السؤال على الصفحة', example: 'منشور لايف 🟢' },
      { colLetter: 'H', headerAr: 'كود الـ Schema جاهز؟', headerEn: 'Schema_Ready', dataType: 'Dropdown', dropdownOptions: ['نعم جاهز ومضمن', 'قيد التوليد', 'مطلوب'], description: 'تجهيز JSON-LD للسؤال', example: 'نعم جاهز ومضمن' },
      { colLetter: 'I', headerAr: 'حالة الاعتماد الإداري', headerEn: 'Management_Approval', dataType: 'Dropdown', dropdownOptions: ['تم الاعتماد', 'قيد المراجعة', 'مرفوض'], description: 'موافقة رئيس القسم', example: 'تم الاعتماد' }
    ],
    sampleData: [
      { FAQ_ID: 'FAQ-01', Service_Category: 'الإفصاح التدريبي', Question_Text: 'كيف يساهم برنامج صلة في استيفاء متطلبات الإفصاح التدريبي؟', Approved_Answer: 'توفر صلة خطة تدريبية معتمدة ومتوافقة تماماً مع معايير وزارة الموارد البشرية مع رفع التقارير آلياً.', Target_Keyword: 'الإفصاح التدريبي صلة', Publish_Status: 'منشور لايف 🟢', Schema_Ready: 'نعم جاهز ومضمن', Management_Approval: 'تم الاعتماد' },
      { FAQ_ID: 'FAQ-02', Service_Category: 'التوظيف المبتدئ بالتدريب', Question_Text: 'ما هي مزايا التوظيف المبتدئ بالتدريب للشركات؟', Approved_Answer: 'يتيح للشركات تأهيل الكوادر الوطنية على رأس العمل وتقليل تكاليف الاستقطاب ورفع نسب التوطين.', Target_Keyword: 'التوظيف المبتدئ بالتدريب', Publish_Status: 'منشور لايف 🟢', Schema_Ready: 'نعم جاهز ومضمن', Management_Approval: 'تم الاعتماد' },
      { FAQ_ID: 'FAQ-03', Service_Category: 'مراكز الأعمال', Question_Text: 'هل مراكز أعمال صلة مرخصة لممارسة الأنشطة التجارية؟', Approved_Answer: 'نعم جميع مراكز أعمال صلة مرخصة رسمياً ومجهزة ببيئة عمل متقدمة في مواقع حيوية.', Target_Keyword: 'ترخيص مراكز أعمال صلة', Publish_Status: 'بانتظار النشر التقني 🟡', Schema_Ready: 'قيد التوليد', Management_Approval: 'تم الاعتماد' }
    ],
    suggestedFormulas: [
      { metric: 'نسبة إنجاز بنك الأسئلة الشائعة', formula: '=COUNTIF(G2:G31, "منشور لايف 🟢") / 30', purpose: 'متابعة الوصول لهدف الـ 30 سؤال (حالياً 15/30 = 50%)', cellLocation: 'G32' },
      { metric: 'الأسئلة المعتمدة إدارياً', formula: '=COUNTIF(I2:I31, "تم الاعتماد")', purpose: 'عدد الأسئلة المعتمدة من مدراء الأقسام', cellLocation: 'I32' }
    ]
  },
  {
    id: 'tab-06',
    tabNumber: '06',
    nameAr: 'التعديلات التقنية والموثوقية (Tech & Trust Tasks)',
    nameEn: '06_Tech_and_Trust_Platform',
    color: '#828282',
    purpose: 'تتبع الطلبات والتذاكر المرفوعة للقسم التقني (تحديث روابط، بنية موقع، ربط CRM)، ومتابعة منصات الموثوقية (Lusha, Apollo, Mawsool).',
    columns: [
      { colLetter: 'A', headerAr: 'رقم التذكرة', headerEn: 'Ticket_No', dataType: 'Text', description: 'رقم فريد لتذكرة التطوير', example: 'TECH-101' },
      { colLetter: 'B', headerAr: 'عنوان المهمة والتعديل التقني', headerEn: 'Task_Title', dataType: 'Text', description: 'وصف دقيق للمطلب التقني', example: 'إضافة قسم FAQ وتضمين Schema.org' },
      { colLetter: 'C', headerAr: 'تصنيف المهمة', headerEn: 'Category', dataType: 'Dropdown', dropdownOptions: ['SEO تقني', 'بيانات منظمة Schema', 'تكامل أنظمة CRM', 'تطوير صفحات وFAQ', 'موثوقية وهوية رقمية'], description: 'نوع التعديل', example: 'بيانات منظمة Schema' },
      { colLetter: 'D', headerAr: 'الجهة المسؤولة عن التنفيذ', headerEn: 'Assigned_Team', dataType: 'Dropdown', dropdownOptions: ['فريق التقنية', 'فريق التسويق', 'فريق المبيعات', 'مزود خارجي'], description: 'الفريق المسؤول', example: 'فريق التقنية' },
      { colLetter: 'E', headerAr: 'مستوى الأولوية', headerEn: 'Priority', dataType: 'Dropdown', dropdownOptions: ['عالية جداً 🔥', 'عالية', 'متوسطة', 'منخفضة'], description: 'أهمية المهمة بالنسبة للنتائج', example: 'عالية جداً 🔥' },
      { colLetter: 'F', headerAr: 'تاريخ الرفع للتقنية', headerEn: 'Submission_Date', dataType: 'Date', description: 'تاريخ إرسال الطلب للقسم التقني', example: '2026-09-04' },
      { colLetter: 'G', headerAr: 'حالة الاعتماد والتنفيذ', headerEn: 'Execution_Status', dataType: 'Dropdown', dropdownOptions: ['تم الاعتماد والتنفيذ ✅', 'مرفوع للتقنية 🚀', 'قيد المراجعة ⏳', 'جاري العمل 🛠️', 'بانتظار الملاحظات ⚠️'], description: 'موقف إنجاز المهمة', example: 'تم الاعتماد والتنفيذ ✅' },
      { colLetter: 'H', headerAr: 'الأثر التسويقي المتوقع', headerEn: 'Marketing_Impact', dataType: 'Text', description: 'الفائدة المرجوة على أداء الحملات أو الـ SEO', example: 'زيادة الاستشهاد في ChatGPT بنسبة 35%' },
      { colLetter: 'I', headerAr: 'منصة الموثوقية المرتبطة', headerEn: 'Trust_Platform', dataType: 'Dropdown', dropdownOptions: ['LUSHA', 'APOLLO', 'MAWSOOL', 'Google Business', 'المنصات السعودية الموثوقة', 'غير مرتبط'], description: 'الأداة أو المنصة الخارجية', example: 'LUSHA' }
    ],
    sampleData: [
      { Ticket_No: 'TECH-101', Task_Title: 'إضافة قسم الأسئلة الشائعة لصفحة الإفصاح التدريبي مع Schema', Category: 'بيانات منظمة Schema', Assigned_Team: 'فريق التقنية', Priority: 'عالية جداً 🔥', Submission_Date: '2026-09-04', Execution_Status: 'تم الاعتماد والتنفيذ ✅', Marketing_Impact: 'زيادة الاستشهادات في ChatGPT', Trust_Platform: 'غير مرتبط' },
      { Ticket_No: 'TECH-102', Task_Title: 'تحديث محتوى وبنية صفحة باقات العمل عن بعد', Category: 'SEO تقني', Assigned_Team: 'فريق التقنية', Priority: 'عالية', Submission_Date: '2026-09-15', Execution_Status: 'تم الاعتماد والتنفيذ ✅', Marketing_Impact: 'خفض معدل الارتداد', Trust_Platform: 'غير مرتبط' },
      { Ticket_No: 'TECH-103', Task_Title: 'ربط نظام LUSHA لتوليد بيانات العملاء مع فريق المبيعات', Category: 'تكامل أنظمة CRM', Assigned_Team: 'فريق التقنية', Priority: 'عالية جداً 🔥', Submission_Date: '2026-09-22', Execution_Status: 'تم الاعتماد والتنفيذ ✅', Marketing_Impact: 'تغذية المبيعات بـ 648 شركة مستهدفة', Trust_Platform: 'LUSHA' },
      { Ticket_No: 'TECH-104', Task_Title: 'ربط مزودي خدمات إعلانات الواتساب المعتمدين', Category: 'تكامل أنظمة CRM', Assigned_Team: 'فريق التقنية', Priority: 'عالية', Submission_Date: '2026-09-25', Execution_Status: 'مرفوع للتقنية 🚀', Marketing_Impact: 'إطلاق حملة واتساب نوفمبر', Trust_Platform: 'MAWSOOL' }
    ],
    suggestedFormulas: [
      { metric: 'نسبة إنجاز المهام التقنية', formula: '=COUNTIF(G2:G30, "تم الاعتماد والتنفيذ ✅")/COUNTA(A2:A30)', purpose: 'حساب نسبة المهام المنفذة للقسم التقني', cellLocation: 'G31' },
      { metric: 'المهام قيد التنفيذ التقني', formula: '=COUNTIF(G2:G30, "مرفوع للتقنية 🚀") + COUNTIF(G2:G30, "جاري العمل 🛠️")', purpose: 'مراقبة التذاكر العالقة لدى التقنية', cellLocation: 'G32' }
    ]
  },
  {
    id: 'tab-07',
    tabNumber: '07',
    nameAr: 'الموقع الإلكتروني والبريد (Web & Mailchimp)',
    nameEn: '07_Web_Analytics_and_Email',
    color: '#208c6b',
    purpose: 'تتبع مقاييس Google Analytics (الزيارات، أكثر الصفحات، الشرائح العمرية والنوع) + مقاييس Mailchimp (النشرات، معدلات الفتح والنقر والارتداد).',
    columns: [
      { colLetter: 'A', headerAr: 'القناة / التقرير', headerEn: 'Channel_Report', dataType: 'Dropdown', dropdownOptions: ['Google Analytics (GA4)', 'Mailchimp Newsletter'], description: 'نوع المصدر التحليلي', example: 'Google Analytics (GA4)' },
      { colLetter: 'B', headerAr: 'اسم الصفحة أو عنوان النشرة', headerEn: 'Item_Name', dataType: 'Text', description: 'الصفحة الإلكترونية أو عنوان البريد', example: 'تقدم الآن' },
      { colLetter: 'C', headerAr: 'العدد الإجمالي (مشاهدات / إرسالات)', headerEn: 'Total_Count', dataType: 'Number', description: 'المشاهدات للصفحة أو عدد الإرساليات', example: '9823' },
      { colLetter: 'D', headerAr: 'معدل الفتح (Open Rate %)', headerEn: 'Open_Rate', dataType: 'Percentage (%)', description: 'خاص بحملات Mailchimp', example: '25.63%' },
      { colLetter: 'E', headerAr: 'معدل النقر (CTR %)', headerEn: 'Click_Rate', dataType: 'Percentage (%)', description: 'معدل النقر التفاعلي', example: '26.16%' },
      { colLetter: 'F', headerAr: 'معدل الارتداد (Bounce Rate %)', headerEn: 'Bounce_Rate', dataType: 'Percentage (%)', description: 'نسبة ارتداد الرسائل أو الزوار', example: '1.9%' },
      { colLetter: 'G', headerAr: 'معدل إلغاء الاشتراك (Unsub %)', headerEn: 'Unsubscribe_Rate', dataType: 'Percentage (%)', description: 'نسبة إلغاء الاشتراك من القائمة', example: '0.15%' },
      { colLetter: 'H', headerAr: 'نسبة المساهمة من الإجمالي', headerEn: 'Contribution_Share', dataType: 'Percentage (%)', formula: '=IF(A2="Google Analytics (GA4)", C2/27820, C2/15999)', description: 'الحصة النسبية من إجمالي الحركة', example: '35.3%' },
      { colLetter: 'I', headerAr: 'ملاحظات الأداء للإدارة', headerEn: 'Executive_Notes', dataType: 'Text', description: 'تفسير النتيجة لصانع القرار', example: 'أكثر صفحة مقصودة بمعدل تحويل مباشر' }
    ],
    sampleData: [
      { Channel_Report: 'Mailchimp Newsletter', Item_Name: '4 مؤشرات استراتيجية لتقليل الاستقالات ورفع الإنتاجية', Total_Count: 15999, Open_Rate: '25.63%', Click_Rate: '26.16%', Bounce_Rate: '1.9%', Unsubscribe_Rate: '0.15%', Contribution_Share: '100%', Executive_Notes: 'تضاعف معدل النقر مقارنة بأغسطس' },
      { Channel_Report: 'Google Analytics (GA4)', Item_Name: 'تقدم الآن (Apply Now)', Total_Count: 9823, Open_Rate: '-', Click_Rate: '-', Bounce_Rate: '-', Unsubscribe_Rate: '-', Contribution_Share: '35.3%', Executive_Notes: 'أعلى صفحة جلباً لطلبات التوظيف والخدمات' },
      { Channel_Report: 'Google Analytics (GA4)', Item_Name: 'الصفحة الرئيسية (Home Page)', Total_Count: 7796, Open_Rate: '-', Click_Rate: '-', Bounce_Rate: '-', Unsubscribe_Rate: '-', Contribution_Share: '28.0%', Executive_Notes: 'بوابة العلامة التجارية الأولى' },
      { Channel_Report: 'Google Analytics (GA4)', Item_Name: 'احصل على تسعيرة (Get Quote)', Total_Count: 3764, Open_Rate: '-', Click_Rate: '-', Bounce_Rate: '-', Unsubscribe_Rate: '-', Contribution_Share: '13.5%', Executive_Notes: 'الصفحة الأكثر أهمية لتحويل الشركات' }
    ],
    suggestedFormulas: [
      { metric: 'إجمالي مشاهدات صفحات الموقع', formula: '=SUMIF(A2:A20, "Google Analytics (GA4)", C2:C20)', purpose: 'حساب مجموع زيارات GA4 تلقائياً', cellLocation: 'C21' },
      { metric: 'متوسط معدل فتح النشرات البريدية', formula: '=AVERAGEIF(A2:A20, "Mailchimp Newsletter", D2:D20)', purpose: 'متوسط الفتح لحملات البريد', cellLocation: 'D21' }
    ]
  },
  {
    id: 'tab-08',
    tabNumber: '08',
    nameAr: 'توليد قواعد البيانات والعملاء (B2B Leads & CRM)',
    nameEn: '08_B2B_Leads_CRM',
    color: '#24419f',
    purpose: 'تتبع بيانات العملاء المحتملين المولدة عبر Lusha, Apollo, خرائط جوجل، وحملات لينكدإن InMail، مع ربطها بصفقات CRM.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف الدفعة', headerEn: 'Batch_ID', dataType: 'Text', description: 'كود حزمة البيانات', example: 'LEAD-SEP-01' },
      { colLetter: 'B', headerAr: 'مصدر البيانات / الأداة', headerEn: 'Data_Source_Tool', dataType: 'Dropdown', dropdownOptions: ['LUSHA', 'APOLLO', 'MAWSOOL', 'Google Maps Scraping', 'LinkedIn InMail'], description: 'الأداة المستخدمة في التنقيب', example: 'LUSHA' },
      { colLetter: 'C', headerAr: 'القطاع المستهدف', headerEn: 'Target_Sector', dataType: 'Dropdown', dropdownOptions: ['الصناعي', 'العقاري', 'الصحي', 'الإعاشة والضيافة', 'المقاولات', 'التقنية والخدمات'], description: 'قطاع المنشآت المستهدفة', example: 'الصناعي' },
      { colLetter: 'D', headerAr: 'المنطقة الجغرافية', headerEn: 'Region', dataType: 'Dropdown', dropdownOptions: ['الرياض', 'الخرج', 'المنطقة الشرقية', 'جدة ومكة', 'عسير والجنوب'], description: 'النطاق الجغرافي', example: 'الرياض' },
      { colLetter: 'E', headerAr: 'عدد المنشآت في القاعدة', headerEn: 'Total_Records_Count', dataType: 'Number', description: 'إجمالي جهات الاتصال المسجلة', example: '648' },
      { colLetter: 'F', headerAr: 'العملاء المحتملين المؤهلين (SQL)', headerEn: 'Qualified_Leads', dataType: 'Number', description: 'العملاء الذين تم التحقق من أهليتهم', example: '5' },
      { colLetter: 'G', headerAr: 'الصفقات المعتمدة في CRM', headerEn: 'Won_Deals_CRM', dataType: 'Number', description: 'عدد الصفقات التي أغلقت أو أدرجت في CRM', example: '3' },
      { colLetter: 'H', headerAr: 'معدل تحويل القاعدة (%)', headerEn: 'Conversion_Rate', dataType: 'Percentage (%)', formula: '=IFERROR(G2/E2, 0)', description: 'نسبة الصفقات مقارنة بإجمالي القاعدة', example: '0.46%' },
      { colLetter: 'I', headerAr: 'حالة التسليم لفريق المبيعات', headerEn: 'Sales_Handover_Status', dataType: 'Dropdown', dropdownOptions: ['تم التسليم والتوزيع', 'قيد الفرز والتدقيق', 'بانتظار موافقة المبيعات'], description: 'موقف التكامل المشترك', example: 'تم التسليم والتوزيع' }
    ],
    sampleData: [
      { Batch_ID: 'LEAD-AUG-01', Data_Source_Tool: 'Google Maps Scraping', Target_Sector: 'الصناعي', Region: 'الرياض والخرج', Total_Records_Count: 648, Qualified_Leads: 5, Won_Deals_CRM: 3, Conversion_Rate: '0.46%', Sales_Handover_Status: 'تم التسليم والتوزيع' },
      { Batch_ID: 'LEAD-SEP-02', Data_Source_Tool: 'LinkedIn InMail', Target_Sector: 'التقنية والخدمات', Region: 'الرياض', Total_Records_Count: 1612, Qualified_Leads: 31, Won_Deals_CRM: 4, Conversion_Rate: '0.25%', Sales_Handover_Status: 'تم التسليم والتوزيع' },
      { Batch_ID: 'LEAD-SEP-03', Data_Source_Tool: 'LUSHA', Target_Sector: 'المقاولات', Region: 'المنطقة الشرقية', Total_Records_Count: 1352, Qualified_Leads: 11, Won_Deals_CRM: 1, Conversion_Rate: '0.07%', Sales_Handover_Status: 'تم التسليم والتوزيع' }
    ],
    suggestedFormulas: [
      { metric: 'إجمالي قواعد البيانات المستخرجة', formula: '=SUM(E2:E20)', purpose: 'مجموع الشركات في قواعد صلة', cellLocation: 'E21' },
      { metric: 'إجمالي صفقات CRM المغلقة', formula: '=SUM(G2:G20)', purpose: 'حساب إجمالي العقود المسجلة في CRM', cellLocation: 'G21' }
    ]
  },
  {
    id: 'tab-09',
    tabNumber: '09',
    nameAr: 'الخطة التسويقية القادمة (Marketing Roadmap)',
    nameEn: '09_Action_Plan_Roadmap',
    color: '#d1232a',
    purpose: 'جدولة المبادرات والأنشطة القادمة (أكتوبر، نوفمبر 2026 وما بعدها) بما في ذلك بودكاست مختلف وحملات الواتساب والنشرات.',
    columns: [
      { colLetter: 'A', headerAr: 'معرف المبادرة', headerEn: 'Plan_ID', dataType: 'Text', description: 'كود النشاط المستقبلي', example: 'PLAN-01' },
      { colLetter: 'B', headerAr: 'اسم المبادرة والنشاط التسويقي', headerEn: 'Initiative_Name', dataType: 'Text', description: 'وصف الفعالية أو الحملة', example: 'حملة العمل عن بعد الموجهة لأصحاب الأعمال' },
      { colLetter: 'C', headerAr: 'القناة التسويقية', headerEn: 'Channel', dataType: 'Dropdown', dropdownOptions: ['البريد الإلكتروني', 'واتساب', 'النشرة الشهرية', 'بودكاست مختلف', 'لينكدإن', 'إعلانات جوجل'], description: 'وسيلة الوصول للجمهور', example: 'البريد الإلكتروني' },
      { colLetter: 'D', headerAr: 'الخدمة الترويجية', headerEn: 'Target_Service', dataType: 'Text', description: 'خدمة صلة المراد تسويقها', example: 'حلول العمل عن بعد' },
      { colLetter: 'E', headerAr: 'شهر الاستهداف المخطط', headerEn: 'Target_Month', dataType: 'Dropdown', dropdownOptions: ['أكتوبر 2026', 'نوفمبر 2026', 'ديسمبر 2026', 'الربع الأول 2027'], description: 'الموعد المحدد للإطلاق', example: 'أكتوبر 2026' },
      { colLetter: 'F', headerAr: 'الهدف الاستراتيجي', headerEn: 'Strategic_Goal', dataType: 'Text', description: 'ما الذي ستحققه المبادرة للإدارة', example: 'استهداف مسؤولي الموارد البشرية برؤى تنظيمية' },
      { colLetter: 'G', headerAr: 'الميزانية التقديرية (ر.س)', headerEn: 'Estimated_Budget_SAR', dataType: 'Currency (SAR)', description: 'التكلفة المتوقعة للحملة', example: '2500' },
      { colLetter: 'H', headerAr: 'حالة الاستعداد والاعتماد', headerEn: 'Readiness_Status', dataType: 'Dropdown', dropdownOptions: ['معتمد للإطلاق 🟢', 'قيد الإعداد 🟡', 'بانتظار المحتوى 🔵', 'مجدول ⏳'], description: 'موقف التحضير للمبادرة', example: 'قيد الإعداد 🟡' }
    ],
    sampleData: [
      { Plan_ID: 'PLAN-01', Initiative_Name: 'حملة العمل عن بعد', Channel: 'البريد الإلكتروني', Target_Service: 'حلول العمل عن بعد', Target_Month: 'أكتوبر 2026', Strategic_Goal: 'استهداف مسؤولي الموارد البشرية برؤى تنظيمية', Estimated_Budget_SAR: 1200, Readiness_Status: 'قيد الإعداد 🟡' },
      { Plan_ID: 'PLAN-02', Initiative_Name: 'حلول التوطين المباشرة', Channel: 'واتساب', Target_Service: 'حلول التوطين', Target_Month: 'نوفمبر 2026', Strategic_Goal: 'الوصول المباشر لصناع القرار والربط الفوري', Estimated_Budget_SAR: 3000, Readiness_Status: 'مجدول ⏳' },
      { Plan_ID: 'PLAN-03', Initiative_Name: 'النشرة الشهرية للإفصاح التدريبي', Channel: 'النشرة الشهرية', Target_Service: 'الإفصاح التدريبي', Target_Month: 'نوفمبر 2026', Strategic_Goal: 'ترسيخ مكانة صلة كمرجع معرفي أول للامتثال', Estimated_Budget_SAR: 800, Readiness_Status: 'معتمد للإطلاق 🟢' },
      { Plan_ID: 'PLAN-04', Initiative_Name: 'رعاية بودكاست مختلف', Channel: 'بودكاست مختلف', Target_Service: 'ترويج باقة خدمات صلة', Target_Month: 'نوفمبر 2026', Strategic_Goal: 'استقطاب قادة الأعمال والمدراء التنفيذيين', Estimated_Budget_SAR: 5000, Readiness_Status: 'بانتظار المحتوى 🔵' }
    ],
    suggestedFormulas: [
      { metric: 'إجمالي الميزانية المخططة للمبادرات', formula: '=SUM(G2:G10)', purpose: 'حساب ميزانية الخطة المستقبلية التقديرية', cellLocation: 'G11' },
      { metric: 'عدد المبادرات المعتمدة الجاهزة', formula: '=COUNTIF(H2:H10, "معتمد للإطلاق 🟢")', purpose: 'متابعة جاهزية الحملات للإدارة', cellLocation: 'H11' }
    ]
  }
];

// ==========================================
// READY-TO-COPY GOOGLE SHEETS FORMULAS SUITE
// ==========================================

export const FORMULA_LIBRARY = [
  {
    category: 'حساب الحالات ونسب الاعتماد (Status & Approvals)',
    title: 'حساب عدد المهام المكتملة والمعتمدة',
    formula: '=COUNTIF(\'06_التعديلات_التقنية_والموثوقية\'!G2:G50, "تم الاعتماد والتنفيذ ✅")',
    description: 'تحسب عدد التذاكر أو المهام التي تم اعتمادها وتنفيذها فعلياً من القسم التقني والتسويقي.',
    outputExample: '14 مهمة منجزة'
  },
  {
    category: 'حساب الحالات ونسب الاعتماد (Status & Approvals)',
    title: 'حساب نسبة الإنجاز المئوية للأسئلة الشائعة (15 من 30)',
    formula: '=COUNTIF(\'05_الأسئلة_الشائعة_FAQ\'!G2:G31, "منشور لايف 🟢") / 30',
    description: 'تحسب تلقائياً نسبة تحقيق مستهدف بنك الأسئلة الشائعة للـ AEO (تنسيق الخلية: نسبة مئوية %).',
    outputExample: '50.0% (15 سؤالاً تم نشره)'
  },
  {
    category: 'حساب الحالات ونسب الاعتماد (Status & Approvals)',
    title: 'حساب نسبة اعتماد تحسين صفحات الخدمات (2 من 5)',
    formula: '=COUNTIF(\'03_تهيئة_الموقع_SEO\'!L2:L6, "تم الاعتماد") / 5',
    description: 'تحسب نسبة صفحات الخدمات الخمس الأساسية التي تم اعتماد وتطبيق التحسينات بها.',
    outputExample: '40.0% (صفحتين من 5)'
  },
  {
    category: 'الميزانيات والإنفاق الإعلاني (Budget & ROI)',
    title: 'إجمالي الإنفاق الإعلاني على Google Ads',
    formula: '=SUMIFS(\'02_الحملات_الممولة_PPC\'!E2:E20, \'02_الحملات_الممولة_PPC\'!C2:C20, "Google Ads")',
    description: 'تجمع ميزانية حملات جوجل فقط (حلول التوطين، المعاهد، الإفصاح، التعهيد، ومراكز الأعمال).',
    outputExample: '5,828 ر.س'
  },
  {
    category: 'الميزانيات والإنفاق الإعلاني (Budget & ROI)',
    title: 'إجمالي الإنفاق الإعلاني على LinkedIn',
    formula: '=SUMIFS(\'02_الحملات_الممولة_PPC\'!E2:E20, \'02_الحملات_الممولة_PPC\'!C2:C20, "*LinkedIn*")',
    description: 'تجمع كافة مصروفات حملات لينكدإن (خلاصة المنشورات وحملات البريد InMail).',
    outputExample: '4,153 ر.س'
  },
  {
    category: 'الميزانيات والإنفاق الإعلاني (Budget & ROI)',
    title: 'متوسط تكلفة التحويل الحقيقي المرجح (CPA)',
    formula: '=IFERROR(SUM(\'02_الحملات_الممولة_PPC\'!E2:E20) / SUM(\'02_الحملات_الممولة_PPC\'!I2:I20), 0)',
    description: 'تقسم إجمالي الميزانية المنفقة على إجمالي عدد التحويلات عبر كافة القنوات لتحديد الكفاءة العامة.',
    outputExample: '28.9 ر.س لكل تحويل'
  },
  {
    category: 'تحليلات الذكاء الاصطناعي (AEO & ChatGPT Formulas)',
    title: 'نسبة استشهاد شات جي بي تي ونماذج الذكاء الاصطناعي بموقع صلة',
    formula: '=COUNTIF(\'04_محركات_الذكاء_GEO_AEO\'!F2:F30, "نعم مستشهد ✅") / COUNTA(\'04_محركات_الذكاء_GEO_AEO\'!A2:A30)',
    description: 'تقيس نسبة الإجابات التي تضمنت رابطاً إحالي مباشر لموقع صلة الرسمي من إجمالي الاستعلامات المختبرة.',
    outputExample: '60.0% (18 من 30 استعلاماً)'
  },
  {
    category: 'تحليلات الذكاء الاصطناعي (AEO & ChatGPT Formulas)',
    title: 'متوسط دقة المعلومات المقدمة عن صلة في ChatGPT',
    formula: '=AVERAGEIF(\'04_محركات_الذكاء_GEO_AEO\'!B2:B30, "ChatGPT", \'04_محركات_الذكاء_GEO_AEO\'!G2:G30)',
    description: 'تحسب متوسط نسبة دقة ومطابقة إجابات ChatGPT لبيانات صلة الرسمية.',
    outputExample: '60.0%'
  },
  {
    category: 'الرسوم البيانية المدمجة (Sparkline Mini-Charts)',
    title: 'شريط تقدم إنجاز الأهداف داخل الخلية (Sparkline Progress Bar)',
    formula: '=SPARKLINE(B2, {"charttype","bar";"max",100;"color1","#d1232a"})',
    description: 'ترسم شريط تقدم أحمر بلون صلة الرسمي يمثل نسبة إنجاز المؤشر داخل نفس الخلية.',
    outputExample: '█ 100% بلون صلة الأحمر'
  },
  {
    category: 'المقارنة الشهرية (MoM Growth Formulas)',
    title: 'نسبة النمو والتغير الشهري (سبتمبر مقابل أغسطس)',
    formula: '=IFERROR((Current_Sep - Previous_Aug) / Previous_Aug, 0)',
    description: 'تحسب نسبة الزيادة أو التراجع بين الشهرين مع معالجة الأخطاء الحسابية تلقائياً.',
    outputExample: '+66.7% نمو في صفقات CRM'
  }
];
