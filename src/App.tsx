import React from 'react';
import FirstViewSection from './components/FirstViewSection';
import PainPointsSection from './components/PainPointsSection';
import ServiceOverviewSection from './components/ServiceOverviewSection';
import UniqueSellingPointsSection from './components/UniqueSellingPointsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <FirstViewSection />
        <PainPointsSection />
        <ServiceOverviewSection />
        <UniqueSellingPointsSection />
        <CaseStudiesSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;