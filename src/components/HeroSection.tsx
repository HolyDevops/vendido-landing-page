
import React from 'react';
import { Download, CheckCircle, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Book Author */}
            <div className="inline-flex items-center gap-2 text-gray-600">
              <Star className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-medium">por Thiago Cosac</span>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight text-brand-black">
                Receba agora o{' '}
                <span className="gradient-text">Checklist Oficial</span>
                <br />
                do Livro 100% Vendido
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
                Um passo a passo prático com as perguntas que vão transformar o jeito 
                que você lança seus empreendimentos imobiliários.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Metodologia testada em mais de 50 empreendimentos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Checklist prático para aplicar imediatamente
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Material exclusivo baseado no livro
                </span>
              </div>
            </div>

            {/* Download CTA */}
            <div className="bg-brand-red/10 border border-brand-red/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-6 h-6 text-brand-red" />
                <span className="text-lg font-bold text-brand-red">
                  MATERIAL GRATUITO
                </span>
              </div>
              <p className="text-gray-700">
                Baixe agora o checklist oficial e tenha em mãos as perguntas 
                essenciais para o sucesso dos seus lançamentos.
              </p>
            </div>
          </div>

          {/* Right Column - Book Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-brand-red/10 to-transparent rounded-3xl p-8">
              {/* Real book mockup image */}
              <div className="aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/images/book-mockup.jpg" 
                  alt="Livro 100% Vendido - Thiago Cosac"
                  className="w-full h-full object-contain object-center p-4"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              GRÁTIS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
