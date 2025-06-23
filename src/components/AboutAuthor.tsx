
import React from 'react';
import { Award, TrendingUp, Users, Building2 } from 'lucide-react';

export const AboutAuthor: React.FC = () => {
  const achievements = [
    {
      icon: TrendingUp,
      value: "R$ 1,3 bilhão",
      label: "em VGV realizado"
    },
    {
      icon: Building2,
      value: "50+",
      label: "projetos lançados"
    },
    {
      icon: Users,
      value: "1000+",
      label: "profissionais treinados"
    },
    {
      icon: Award,
      value: "15+",
      label: "anos de mercado"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Author image and info */}
          <div className="text-center lg:text-left">
            {/* Author photo placeholder */}
            <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-brand-red to-red-600 rounded-3xl shadow-2xl mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-white text-center">
                <div className="text-2xl font-bold mb-2">THIAGO</div>
                <div className="text-2xl font-bold">COSAC</div>
                <div className="text-sm opacity-80 mt-4">[Foto do autor]</div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-brand-black mb-6">
              Conheça
              <span className="gradient-text"> Thiago Cosac</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Especialista em lançamentos imobiliários com mais de 15 anos de experiência 
              no mercado, responsável por mais de R$ 1,3 bilhão em VGV realizado.
            </p>
          </div>

          {/* Right - About content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                Trajetória Profissional
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>CEO e fundador</strong> de uma das principais consultorias de 
                  vendas imobiliárias do Brasil, Thiago transformou a forma como 
                  incorporadoras abordam o mercado.
                </p>
                <p>
                  Pioneiro em estratégias de <strong>vendas na planta</strong>, desenvolveu 
                  metodologias próprias que garantem a comercialização total de 
                  empreendimentos em tempo recorde.
                </p>
                <p>
                  <strong>Palestrante requisitado</strong> em eventos do setor imobiliário, 
                  já treinou mais de 1.000 profissionais em técnicas avançadas de vendas.
                </p>
              </div>
            </div>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-brand-red/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="text-2xl font-bold text-brand-black mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-red to-red-600 p-8 rounded-2xl text-white text-center">
              <h4 className="text-xl font-bold mb-2">
                "Vender 100% não é sorte, é estratégia"
              </h4>
              <p className="opacity-90">
                - Thiago Cosac
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
