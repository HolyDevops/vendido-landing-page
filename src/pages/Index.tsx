
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { AboutAuthor } from '../components/AboutAuthor';
import { TestimonialSection } from '../components/TestimonialSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LeadCaptureForm />
      <AboutAuthor />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
