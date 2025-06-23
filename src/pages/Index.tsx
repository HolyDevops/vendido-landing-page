
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BookContent } from '../components/BookContent';
import { TargetAudience } from '../components/TargetAudience';
import { WhatsIncluded } from '../components/WhatsIncluded';
import { AboutAuthor } from '../components/AboutAuthor';
import { UrgencySection } from '../components/UrgencySection';
import { FinalCTA } from '../components/FinalCTA';

const Index = () => {
  const handlePurchase = () => {
    // Add purchase logic here
    console.log('Redirecting to purchase...');
  };

  return (
    <div className="min-h-screen bg-brand-off-white">
      <HeroSection onPurchase={handlePurchase} />
      <BookContent />
      <TargetAudience />
      <WhatsIncluded />
      <AboutAuthor />
      <UrgencySection />
      <FinalCTA onPurchase={handlePurchase} />
    </div>
  );
};

export default Index;
