
import React from 'react';
import { BookOpen, TrendingUp, Users, DollarSign, Target, Lightbulb, Sparkles } from 'lucide-react';

export const BookContent: React.FC = () => {
  const chapters = [
    {
      icon: Target,
      title: "Estratégias de Posicionamento",
      description: "Como posicionar seu lançamento para atrair o público certo desde o primeiro dia"
    },
    {
      icon: TrendingUp,
      title: "Técnicas de Conversão",
      description: "Métodos comprovados para converter leads em vendas efetivas"
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Como montar e liderar uma equipe de vendas de alta performance"
    },
    {
      icon: DollarSign,
      title: "Precificação Estratégica",
      description: "Definindo preços que maximizam lucro e atraem compradores"
    },
    {
      icon: Lightbulb,
      title: "Inovação em Vendas",
      description: "Tecnologias e ferramentas que revolucionam o processo de vendas"
    },
    {
      icon: BookOpen,
      title: "Cases de Sucesso",
      description: "Análise detalhada de projetos que venderam 100% em tempo recorde"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-red animate-pulse" />
            <span className="text-brand-red font-semibold">CONTEÚDO EXCLUSIVO</span>
            <Sparkles className="w-6 h-6 text-brand-red animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-brand-black mb-6">
            O que você vai aprender no
            <span className="gradient-text"> 100% Vendido</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um guia completo com estratégias, técnicas e cases reais que transformaram 
            empreendimentos em sucessos de vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <div 
              key={index}
              className="group bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border border-gray-200 hover:border-brand-red/30 hover-glow relative overflow-hidden"
            >
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-brand-red/10 group-hover:bg-brand-red/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-neon">
                  <chapter.icon className="w-8 h-8 text-brand-red group-hover:animate-pulse transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4 group-hover:text-brand-red transition-colors duration-300">
                  {chapter.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-black to-gray-900 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden hover-glow shadow-neon">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-animated-gradient opacity-10 animate-gradient-x"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-brand-red animate-pulse" />
              <h3 className="text-3xl font-bold">
                + de 300 páginas de conteúdo exclusivo
              </h3>
              <BookOpen className="w-8 h-8 text-brand-red animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Baseado em mais de <span className="neon-text font-bold">R$ 1,3 bilhão</span> em VGV realizado e 
              <span className="gradient-text font-bold"> dezenas de projetos vendidos a 100%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
