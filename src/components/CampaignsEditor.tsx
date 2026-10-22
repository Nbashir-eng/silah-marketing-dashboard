import React, { useState } from 'react';
import { 
  Megaphone, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  DollarSign, 
  MousePointer, 
  TrendingUp, 
  PhoneCall, 
  MessageSquare, 
  UserCheck, 
  Filter, 
  Sparkles,
  Calendar,
  Layers,
  Save,
  CheckCircle2
} from 'lucide-react';
import { useMarketingStore, TEAM_MEMBERS } from '../context/MarketingStore';
import { CampaignData, TeamMemberId } from '../types/dashboard';

interface CampaignsEditorProps {
  onNavigateTab?: (tabId: string) => void;
}

export const CampaignsEditor: React.FC<CampaignsEditorProps> = ({ onNavigateTab: _onNavigateTab }) => {
  const { 
    campaigns, 
    addCampaign, 
    updateCampaign, 
    deleteCampaign, 
    currentMember,
    kpis 
  } = useMarketingStore();

  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [memberFilter, setMemberFilter] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false);

  // New Campaign Form State
  const [newCamp, setNewCamp] = useState({
    name: '',
    platform: 'Google Ads' as 'Google Ads' | 'LinkedIn' | 'Mailchimp',
    type: 'Search & Leads',
    spendSAR: 1000,
    impressions: 15000,
    clicks: 600,
    conversions: 35,
    callsClicks: 10,
    whatsappClicks: 20,
    crmDeals: 1,
    targetAudience: 'الموارد البشرية والمدراء التنفيذيين',
    status: 'نشط' as CampaignData['status'],
    assignedTo: currentMember.id as TeamMemberId
  });

  // Edit Campaign Form State
  const [editFormData, setEditFormData] = useState<Partial<CampaignData>>({});

  const filteredCampaigns = campaigns.filter(c => {
    if (platformFilter !== 'all' && c.platform !== platformFilter) return false;
    if (memberFilter !== 'all' && c.assignedTo !== memberFilter) return false;
    return true;
  });

  const handleStartEdit = (camp: CampaignData) => {
    setEditingId(camp.id);
    setEditFormData({ ...camp });
  };

  const handleSaveEdit = (id: string) => {
    updateCampaign(id, editFormData);
    setEditingId(null);
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCamp.name.trim()) return;

    addCampaign({
      campaignName: newCamp.name,
      name: newCamp.name,
      platform: newCamp.platform,
      type: newCamp.type,
      spentSAR: Number(newCamp.spendSAR),
      spendSAR: Number(newCamp.spendSAR),
      impressions: Number(newCamp.impressions),
      clicks: Number(newCamp.clicks),
      ctr: newCamp.impressions > 0 ? Number(((newCamp.clicks / newCamp.impressions) * 100).toFixed(2)) : 0,
      conversions: Number(newCamp.conversions),
      costPerConversionSAR: newCamp.conversions > 0 ? Number((newCamp.spendSAR / newCamp.conversions).toFixed(1)) : 0,
      cpaSAR: newCamp.conversions > 0 ? Number((newCamp.spendSAR / newCamp.conversions).toFixed(1)) : 0,
      callsClicks: Number(newCamp.callsClicks),
      whatsappClicks: Number(newCamp.whatsappClicks),
      crmDeals: Number(newCamp.crmDeals),
      targetAudience: newCamp.targetAudience,
      status: newCamp.status,
      assignedTo: newCamp.assignedTo
    });

    setIsAddFormOpen(false);
    setNewCamp({
      name: '',
      platform: 'Google Ads',
      type: 'Search & Leads',
      spendSAR: 1000,
      impressions: 15000,
      clicks: 600,
      conversions: 35,
      callsClicks: 10,
      whatsappClicks: 20,
      crmDeals: 1,
      targetAudience: 'الموارد البشرية والمدراء التنفيذيين',
      status: 'نشط',
      assignedTo: currentMember.id
    });
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#fdf2f2] text-[#d1232a] px-3 py-1 rounded-full text-xs font-bold border border-[#fbd5d7] mb-2">
            <Megaphone className="w-3.5 h-3.5" />
            <span>نظام إدارة الحملات الإعلانية المباشر (Native Live Ads)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#231f20]">
            إدخال وتحديث بيانات الحملات والنشرات الإعلانية
          </h1>
          <p className="text-xs sm:text-sm text-[#828282] max-w-2xl mt-1 leading-relaxed">
            واجهة مستقلة لإدارة حملات Google Ads و LinkedIn Ads و Mailchimp مع احتساب فوري وتلقائي لمعدلات النقر (CTR)، وتكلفة التحويل (CPA)، والربط الآلي المباشر باللوحة التنفيذية.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAddFormOpen(!isAddFormOpen)}
            className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
          >
            {isAddFormOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isAddFormOpen ? 'إلغاء الإضافة' : 'إضافة حملة جديدة'}</span>
          </button>
        </div>
      </div>

      {/* Mini Live Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-[#828282] block font-bold">إجمالي الإنفاق الحي</span>
          <span className="text-xl font-black text-[#d1232a] block mt-1">
            {kpis.totalSpend.toLocaleString()} <span className="text-xs font-normal">ر.س</span>
          </span>
          <span className="text-[10px] text-[#208c6b] font-semibold">محدث لحظياً في السيرفر</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-[#828282] block font-bold">التحويلات الكلية</span>
          <span className="text-xl font-black text-[#231f20] block mt-1">
            {kpis.totalConversions} <span className="text-xs font-normal text-slate-500">تحويل</span>
          </span>
          <span className="text-[10px] text-[#828282]">واتساب ومكالمات واستمارات</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-[#828282] block font-bold">متوسط تكلفة التحويل (CPA)</span>
          <span className="text-xl font-black text-[#24419f] block mt-1">
            {kpis.averageCpa} <span className="text-xs font-normal">ر.س</span>
          </span>
          <span className="text-[10px] text-[#208c6b] font-semibold">محسوب تلقائياً</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-[#828282] block font-bold">متوسط النقر (CTR)</span>
          <span className="text-xl font-black text-[#208c6b] block mt-1">
            {kpis.averageCtr}%
          </span>
          <span className="text-[10px] text-slate-500">{kpis.totalClicks.toLocaleString()} نقرة إجمالية</span>
        </div>
      </div>

      {/* Add Campaign Collapsible Form */}
      {isAddFormOpen && (
        <form 
          onSubmit={handleCreateCampaign}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#d1232a]/30 shadow-md space-y-6 animate-in slide-in-from-top-4"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-black text-[#231f20] text-base flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#d1232a]" />
              <span>إدراج حملة إعلانية جديدة في قاعدة البيانات</span>
            </h3>
            <span className="text-xs text-slate-500">
              المسجل الحالي: <strong className="text-[#d1232a]">{currentMember.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Name */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-[#231f20]">اسم الإعلان / الخدمة *</label>
              <input
                type="text"
                required
                placeholder="مثال: حلول التوطين والإفصاح التدريبي"
                value={newCamp.name}
                onChange={(e) => setNewCamp({ ...newCamp, name: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-[#f8f9fa]"
              />
            </div>

            {/* Platform */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">المنصة الإعلانية *</label>
              <select
                value={newCamp.platform}
                onChange={(e) => setNewCamp({ ...newCamp, platform: e.target.value as any })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white cursor-pointer font-bold"
              >
                <option value="Google Ads">Google Ads</option>
                <option value="LinkedIn">LinkedIn Ads</option>
                <option value="Mailchimp">Mailchimp (النشرة البريدية)</option>
              </select>
            </div>

            {/* Assigned To Member (Mandatory Governance) */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">المسؤول عن البيانات (Assigned To) *</label>
              <select
                value={newCamp.assignedTo}
                onChange={(e) => setNewCamp({ ...newCamp, assignedTo: e.target.value as TeamMemberId })}
                className="w-full text-xs p-2.5 rounded-xl border-2 border-[#d1232a]/40 focus:outline-none focus:border-[#d1232a] bg-white cursor-pointer font-bold text-[#231f20]"
              >
                {TEAM_MEMBERS.map(m => (
                  <option key={m.id} value={m.id}>
                    {m.name} — {m.role}
                  </option>
                ))}
              </select>
            </div>

            {/* Spend SAR */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">الإنفاق (ر.س) *</label>
              <input
                type="number"
                min="0"
                required
                value={newCamp.spendSAR}
                onChange={(e) => setNewCamp({ ...newCamp, spendSAR: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono font-bold"
              />
            </div>

            {/* Impressions */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">مرات الظهور (Impressions)</label>
              <input
                type="number"
                min="0"
                value={newCamp.impressions}
                onChange={(e) => setNewCamp({ ...newCamp, impressions: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono"
              />
            </div>

            {/* Clicks */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">النقرات (Clicks)</label>
              <input
                type="number"
                min="0"
                value={newCamp.clicks}
                onChange={(e) => setNewCamp({ ...newCamp, clicks: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono"
              />
            </div>

            {/* Conversions */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">التحويلات المباشرة</label>
              <input
                type="number"
                min="0"
                value={newCamp.conversions}
                onChange={(e) => setNewCamp({ ...newCamp, conversions: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono font-bold text-[#208c6b]"
              />
            </div>

            {/* Calls Clicks */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">نقرات الاتصال</label>
              <input
                type="number"
                min="0"
                value={newCamp.callsClicks}
                onChange={(e) => setNewCamp({ ...newCamp, callsClicks: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono"
              />
            </div>

            {/* WhatsApp Clicks */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">نقرات الواتساب</label>
              <input
                type="number"
                min="0"
                value={newCamp.whatsappClicks}
                onChange={(e) => setNewCamp({ ...newCamp, whatsappClicks: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono"
              />
            </div>

            {/* CRM Deals */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">صفقات CRM المكتسبة</label>
              <input
                type="number"
                min="0"
                value={newCamp.crmDeals}
                onChange={(e) => setNewCamp({ ...newCamp, crmDeals: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white font-mono"
              />
            </div>

            {/* Status */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#231f20]">حالة الاعتماد</label>
              <select
                value={newCamp.status}
                onChange={(e) => setNewCamp({ ...newCamp, status: e.target.value as any })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d1232a] bg-white cursor-pointer font-bold"
              >
                <option value="نشط">نشط</option>
                <option value="تم الاعتماد">تم الاعتماد</option>
                <option value="قيد المراجعة">قيد المراجعة</option>
                <option value="مكتمل">مكتمل</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsAddFormOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-[#d1232a] hover:bg-[#b01c22] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>حفظ وتحديث اللوحة التنفيذية فورياً</span>
            </button>
          </div>
        </form>
      )}

      {/* Filter and Table Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
        
        {/* Table Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs">
            <Filter className="w-4 h-4 text-[#828282]" />
            <span className="font-bold text-[#231f20]">تصفية الحملات:</span>
            
            {/* Platform filter pills */}
            <div className="flex items-center gap-1.5 mr-2">
              {['all', 'Google Ads', 'LinkedIn', 'Mailchimp'].map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setPlatformFilter(plat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    platformFilter === plat
                      ? 'bg-[#231f20] text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {plat === 'all' ? 'جميع المنصات' : plat}
                </button>
              ))}
            </div>
          </div>

          {/* Member assignment filter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#828282]">المسؤول:</span>
            <select
              value={memberFilter}
              onChange={(e) => setMemberFilter(e.target.value)}
              className="text-xs p-1.5 rounded-lg border border-slate-200 bg-white font-semibold cursor-pointer"
            >
              <option value="all">كافة الأعضاء الأربعة</option>
              {TEAM_MEMBERS.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Interactive Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-[#f8f9fa] text-[#231f20] font-bold border-b border-slate-200">
                <th className="py-3 px-3.5 whitespace-nowrap">الإعلان / الخدمة</th>
                <th className="py-3 px-3 whitespace-nowrap">المنصة</th>
                <th className="py-3 px-3 whitespace-nowrap">المسؤول (Assigned)</th>
                <th className="py-3 px-3 whitespace-nowrap">الإنفاق (SAR)</th>
                <th className="py-3 px-3 whitespace-nowrap">النقرات</th>
                <th className="py-3 px-3 whitespace-nowrap">معدل CTR</th>
                <th className="py-3 px-3 whitespace-nowrap">التحويلات</th>
                <th className="py-3 px-3 whitespace-nowrap">تكلفة التحويل</th>
                <th className="py-3 px-3 whitespace-nowrap">الحالة</th>
                <th className="py-3 px-3 whitespace-nowrap text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-[#231f20]">
              {filteredCampaigns.map((camp) => {
                const isEditing = editingId === camp.id;
                const assignedMember = TEAM_MEMBERS.find(m => m.id === camp.assignedTo) || TEAM_MEMBERS[1];

                if (isEditing) {
                  return (
                    <tr key={camp.id} className="bg-[#fdf2f2]/60">
                      <td className="p-2">
                        <input
                          type="text"
                          value={editFormData.name || ''}
                          onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                          className="w-full p-1.5 text-xs rounded border border-slate-300 font-bold bg-white"
                        />
                      </td>
                      <td className="p-2">
                        <span className="font-bold text-[11px]">{camp.platform}</span>
                      </td>
                      <td className="p-2">
                        <select
                          value={editFormData.assignedTo || camp.assignedTo}
                          onChange={(e) => setEditFormData({ ...editFormData, assignedTo: e.target.value as TeamMemberId })}
                          className="p-1 text-xs rounded border border-slate-300 bg-white font-bold"
                        >
                          {TEAM_MEMBERS.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={editFormData.spendSAR || 0}
                          onChange={(e) => setEditFormData({ ...editFormData, spendSAR: Number(e.target.value) })}
                          className="w-20 p-1.5 text-xs rounded border border-slate-300 font-mono font-bold bg-white"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={editFormData.clicks || 0}
                          onChange={(e) => setEditFormData({ ...editFormData, clicks: Number(e.target.value) })}
                          className="w-20 p-1.5 text-xs rounded border border-slate-300 font-mono bg-white"
                        />
                      </td>
                      <td className="p-2 font-bold text-[#208c6b]">
                        {camp.ctr}%
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={editFormData.conversions || 0}
                          onChange={(e) => setEditFormData({ ...editFormData, conversions: Number(e.target.value) })}
                          className="w-16 p-1.5 text-xs rounded border border-slate-300 font-mono font-bold bg-white text-[#208c6b]"
                        />
                      </td>
                      <td className="p-2 font-bold text-[#d1232a]">
                        {camp.costPerConversionSAR} ر.س
                      </td>
                      <td className="p-2">
                        <select
                          value={editFormData.status || camp.status}
                          onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value as any })}
                          className="p-1 text-xs rounded border border-slate-300 bg-white"
                        >
                          <option value="نشط">نشط</option>
                          <option value="تم الاعتماد">تم الاعتماد</option>
                          <option value="قيد المراجعة">قيد المراجعة</option>
                          <option value="مكتمل">مكتمل</option>
                        </select>
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleSaveEdit(camp.id)}
                            className="p-1.5 rounded-lg bg-[#208c6b] text-white hover:bg-[#186a51] transition cursor-pointer"
                            title="حفظ"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="p-1.5 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition cursor-pointer"
                            title="إلغاء"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={camp.id} className="hover:bg-[#fdf2f2]/40 transition">
                    <td className="py-3 px-3.5 font-bold text-[#231f20] whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#d1232a]"></span>
                        <span>{camp.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        camp.platform === 'Google Ads' 
                          ? 'bg-[#24419f]/10 text-[#24419f] border border-[#24419f]/20' 
                          : camp.platform === 'LinkedIn'
                          ? 'bg-[#5e0c10]/10 text-[#5e0c10] border border-[#5e0c10]/20'
                          : 'bg-[#208c6b]/10 text-[#208c6b] border border-[#208c6b]/20'
                      }`}>
                        {camp.platform}
                      </span>
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: assignedMember.avatarColor }}
                        />
                        <span className="font-semibold text-xs text-[#231f20]">{assignedMember.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-semibold whitespace-nowrap font-mono">{(camp.spendSAR ?? camp.spentSAR ?? 0).toLocaleString()} ر.س</td>
                    <td className="py-3 px-3 whitespace-nowrap font-mono">{(camp.clicks ?? 0).toLocaleString()}</td>
                    <td className="py-3 px-3 whitespace-nowrap font-bold text-[#208c6b] font-mono">{camp.ctr}%</td>
                    <td className="py-3 px-3 whitespace-nowrap font-bold text-[#231f20] font-mono">{camp.conversions}</td>
                    <td className="py-3 px-3 whitespace-nowrap font-semibold text-[#d1232a] font-mono">{camp.costPerConversionSAR} ر.س</td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        camp.status === 'تم الاعتماد' ? 'bg-[#208c6b]/10 text-[#208c6b]' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {camp.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(camp)}
                          className="p-1 rounded text-slate-400 hover:text-[#231f20] transition cursor-pointer"
                          title="تعديل سريع"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteCampaign(camp.id)}
                          className="p-1 rounded text-slate-400 hover:text-red-600 transition cursor-pointer"
                          title="حذف الحملة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Audit footer indicator */}
        <div className="pt-2 flex items-center justify-between text-xs text-[#828282]">
          <span>إجمالي الحملات المسجلة: <strong className="text-[#231f20]">{filteredCampaigns.length} حملة</strong></span>
          <span>الحوكمة: تسجيل فوري لاسم العضو ووقت التعديل في سجل الـ Audit Trail</span>
        </div>
      </div>
    </div>
  );
};
