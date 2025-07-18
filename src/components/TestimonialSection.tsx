
import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-red to-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl lg:text-3xl font-bold leading-relaxed mb-6">
            "Quem não tem método, depende da sorte. Esse checklist mostra como sair da intuição e entrar no controle."
          </blockquote>
          <cite className="text-lg opacity-90 font-medium">
            — Thiago Cosac
          </cite>
        </div>
      </div>
    </section>
  );
};
