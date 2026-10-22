import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { CampaignsEditor } from './components/CampaignsEditor';
import { AeoAiAuditor } from './components/AeoAiAuditor';
import { TechApprovalsTracker } from './components/TechApprovalsTracker';
import { SheetDataSimulator } from './components/SheetDataSimulator';
import { AuditTrailDrawer } from './components/AuditTrailDrawer';
import { PresentationMode } from './components/PresentationMode';
import { AuthProfileModal } from './components/AuthProfileModal';
import { ExecutivePdfReportModal } from './components/ExecutivePdfReportModal';
import { MarketingProvider } from './context/MarketingStore';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  return (
    <MarketingProvider>
      <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900 selection:bg-[#d1232a] selection:text-white flex flex-col">
        {/* Top Header Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          {activeTab === 'dashboard' && (
            <ExecutiveDashboard
              selectedMonth="september_2026"
              onNavigateTab={(tabId: string) => setActiveTab(tabId)}
            />
          )}

          {activeTab === 'campaigns_editor' && (
            <CampaignsEditor
              onNavigateTab={(tabId: string) => setActiveTab(tabId)}
            />
          )}

          {activeTab === 'aeo_audit' && <AeoAiAuditor />}

          {activeTab === 'tech_tracker' && <TechApprovalsTracker />}

          {activeTab === 'simulator' && <SheetDataSimulator />}

          {activeTab === 'audit_trail' && <AuditTrailDrawer />}

          {activeTab === 'presentation' && <PresentationMode />}
        </main>

        {/* Auth / Team Profile Switcher Modal */}
        <AuthProfileModal onNavigateTab={(tabId) => setActiveTab(tabId)} />

        {/* Executive PDF Monthly Report Printable Modal */}
        <ExecutivePdfReportModal />

        {/* Corporate Footer */}
        <footer className="bg-white border-t border-[#f2f2f2] py-6 mt-auto print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828282]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d1232a]"></span>
              <span className="font-bold text-[#231f20]">شركة صلة لتمكين العمل لتقنية المعلومات</span>
            </div>

            <div className="flex items-center gap-4 text-[#828282]">
              <span>نظام موحد ومستقل — كافة البيانات محدثة في الوقت الفعلي</span>
            </div>
          </div>
        </footer>
      </div>
    </MarketingProvider>
  );
}
