
import React from 'react';
import { ShoppingCart, Clock, Shield } from 'lucide-react';

interface HeroSectionProps {
  onPurchase: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPurchase }) => {
  return (
    <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-red">PRÉ-VENDA COM 33% DE DESCONTO</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="gradient-text">100%</span>
                <br />
                <span className="text-white">VENDIDO</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
                O método definitivo para vender 100% dos seus lançamentos imobiliários e faturar milhões
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-400 line-through">De R$ 149,99</span>
                <span className="urgency-badge">33% OFF</span>
              </div>
              <div className="text-4xl font-black text-brand-red">
                R$ 99,99
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">FRETE GRÁTIS para todo o Brasil</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={onPurchase}
              className="btn-primary-large w-full lg:w-auto group relative overflow-hidden"
            >
              <div className="flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                <span>QUERO GARANTIR MEU EXEMPLAR COM DESCONTO</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Entrega em até 7 dias úteis</span>
              </div>
            </div>
          </div>

          {/* Right Column - Book Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-brand-red/20 to-transparent rounded-3xl p-8">
              {/* Real book mockup image */}
              <div className="aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/images/book-mockup.jpg" 
                  alt="Livro 100% Vendido - Thiago Cosac"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              LANÇAMENTO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
