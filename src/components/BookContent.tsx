
import React from 'react';
import { BookOpen, TrendingUp, Users, DollarSign, Target, Lightbulb } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              className="bg-gray-50 hover:bg-gray-100 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-200"
            >
              <div className="bg-brand-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <chapter.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">
                {chapter.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {chapter.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-black to-gray-900 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            + de 300 páginas de conteúdo exclusivo
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Baseado em mais de R$ 1,3 bilhão em VGV realizado e dezenas de projetos vendidos a 100%
          </p>
        </div>
      </div>
    </section>
  );
};
