export type ReportMonth = 'august_2026' | 'september_2026' | 'comparison';

export interface CampaignData {
  id: string;
  name: string;
  platform: 'Google Ads' | 'LinkedIn' | 'Mailchimp';
  type: string;
  spendSAR: number;
  impressions: number;
  clicks: number;
  ctr: number; // percentage
  conversions: number;
  costPerConversionSAR: number;
  callsClicks?: number;
  whatsappClicks?: number;
  reach?: number;
  cpmSAR?: number;
  cplSAR?: number;
  sends?: number;
  interactions?: number;
  leads?: number;
  crmDeals?: number;
  targetAudience?: string;
  status: 'تم الاعتماد' | 'نشط' | 'مكتمل' | 'قيد المراجعة';
}

export interface SeoPageData {
  id: string;
  pageName: string;
  urlPath: string;
  targetKeywords: string[];
  currentRanking: number | string;
  previousRanking?: number | string;
  viewsMonthly: number;
  faqStatus: 'منشور' | 'قيد المراجعة' | 'جاري الصياغة' | 'مطلوب';
  schemaImplemented: boolean;
  metaTagsStatus: 'مكتمل ومحسن' | 'قيد التحديث' | 'مطلوب إعادة كتابة';
  techChangesSubmitted: string;
  trustSourcesCount: number;
  approvalStatus: 'تم الاعتماد' | 'قيد المراجعة' | 'بانتظار التقنية' | 'مسودة';
  notes: string;
}

export interface AeoPlatformData {
  platformName: 'ChatGPT' | 'Google AI' | 'Copilot';
  queriesTested: number;
  citationsCount: number;
  brandMentionsCount: number;
  accuracyRate: number; // percentage e.g. 60
  keyServicesMentioned: string[];
  testedQueries: {
    query: string;
    silahMentioned: boolean;
    citedSource: boolean;
    accuracy: number;
    responseSnippet: string;
  }[];
}

export interface WebAnalyticsPage {
  pageName: string;
  views: number;
  percentage: number;
  category: 'Landing Page' | 'Services' | 'Contact' | 'Product';
}

export interface LeadGenData {
  source: string;
  totalRecords: number;
  qualifiedLeads: number;
  sectors: string[];
  regions: string[];
  status: string;
  toolsUsed: string[];
  proposalsSent: string | number;
  successfulDeals: string | number;
}

export interface TechTask {
  id: string;
  title: string;
  category: 'SEO تقني' | 'بيانات منظمة Schema' | 'تكامل أنظمة CRM' | 'تطوير صفحات وFAQ' | 'موثوقية وهوية رقمية';
  assignedTo: 'فريق التقنية' | 'فريق التسويق' | 'فريق المبيعات';
  priority: 'عالية جداً' | 'عالية' | 'متوسطة' | 'منخفضة';
  submissionDate: string;
  targetDate: string;
  status: 'تم الاعتماد والتنفيذ' | 'قيد المراجعة' | 'مرفوع للتقنية' | 'جاري العمل' | 'بانتظار الملاحظات';
  impact: string;
  sheetRowRef?: string;
}

export interface RoadmapItem {
  id: string;
  initiative: string;
  channel: 'البريد الإلكتروني' | 'واتساب' | 'النشرة الشهرية' | 'بودكاست مختلف' | 'لينكدإن' | 'إعلانات جوجل';
  serviceTarget: string;
  targetMonth: string;
  objective: string;
  status: 'مجدول' | 'قيد الإعداد' | 'معتمد' | 'بانتظار المحتوى';
}

export interface SheetTabDefinition {
  id: string;
  tabNumber: string;
  nameAr: string;
  nameEn: string;
  color: string;
  purpose: string;
  columns: {
    colLetter: string;
    headerAr: string;
    headerEn: string;
    dataType: 'Text' | 'Number' | 'Currency (SAR)' | 'Percentage (%)' | 'Dropdown' | 'Date' | 'URL';
    formula?: string;
    dropdownOptions?: string[];
    validationRule?: string;
    description: string;
    example: string;
  }[];
  sampleData: Record<string, any>[];
  suggestedFormulas: {
    metric: string;
    formula: string;
    purpose: string;
    cellLocation: string;
  }[];
}
