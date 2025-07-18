
import React from 'react';
import { Building2, TrendingUp, Users } from 'lucide-react';

export const AboutAuthor: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "empreendimentos lançados"
    },
    {
      icon: TrendingUp,
      value: "R$ 1,3bi",
      label: "em VGV realizado"
    },
    {
      icon: Users,
      value: "+VGV",
      label: "fundador da consultoria"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Author image and info */}
          <div className="text-center lg:text-left">
            {/* Real author photo */}
            <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl shadow-2xl mb-8 overflow-hidden">
              <img 
                src="/images/thiago-cosac.png" 
                alt="Thiago Cosac"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-brand-black mb-4">
              Sobre
              <span className="gradient-text"> Thiago Cosac</span>
            </h2>
          </div>

          {/* Right - About content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Thiago Cosac</strong> é especialista em lançamentos imobiliários 
                e fundador da <strong>+VGV</strong>, com mais de 50 empreendimentos 
                lançados em todo o Brasil.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                O livro <strong>100% Vendido</strong> reúne seu método completo, 
                da escolha do terreno à última unidade entregue.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-brand-red/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="text-xl font-bold text-brand-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
