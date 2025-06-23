
import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Gift } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-brand-red" />
            <span className="font-bold text-brand-red">OFERTA POR TEMPO LIMITADO</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">ÚLTIMAS HORAS</span>
            <br />
            para garantir os bônus
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Os bônus exclusivos da pré-venda têm vagas limitadas e em breve não estarão mais disponíveis
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Clock className="w-12 h-12 text-brand-red mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Tempo restante para os bônus:</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-red rounded-2xl p-6 mb-2">
                  <div className="text-4xl font-black">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Limited bonuses */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Gift,
              title: "Masterclass Ao Vivo",
              subtitle: "Apenas 500 vagas",
              description: "Aula exclusiva com Thiago Cosac para os primeiros compradores"
            },
            {
              icon: Gift,
              title: "Grupo VIP Telegram",
              subtitle: "Limitado a 200 pessoas",
              description: "Networking exclusivo com profissionais de alto nível"
            },
            {
              icon: Gift,
              title: "Templates Exclusivos",
              subtitle: "Edição limitada",
              description: "Kit completo de ferramentas desenvolvidas pelo autor"
            }
          ].map((bonus, index) => (
            <div key={index} className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="bg-brand-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <bonus.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
              <div className="text-brand-red font-semibold mb-3">{bonus.subtitle}</div>
              <p className="text-gray-300 text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Final urgency message */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ⚠️ AVISO IMPORTANTE
          </h3>
          <p className="text-xl mb-6">
            Após o lançamento oficial, o livro custará R$ 149,99 e os bônus 
            NÃO estarão mais disponíveis em nenhuma condição.
          </p>
          <p className="text-lg opacity-90">
            Esta é sua única chance de adquirir o pacote completo com 33% de desconto.
          </p>
        </div>
      </div>
    </section>
  );
};
