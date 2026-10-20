import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { SheetBlueprintGuide } from './components/SheetBlueprintGuide';
import { FormulasHub } from './components/FormulasHub';
import { SheetDataSimulator } from './components/SheetDataSimulator';
import { AeoAiAuditor } from './components/AeoAiAuditor';
import { TechApprovalsTracker } from './components/TechApprovalsTracker';
import { PresentationMode } from './components/PresentationMode';
import { ExportModal } from './components/ExportModal';
import { ReportMonth } from './types/dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedMonth, setSelectedMonth] = useState<ReportMonth>('september_2026');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900 selection:bg-[#d1232a] selection:text-white flex flex-col">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'dashboard' && (
          <ExecutiveDashboard
            selectedMonth={selectedMonth}
            onNavigateTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {activeTab === 'blueprint' && <SheetBlueprintGuide />}

        {activeTab === 'simulator' && <SheetDataSimulator />}

        {activeTab === 'formulas' && <FormulasHub />}

        {activeTab === 'aeo_audit' && <AeoAiAuditor />}

        {activeTab === 'tech_tracker' && <TechApprovalsTracker />}

        {activeTab === 'presentation' && <PresentationMode />}
      </main>

      {/* Export / Google Sheets Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Corporate Footer */}
      <footer className="bg-white border-t border-[#f2f2f2] py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828282]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d1232a]"></span>
            <span className="font-bold text-[#231f20]">شركة صلة لتمكين العمل لتقنية المعلومات</span>
          </div>

          <div className="flex items-center gap-4 text-[#828282]">
            <span>محدث وفق بيانات تقرير سبتمبر 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
