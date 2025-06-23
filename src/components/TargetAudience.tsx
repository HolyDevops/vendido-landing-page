
import React from 'react';
import { Building, Users, TrendingUp, Briefcase } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Building,
      title: "Incorporadoras",
      description: "Empresas que querem maximizar as vendas de seus lançamentos e reduzir o tempo de comercialização"
    },
    {
      icon: Users,
      title: "Corretores de Imóveis",
      description: "Profissionais que desejam aumentar suas vendas e se destacar no mercado imobiliário"
    },
    {
      icon: TrendingUp,
      title: "Gestores Comerciais",
      description: "Líderes que buscam implementar estratégias eficazes de vendas em suas equipes"
    },
    {
      icon: Briefcase,
      title: "Empreendedores",
      description: "Investidores que querem entender o mercado imobiliário e otimizar seus investimentos"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-black mb-6">
            Para quem é o
            <span className="gradient-text"> 100% Vendido?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Este livro foi desenvolvido especialmente para profissionais que querem 
            revolucionar seus resultados no mercado imobiliário
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-start gap-6">
                <div className="bg-brand-red/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-8 h-8 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results highlight */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-black mb-6">
            Resultados Comprovados
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">R$ 1,3bi</div>
              <div className="text-lg opacity-90">em VGV realizado</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-lg opacity-90">de vendas em múltiplos projetos</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">15+</div>
              <div className="text-lg opacity-90">anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
