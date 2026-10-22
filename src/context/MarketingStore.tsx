import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  CampaignData, 
  TechTask, 
  SeoPageData, 
  AeoPlatformData, 
  LeadGenData, 
  ReportMonth, 
  TeamMember, 
  TeamMemberId, 
  AuditLogEntry 
} from '../types/dashboard';
import { 
  CAMPAIGNS_SEP_2026, 
  CAMPAIGNS_AUG_2026, 
  TECH_TASKS_DATABASE, 
  AEO_PLATFORMS_DATA, 
  SEO_PAGES_DATABASE, 
  LEAD_GENERATION_DATABASE,
  MONTHLY_OVERVIEW 
} from '../data/marketingData';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'noura',
    name: 'نورة بشير',
    role: 'مديرة التسويق / الإدارة',
    title: 'Marketing Director & Leadership',
    email: 'nbashir@silah.com.sa',
    avatarColor: '#d1232a', // Silah primary red
    focusTab: 'dashboard',
    description: 'متابعة اللوحة التنفيذية، الميزانيات الكلية، واعتماد التقارير الرسمية للإدارة العليا ومجلس الإدارة.',
    initials: 'ن.ب'
  },
  {
    id: 'saud',
    name: 'سعود العتيبي',
    role: 'مسؤول الحملات والإعلانات',
    title: 'Paid Ads & Email Specialist',
    email: 'saud@silah.com.sa',
    avatarColor: '#24419f', // Royal Blue
    focusTab: 'campaigns_editor',
    description: 'إدخال وتحديث ومتابعة حملات Google Ads و LinkedIn Ads، ونشرات Mailchimp البريدية، وتحسين معدلات التحويل.',
    initials: 'س.ع'
  },
  {
    id: 'raghad',
    name: 'رغد الشمري',
    role: 'مسؤولة الذكاء الاصطناعي و SEO',
    title: 'AI Search (GEO/AEO) & SEO Lead',
    email: 'raghad@silah.com.sa',
    avatarColor: '#208c6b', // Silah Emerald Green
    focusTab: 'aeo_audit',
    description: 'رصد استشهادات محركات الذكاء الاصطناعي (ChatGPT, Google AI, Copilot)، بنك الأسئلة الشائعة، وتحسين الكلمات المفتاحية.',
    initials: 'ر.ش'
  },
  {
    id: 'majed',
    name: 'ماجد القحطاني',
    role: 'مسؤول المهام التقنية و CRM',
    title: 'Tech Lead & CRM Data Specialist',
    email: 'majed@silah.com.sa',
    avatarColor: '#5e0c10', // Deep Crimson
    focusTab: 'tech_tracker',
    description: 'متابعة التذاكر والتعديلات التقنية، تكامل قواعد البيانات، ومطابقة وتتبع صفقات B2B في نظام CRM.',
    initials: 'م.ق'
  }
];

interface MarketingContextType {
  // Members & Authentication
  teamMembers: TeamMember[];
  currentMember: TeamMember;
  setCurrentMemberId: (id: TeamMemberId) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;

  // Selected Month
  selectedMonth: ReportMonth;
  setSelectedMonth: (month: ReportMonth) => void;

  // Real-time Data
  campaigns: CampaignData[];
  techTasks: TechTask[];
  aeoData: AeoPlatformData[];
  seoPages: SeoPageData[];
  leadGenData: LeadGenData[];
  auditLogs: AuditLogEntry[];

  // Data Manipulation (CRUD with Audit Logging)
  addCampaign: (campaign: Omit<CampaignData, 'id'>) => void;
  updateCampaign: (id: string, updates: Partial<CampaignData>) => void;
  deleteCampaign: (id: string) => void;

  addTechTask: (task: Omit<TechTask, 'id'>) => void;
  updateTechTask: (id: string, updates: Partial<TechTask>) => void;
  deleteTechTask: (id: string) => void;

  addTestedQuery: (platformName: 'ChatGPT' | 'Google AI' | 'Copilot', queryData: { query: string; silahMentioned: boolean; citedSource: boolean; accuracy: number; responseSnippet: string; assignedTo: TeamMemberId }) => void;
  updateTestedQuery: (platformName: 'ChatGPT' | 'Google AI' | 'Copilot', queryId: string, updates: any) => void;

  updateSeoPage: (id: string, updates: Partial<SeoPageData>) => void;
  updateLeadGen: (index: number, updates: Partial<LeadGenData>) => void;

  // Dynamic Real-time Calculations
  kpis: {
    totalBudget: number;
    totalSpend: number;
    totalConversions: number;
    totalClicks: number;
    totalImpressions: number;
    totalCalls: number;
    totalWhatsApp: number;
    averageCpa: number;
    averageCtr: number;
    completedTasksCount: number;
    totalTasksCount: number;
    websiteViews: number;
    websiteViewsFormatted: string;
    activeCampaignsCount: number;
    crmNewDeals: number;
    emailTotalSends: number;
    emailOpenRate: number;
    emailClickRate: number;
    emailBounceRate: number;
    emailNewsletterTitle: string;
    aeoVisibilityRate: number;
    aeoOptimizedPages: string;
    aeoFaqProgress: string;
    aeoKnowledgeContent: string;
  };

  // PDF Export Modal State
  isPdfModalOpen: boolean;
  setIsPdfModalOpen: (open: boolean) => void;

  // Reset to default
  resetToDefaults: () => void;
}

const MarketingContext = createContext<MarketingContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'silah_marketing_system_state_v2';

export const MarketingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current user / profile
  const [currentMemberId, setCurrentMemberIdState] = useState<TeamMemberId>('noura');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<ReportMonth>('september_2026');

  // Assign default responsible members to initial records
  const defaultInitialCampaigns: CampaignData[] = useMemo(() => {
    return CAMPAIGNS_SEP_2026.map((c, idx) => ({
      ...c,
      assignedTo: (idx % 2 === 0 ? 'saud' : (idx === 1 ? 'noura' : 'majed')) as TeamMemberId,
      lastUpdatedBy: 'سعود العتيبي',
      lastUpdatedAt: '2026-09-30 14:00'
    }));
  }, []);

  const defaultInitialTechTasks: TechTask[] = useMemo(() => {
    return TECH_TASKS_DATABASE.map((t, idx) => ({
      ...t,
      assignedTo: (idx % 2 === 0 ? 'majed' : (idx === 1 ? 'raghad' : 'saud')) as TeamMemberId,
      lastUpdatedBy: 'ماجد القحطاني',
      lastUpdatedAt: '2026-09-28 11:30'
    }));
  }, []);

  const defaultInitialAeo: AeoPlatformData[] = useMemo(() => {
    return AEO_PLATFORMS_DATA.september_2026.map(p => ({
      ...p,
      testedQueries: p.testedQueries.map((q, qIdx) => ({
        ...q,
        id: `q-${p.platformName}-${qIdx}`,
        assignedTo: 'raghad' as TeamMemberId,
        lastUpdatedBy: 'رغد الشمري',
        lastUpdatedAt: '2026-09-29 16:45'
      }))
    }));
  }, []);

  const defaultInitialSeo: SeoPageData[] = useMemo(() => {
    return SEO_PAGES_DATABASE.map((s, idx) => ({
      ...s,
      assignedTo: (idx % 2 === 0 ? 'raghad' : 'majed') as TeamMemberId,
      lastUpdatedBy: 'رغد الشمري',
      lastUpdatedAt: '2026-09-25 10:15'
    }));
  }, []);

  const defaultInitialLeads: LeadGenData[] = useMemo(() => {
    return LEAD_GENERATION_DATABASE.map((l: LeadGenData, idx: number) => ({
      ...l,
      id: `lead-${idx}`,
      assignedTo: 'majed' as TeamMemberId,
      lastUpdatedBy: 'ماجد القحطاني',
      lastUpdatedAt: '2026-09-27 12:00'
    }));
  }, []);

  const defaultInitialAuditLogs: AuditLogEntry[] = [
    {
      id: 'log-1',
      action: 'اعتماد',
      entityType: 'تقرير شهري',
      entityName: 'اعتماد ميزانية تقرير سبتمبر 2026',
      performedBy: 'نورة بشير',
      performedById: 'noura',
      timestamp: '2026-10-01 09:30',
      details: 'تم اعتماد الميزانية الإجمالية (10,194 ر.س) ومطابقتها مع الإدارة المالية.'
    },
    {
      id: 'log-2',
      action: 'تعديل',
      entityType: 'حملة إعلانية',
      entityName: 'حملة تعهيد الأعمال (BPO)',
      performedBy: 'سعود العتيبي',
      performedById: 'saud',
      timestamp: '2026-09-28 15:20',
      details: 'رفع ميزانية الحملة إلى 1,521 ر.س وتحقيق 108 تحويلات بتكلفة 14 ر.س.'
    },
    {
      id: 'log-3',
      action: 'إضافة',
      entityType: 'رصد ذكاء اصطناعي',
      entityName: 'استعلام استشهاد صلة في ChatGPT',
      performedBy: 'رغد الشمري',
      performedById: 'raghad',
      timestamp: '2026-09-26 11:15',
      details: 'رصد دقة إجابة ChatGPT بنسبة 80% في استعلام مراكز الأعمال المعتمدة.'
    },
    {
      id: 'log-4',
      action: 'تعديل',
      entityType: 'مهمة تقنية',
      entityName: 'إضافة FAQ Schema في صفحة الإفصاح التدريبي',
      performedBy: 'ماجد القحطاني',
      performedById: 'majed',
      timestamp: '2026-09-25 14:40',
      details: 'اعتماد تنفيذ كود البيانات المنظمة واكتمال التحقق في Google Rich Results.'
    }
  ];

  // Load from localStorage or defaults
  const [campaigns, setCampaigns] = useState<CampaignData[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_campaigns`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialCampaigns;
  });

  const [techTasks, setTechTasks] = useState<TechTask[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_techTasks`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialTechTasks;
  });

  const [aeoData, setAeoData] = useState<AeoPlatformData[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_aeo`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialAeo;
  });

  const [seoPages, setSeoPages] = useState<SeoPageData[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_seo`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialSeo;
  });

  const [leadGenData, setLeadGenData] = useState<LeadGenData[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_leads`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialLeads;
  });

  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_audit`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultInitialAuditLogs;
  });

  // Current active member object
  const currentMember = useMemo(() => {
    return TEAM_MEMBERS.find(m => m.id === currentMemberId) || TEAM_MEMBERS[0];
  }, [currentMemberId]);

  const setCurrentMemberId = (id: TeamMemberId) => {
    setCurrentMemberIdState(id);
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_currentMember`, id);
    } catch (e) {}
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_campaigns`, JSON.stringify(campaigns));
    } catch (e) {}
  }, [campaigns]);

  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_techTasks`, JSON.stringify(techTasks));
    } catch (e) {}
  }, [techTasks]);

  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_aeo`, JSON.stringify(aeoData));
    } catch (e) {}
  }, [aeoData]);

  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_seo`, JSON.stringify(seoPages));
    } catch (e) {}
  }, [seoPages]);

  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_leads`, JSON.stringify(leadGenData));
    } catch (e) {}
  }, [leadGenData]);

  useEffect(() => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_KEY}_audit`, JSON.stringify(auditLogs));
    } catch (e) {}
  }, [auditLogs]);

  // Helper to format Arabic current timestamp
  const getNowTimestamp = () => {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  };

  // Helper to log audit trail
  const recordAudit = (
    action: AuditLogEntry['action'],
    entityType: AuditLogEntry['entityType'],
    entityName: string,
    details: string
  ) => {
    const newEntry: AuditLogEntry = {
      id: `audit-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      action,
      entityType,
      entityName,
      performedBy: currentMember.name,
      performedById: currentMember.id,
      timestamp: getNowTimestamp(),
      details
    };
    setAuditLogs(prev => [newEntry, ...prev]);
  };

  // --- Campaign Operations ---
  const addCampaign = (campaignInput: Omit<CampaignData, 'id'>) => {
    const newId = `camp-${Date.now()}`;
    const impressions = campaignInput.impressions || 0;
    const clicks = campaignInput.clicks || 0;
    const spend = campaignInput.spentSAR ?? campaignInput.spendSAR ?? 0;
    const conversions = campaignInput.conversions || 0;

    const calculatedCtr = impressions > 0 
      ? Number(((clicks / impressions) * 100).toFixed(2)) 
      : 0;
    const calculatedCpa = conversions > 0 
      ? Number((spend / conversions).toFixed(1)) 
      : 0;

    const campaignTitle = campaignInput.campaignName || campaignInput.name || 'حملة إعلانية';

    const newCampaign: CampaignData = {
      ...campaignInput,
      id: newId,
      campaignName: campaignTitle,
      name: campaignTitle,
      spentSAR: spend,
      spendSAR: spend,
      ctr: campaignInput.ctr || calculatedCtr,
      cpaSAR: campaignInput.cpaSAR || calculatedCpa,
      costPerConversionSAR: campaignInput.costPerConversionSAR || calculatedCpa,
      lastUpdatedBy: currentMember.name,
      lastUpdatedAt: getNowTimestamp()
    };

    setCampaigns(prev => [newCampaign, ...prev]);
    recordAudit(
      'إضافة', 
      'حملة إعلانية', 
      campaignTitle, 
      `تمت إضافة حملة جديدة على منصة ${newCampaign.platform} بميزانية ${spend.toLocaleString()} ر.س والمسؤول: ${TEAM_MEMBERS.find(m => m.id === newCampaign.assignedTo)?.name || currentMember.name}.`
    );
  };

  const updateCampaign = (id: string, updates: Partial<CampaignData>) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id !== id) return c;
      const updated = { 
        ...c, 
        ...updates, 
        lastUpdatedBy: currentMember.name, 
        lastUpdatedAt: getNowTimestamp() 
      };
      
      const clicks = updated.clicks || 0;
      const impressions = updated.impressions || 0;
      const spend = updated.spentSAR ?? updated.spendSAR ?? 0;
      const conversions = updated.conversions || 0;

      if (impressions > 0) {
        updated.ctr = Number(((clicks / impressions) * 100).toFixed(2));
      }
      if (conversions > 0) {
        updated.cpaSAR = Number((spend / conversions).toFixed(1));
        updated.costPerConversionSAR = updated.cpaSAR;
      }
      
      const campaignTitle = updated.campaignName || updated.name || 'حملة إعلانية';

      recordAudit(
        'تعديل', 
        'حملة إعلانية', 
        campaignTitle, 
        `تحديث بيانات الحملة بواسطة ${currentMember.name}: ميزانية ${spend} ر.س وتحويلات ${conversions}.`
      );
      return updated;
    }));
  };

  const deleteCampaign = (id: string) => {
    const existing = campaigns.find(c => c.id === id);
    if (!existing) return;
    const campaignTitle = existing.campaignName || existing.name || 'حملة إعلانية';
    setCampaigns(prev => prev.filter(c => c.id !== id));
    recordAudit(
      'حذف', 
      'حملة إعلانية', 
      campaignTitle, 
      `تم حذف الحملة الإعلانية (${campaignTitle}) من قاعدة البيانات.`
    );
  };

  // --- Tech Task Operations ---
  const addTechTask = (taskInput: Omit<TechTask, 'id'>) => {
    const newId = `TECH-${Math.floor(100 + Math.random() * 900)}`;
    const newTask: TechTask = {
      ...taskInput,
      id: newId,
      lastUpdatedBy: currentMember.name,
      lastUpdatedAt: getNowTimestamp()
    };
    setTechTasks(prev => [newTask, ...prev]);
    recordAudit(
      'إضافة', 
      'مهمة تقنية', 
      newTask.title, 
      `إضافة مهمة تقنية جديدة بأولوية ${newTask.priority} والمسؤول: ${TEAM_MEMBERS.find(m => m.id === newTask.assignedTo)?.name || currentMember.name}.`
    );
  };

  const updateTechTask = (id: string, updates: Partial<TechTask>) => {
    setTechTasks(prev => prev.map(t => {
      if (t.id !== id) return t;
      const updated = { 
        ...t, 
        ...updates, 
        lastUpdatedBy: currentMember.name, 
        lastUpdatedAt: getNowTimestamp() 
      };
      recordAudit(
        updates.status === 'تم الاعتماد والتنفيذ' ? 'اعتماد' : 'تعديل', 
        'مهمة تقنية', 
        updated.title, 
        `تحديث حالة المهمة إلى (${updated.status}) بواسطة ${currentMember.name}.`
      );
      return updated;
    }));
  };

  const deleteTechTask = (id: string) => {
    const existing = techTasks.find(t => t.id === id);
    if (!existing) return;
    setTechTasks(prev => prev.filter(t => t.id !== id));
    recordAudit('حذف', 'مهمة تقنية', existing.title, `تم حذف المهمة التقنية.`);
  };

  // --- AEO Operations ---
  const addTestedQuery = (
    platformName: 'ChatGPT' | 'Google AI' | 'Copilot',
    queryData: { query: string; silahMentioned: boolean; citedSource: boolean; accuracy: number; responseSnippet: string; assignedTo: TeamMemberId }
  ) => {
    const newId = `q-${Date.now()}`;
    const newQuery = {
      ...queryData,
      id: newId,
      lastUpdatedBy: currentMember.name,
      lastUpdatedAt: getNowTimestamp()
    };
    setAeoData(prev => prev.map(p => {
      if (p.platformName !== platformName) return p;
      const updatedQueries = [newQuery, ...p.testedQueries];
      const mentionsCount = updatedQueries.filter(q => q.silahMentioned).length;
      const citationsCount = updatedQueries.filter(q => q.citedSource).length;
      const avgAccuracy = Math.round(updatedQueries.reduce((sum, q) => sum + q.accuracy, 0) / updatedQueries.length);

      return {
        ...p,
        queriesTested: updatedQueries.length,
        citationsCount,
        brandMentionsCount: mentionsCount,
        accuracyRate: avgAccuracy,
        testedQueries: updatedQueries
      };
    }));

    recordAudit(
      'إضافة', 
      'رصد ذكاء اصطناعي', 
      `فحص ${platformName}`, 
      `إضافة استعلام فحص جديد لمنصة ${platformName} بدقة ${queryData.accuracy}% بواسطة ${currentMember.name}.`
    );
  };

  const updateTestedQuery = (
    platformName: 'ChatGPT' | 'Google AI' | 'Copilot',
    queryId: string,
    updates: any
  ) => {
    setAeoData(prev => prev.map(p => {
      if (p.platformName !== platformName) return p;
      const updatedQueries = p.testedQueries.map(q => {
        if (q.id !== queryId) return q;
        return {
          ...q,
          ...updates,
          lastUpdatedBy: currentMember.name,
          lastUpdatedAt: getNowTimestamp()
        };
      });
      const mentionsCount = updatedQueries.filter(q => q.silahMentioned).length;
      const citationsCount = updatedQueries.filter(q => q.citedSource).length;
      const avgAccuracy = Math.round(updatedQueries.reduce((sum, q) => sum + q.accuracy, 0) / updatedQueries.length);

      return {
        ...p,
        citationsCount,
        brandMentionsCount: mentionsCount,
        accuracyRate: avgAccuracy,
        testedQueries: updatedQueries
      };
    }));

    recordAudit(
      'تعديل', 
      'رصد ذكاء اصطناعي', 
      `استعلام في ${platformName}`, 
      `تحديث نتيجة فحص الاستعلام في ${platformName} بواسطة ${currentMember.name}.`
    );
  };

  // --- SEO Operations ---
  const updateSeoPage = (id: string, updates: Partial<SeoPageData>) => {
    setSeoPages(prev => prev.map(s => {
      if (s.id !== id) return s;
      const updated = { 
        ...s, 
        ...updates, 
        lastUpdatedBy: currentMember.name, 
        lastUpdatedAt: getNowTimestamp() 
      };
      recordAudit('تعديل', 'صفقة CRM', updated.pageName, `تحديث حالة صفحة SEO: ${updated.approvalStatus}`);
      return updated;
    }));
  };

  // --- Lead Gen Operations ---
  const updateLeadGen = (index: number, updates: Partial<LeadGenData>) => {
    setLeadGenData(prev => prev.map((l, idx) => {
      if (idx !== index) return l;
      return { 
        ...l, 
        ...updates, 
        lastUpdatedBy: currentMember.name, 
        lastUpdatedAt: getNowTimestamp() 
      };
    }));
  };

  // --- Reset to Factory Defaults ---
  const resetToDefaults = () => {
    setCampaigns(defaultInitialCampaigns);
    setTechTasks(defaultInitialTechTasks);
    setAeoData(defaultInitialAeo);
    setSeoPages(defaultInitialSeo);
    setLeadGenData(defaultInitialLeads);
    setAuditLogs(defaultInitialAuditLogs);
    try {
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_campaigns`);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_techTasks`);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_aeo`);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_seo`);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_leads`);
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}_audit`);
    } catch (e) {}
    recordAudit('اعتماد', 'تقرير شهري', 'إعادة ضبط البيانات', 'تم استرجاع الإعدادات والبيانات الأولية المعتمدة.');
  };

  // --- Live Dynamic Calculated KPIs ---
  const kpis = useMemo(() => {
    const activeCampaigns = campaigns;
    const totalSpend = activeCampaigns.reduce((sum, c) => sum + (c.spentSAR ?? c.spendSAR ?? 0), 0);
    const totalConversions = activeCampaigns.reduce((sum, c) => sum + (c.conversions || 0), 0);
    const totalClicks = activeCampaigns.reduce((sum, c) => sum + (c.clicks || 0), 0);
    const totalImpressions = activeCampaigns.reduce((sum, c) => sum + (c.impressions || 0), 0);
    const totalCalls = activeCampaigns.reduce((sum, c) => sum + (c.callsClicks || 0), 0);
    const totalWhatsApp = activeCampaigns.reduce((sum, c) => sum + (c.whatsappClicks || 0), 0);

    const averageCpa = totalConversions > 0 ? Number((totalSpend / totalConversions).toFixed(1)) : 0;
    const averageCtr = totalImpressions > 0 ? Number(((totalClicks / totalImpressions) * 100).toFixed(2)) : 0;

    const completedTasksCount = techTasks.filter(t => t.status === 'تم الاعتماد والتنفيذ').length;
    const totalTasksCount = techTasks.length;

    const crmNewDeals = activeCampaigns.reduce((sum, c) => sum + (c.crmDeals || 0), 0) + 1; // 5 deals total for September

    const baseOverview = selectedMonth === 'august_2026' 
      ? MONTHLY_OVERVIEW.august_2026 
      : MONTHLY_OVERVIEW.september_2026;

    // Dynamic AEO citations and accuracy
    const totalAeoTested = aeoData.reduce((sum, p) => sum + p.queriesTested, 0);
    const totalAeoCitations = aeoData.reduce((sum, p) => sum + p.citationsCount, 0);
    const avgAeoVisibility = totalAeoTested > 0 ? Math.round((totalAeoCitations / totalAeoTested) * 25) : 20;

    return {
      totalBudget: totalSpend,
      totalSpend,
      totalConversions,
      totalClicks,
      totalImpressions,
      totalCalls,
      totalWhatsApp,
      averageCpa,
      averageCtr,
      completedTasksCount,
      totalTasksCount,
      websiteViews: baseOverview.websiteViews,
      websiteViewsFormatted: baseOverview.websiteViewsFormatted,
      activeCampaignsCount: activeCampaigns.length,
      crmNewDeals,
      emailTotalSends: baseOverview.emailTotalSends,
      emailOpenRate: baseOverview.emailOpenRate,
      emailClickRate: baseOverview.emailClickRate,
      emailBounceRate: baseOverview.emailBounceRate,
      emailNewsletterTitle: baseOverview.emailNewsletterTitle,
      aeoVisibilityRate: avgAeoVisibility,
      aeoOptimizedPages: baseOverview.aeoOptimizedPages,
      aeoFaqProgress: baseOverview.aeoFaqProgress,
      aeoKnowledgeContent: baseOverview.aeoKnowledgeContent,
    };
  }, [campaigns, techTasks, aeoData, selectedMonth]);

  return (
    <MarketingContext.Provider
      value={{
        teamMembers: TEAM_MEMBERS,
        currentMember,
        setCurrentMemberId,
        isAuthModalOpen,
        setIsAuthModalOpen,
        selectedMonth,
        setSelectedMonth,
        campaigns,
        techTasks,
        aeoData,
        seoPages,
        leadGenData,
        auditLogs,
        addCampaign,
        updateCampaign,
        deleteCampaign,
        addTechTask,
        updateTechTask,
        deleteTechTask,
        addTestedQuery,
        updateTestedQuery,
        updateSeoPage,
        updateLeadGen,
        kpis,
        isPdfModalOpen,
        setIsPdfModalOpen,
        resetToDefaults
      }}
    >
      {children}
    </MarketingContext.Provider>
  );
};

export const useMarketingStore = () => {
  const context = useContext(MarketingContext);
  if (!context) {
    throw new Error('useMarketingStore must be used within a MarketingProvider');
  }
  return context;
};
