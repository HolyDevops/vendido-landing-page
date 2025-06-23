
import React from 'react';
import { Gift, FileText, Video, Download, Star } from 'lucide-react';

export const WhatsIncluded: React.FC = () => {
  const includes = [
    {
      icon: Gift,
      title: "Livro Físico Premium",
      description: "Edição limitada com capa dura e papel de alta qualidade, mais de 300 páginas",
      highlight: true
    },
    {
      icon: FileText,
      title: "E-book Digital",
      description: "Versão digital para leitura em qualquer dispositivo, disponível imediatamente",
      highlight: false
    },
    {
      icon: Video,
      title: "Masterclass Exclusiva",
      description: "Aula ao vivo com Thiago Cosac sobre os principais insights do livro",
      highlight: true
    },
    {
      icon: Download,
      title: "Templates e Ferramentas",
      description: "Kit completo com planilhas, checklists e templates prontos para usar",
      highlight: false
    },
    {
      icon: Star,
      title: "Grupo VIP no Telegram",
      description: "Acesso exclusivo ao grupo de discussão com outros profissionais",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-black mb-6">
            O que está incluso na
            <span className="gradient-text"> pré-venda?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Muito mais que um livro: um ecossistema completo para sua evolução profissional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - What's included list */}
          <div className="space-y-6">
            {includes.map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  item.highlight 
                    ? 'border-brand-red bg-brand-red/5 shadow-lg' 
                    : 'border-gray-200 bg-gray-50 hover:border-brand-red/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.highlight ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-black mb-2 flex items-center gap-2">
                      {item.title}
                      {item.highlight && <Star className="w-5 h-5 text-brand-red fill-current" />}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Value proposition */}
          <div className="bg-gradient-to-br from-brand-black to-gray-900 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Valor total do pacote:
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Livro físico premium</span>
                <span>R$ 149,99</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>E-book digital</span>
                <span>R$ 49,99</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Masterclass exclusiva</span>
                <span>R$ 297,00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Templates e ferramentas</span>
                <span>R$ 197,00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Grupo VIP Telegram</span>
                <span>R$ 97,00</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold pt-4">
                <span>Valor total:</span>
                <span>R$ 790,98</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg mb-2">Você paga apenas:</div>
              <div className="text-5xl font-black text-brand-red mb-2">R$ 99,99</div>
              <div className="text-green-400 font-semibold">Economia de R$ 690,99</div>
            </div>
          </div>
        </div>

        {/* Urgency note */}
        <div className="bg-brand-red/10 border-2 border-brand-red rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold text-brand-black mb-4">
            ⚡ ATENÇÃO: Bônus por tempo limitado!
          </h4>
          <p className="text-lg text-gray-700">
            Os bônus digitais (masterclass, templates e grupo VIP) só estão disponíveis 
            durante a pré-venda. Após o lançamento, você receberá apenas o livro físico e o e-book.
          </p>
        </div>
      </div>
    </section>
  );
};
