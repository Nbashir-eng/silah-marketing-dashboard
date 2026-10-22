export type ReportMonth = 'september_2026' | 'august_2026';

export type TeamMemberId = 'noura' | 'saud' | 'raghad' | 'majed';

export interface TeamMember {
  id: TeamMemberId;
  name: string;
  role: string;
  title: string;
  email: string;
  avatarColor: string;
  focusTab: string;
  description: string;
  initials?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: 'create' | 'update' | 'delete' | 'status_change' | 'إضافة' | 'تعديل' | 'حذف' | 'اعتماد';
  entityType?: 'حملة إعلانية' | 'مهمة تقنية' | 'رصد ذكاء اصطناعي' | 'صفحة موقع' | 'قاعدة بيانات عملاء' | 'تقرير شهري' | string;
  entityName?: string;
  performedBy?: string;
  performedById?: TeamMemberId;
  memberId?: TeamMemberId;
  memberName?: string;
  entity?: 'campaign' | 'task' | 'aeo' | 'lead' | 'settings' | string;
  entityId?: string;
  summary?: string;
  details?: string;
}

export interface MonthlyOverviewData {
  totalBudgetSAR: number;
  completedTasks: number;
  totalWebsiteViews: number;
  leadGenRecords: number;
  totalAdsClicks: number;
  cpcAverageSAR: number;
  budgetChangePercent: number;
  viewsChangePercent: number;
  status: 'معتمد نهائياً' | 'قيد الاعتماد' | 'مسودة';
}

export interface CampaignData {
  id: string;
  platform: 'Google Ads' | 'LinkedIn Ads' | 'LinkedIn' | 'Mailchimp' | 'WhatsApp Direct' | 'Podcast' | string;
  name?: string;
  campaignName?: string;
  type?: string;
  category?: 'التدريب والإفصاح' | 'مراكز الأعمال' | 'العمل عن بعد والتوظيف' | 'حلول الشركات B2B' | string;
  budgetSAR?: number;
  spentSAR?: number;
  spendSAR?: number;
  impressions?: number;
  clicks?: number;
  conversions: number;
  cpaSAR?: number; // Cost Per Acquisition / Conversion
  costPerConversionSAR?: number;
  ctr?: number; // Click Through Rate percentage
  whatsappClicks?: number;
  callsClicks?: number;
  reach?: number;
  cpmSAR?: number;
  cplSAR?: number;
  sends?: number;
  interactions?: number;
  leads?: number;
  crmDeals?: number;
  targetAudience?: string;
  status: 'تم الاعتماد' | 'نشط' | 'مكتمل' | 'قيد المراجعة';
  assignedTo?: TeamMemberId;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
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
  assignedTo?: TeamMemberId;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
}

export interface AeoPlatformData {
  platformName: 'ChatGPT' | 'Google AI' | 'Copilot';
  queriesTested: number;
  citationsCount: number;
  brandMentionsCount: number;
  accuracyRate: number; // percentage e.g. 60
  keyServicesMentioned: string[];
  assignedTo?: TeamMemberId;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
  testedQueries: {
    id?: string;
    query: string;
    silahMentioned: boolean;
    citedSource: boolean;
    accuracy: number;
    responseSnippet: string;
    assignedTo?: TeamMemberId;
    lastUpdatedBy?: string;
    lastUpdatedAt?: string;
  }[];
}

export interface WebAnalyticsPage {
  pageName: string;
  views: number;
  percentage: number;
  category: 'Landing Page' | 'Services' | 'Contact' | 'Product';
}

export interface LeadGenData {
  id?: string;
  source: string;
  totalRecords: number;
  qualifiedLeads: number;
  sectors: string[];
  regions: string[];
  status: string;
  toolsUsed: string[];
  proposalsSent: string | number;
  successfulDeals: string | number;
  assignedTo?: TeamMemberId;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
}

export interface TechTask {
  id: string;
  title: string;
  category: 'SEO تقني' | 'بيانات منظمة Schema' | 'تكامل أنظمة CRM' | 'تطوير صفحات وFAQ' | 'موثوقية وهوية رقمية';
  assignedTo?: TeamMemberId | string;
  departmentRef?: string;
  priority: 'عالية جداً' | 'عالية' | 'متوسطة' | 'منخفضة';
  submissionDate: string;
  targetDate: string;
  status: 'تم الاعتماد والتنفيذ' | 'قيد المراجعة' | 'مرفوع للتقنية' | 'جاري العمل' | 'بانتظار الملاحظات';
  impact: string;
  sheetRowRef?: string;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
}

export interface RoadmapItem {
  id: string;
  initiative: string;
  channel: 'البريد الإلكتروني' | 'واتساب' | 'النشرة الشهرية' | 'بودكاست مختلف' | 'لينكدإن' | 'إعلانات جوجل';
  serviceTarget: string;
  targetMonth: string;
  objective: string;
  status: 'مجدول' | 'قيد الإعداد' | 'معتمد' | 'بانتظار المحتوى';
  assignedTo?: TeamMemberId;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
}

export interface SheetTabColumn {
  colLetter: string;
  headerAr: string;
  headerEn: string;
  dataType: string;
  description: string;
  example: string | number;
  formula?: string;
  dropdownOptions?: string[];
}

export interface SheetTabDefinition {
  id: string;
  tabNumber?: string;
  name?: string;
  nameAr?: string;
  nameEn?: string;
  sheetName?: string;
  purpose?: string;
  color?: string;
  columns?: SheetTabColumn[];
  columnsCount?: number;
  sampleData?: any[];
  suggestedFormulas?: any[];
  keyFormulas?: string[];
  rowEstimate?: number;
  ownerRole?: string;
}
