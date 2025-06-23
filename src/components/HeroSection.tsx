
import React from 'react';
import { ShoppingCart, Clock, Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onPurchase: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPurchase }) => {
  return (
    <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white py-20 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-animated-gradient opacity-5 animate-gradient-x"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-red rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-brand-red/50 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-float opacity-70" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Urgency Badge with neon effect */}
            <div className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-brand-red animate-pulse" />
              <span className="text-sm font-semibold text-brand-red">PRÉ-VENDA COM 33% DE DESCONTO</span>
              <Sparkles className="w-4 h-4 text-brand-red animate-pulse" />
            </div>

            {/* Main Title with neon effect */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="neon-text text-8xl lg:text-9xl block">100%</span>
                <span className="text-white text-shadow-lg">VENDIDO</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
                O método definitivo para vender 100% dos seus lançamentos imobiliários e 
                <span className="gradient-text font-bold"> faturar milhões</span>
              </p>
            </div>

            {/* Price Section with glass effect */}
            <div className="glass-card neon-border rounded-2xl p-6 space-y-4 hover-glow">
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-400 line-through">De R$ 149,99</span>
                <span className="urgency-badge">33% OFF</span>
              </div>
              <div className="text-4xl font-black neon-text">
                R$ 99,99
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-5 h-5 animate-pulse" />
                <span className="font-semibold">FRETE GRÁTIS para todo o Brasil</span>
              </div>
            </div>

            {/* CTA Button with advanced neon effect */}
            <button 
              onClick={onPurchase}
              className="btn-neon w-full lg:w-auto group relative overflow-hidden"
            >
              <div className="shimmer absolute inset-0"></div>
              <div className="flex items-center justify-center gap-3 relative z-10">
                <ShoppingCart className="w-6 h-6 animate-pulse" />
                <span>QUERO GARANTIR MEU EXEMPLAR COM DESCONTO</span>
              </div>
            </button>

            {/* Trust indicators with hover effects */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover-glow p-2 rounded">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 hover-glow p-2 rounded">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Entrega em até 7 dias úteis</span>
              </div>
            </div>
          </div>

          {/* Right Column - Book Image with enhanced effects */}
          <div className="relative">
            <div className="relative glass-card rounded-3xl p-8 hover-glow">
              {/* Book mockup with neon glow */}
              <div className="aspect-[3/4] bg-gradient-to-br from-brand-red to-red-700 rounded-2xl shadow-neon-strong flex items-center justify-center relative overflow-hidden animate-float">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-neon-glow"></div>
                <div className="relative z-10 text-center text-white p-8">
                  <div className="text-4xl font-black mb-4 neon-text">100%</div>
                  <div className="text-2xl font-bold mb-2">VENDIDO</div>
                  <div className="text-sm opacity-80">THIAGO COSAC</div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-white/60">
                  [Adicione aqui o mockup do livro]
                </div>
              </div>
            </div>
            
            {/* Floating elements with glow */}
            <div className="absolute -top-4 -right-4 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-neon">
              LANÇAMENTO
            </div>
            
            {/* Additional glow effects */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand-red/30 rounded-full animate-pulse blur-sm"></div>
            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-red-400/40 rounded-full animate-float blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
