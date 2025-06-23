
import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Gift, Zap } from 'lucide-react';

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
      {/* Enhanced background with mesh and animated gradients */}
      <div className="absolute inset-0 mesh-bg"></div>
      <div className="absolute inset-0 bg-animated-gradient opacity-10 animate-gradient-x"></div>
      
      {/* Floating neon particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-brand-red rounded-full animate-float opacity-40 blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-float opacity-60 blur-sm" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-brand-red rounded-full animate-float opacity-80" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card neon-border px-6 py-3 rounded-full mb-6 hover-glow">
            <AlertTriangle className="w-5 h-5 text-brand-red animate-pulse" />
            <span className="font-bold text-brand-red">OFERTA POR TEMPO LIMITADO</span>
            <Zap className="w-5 h-5 text-brand-red animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="neon-text">ÚLTIMAS HORAS</span>
            <br />
            para garantir os bônus
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Os bônus exclusivos da pré-venda têm vagas limitadas e em breve não estarão mais disponíveis
          </p>
        </div>

        {/* Enhanced Countdown Timer with neon effects */}
        <div className="glass-card neon-border rounded-3xl p-8 mb-12 max-w-4xl mx-auto hover-glow">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="w-12 h-12 text-brand-red animate-pulse" />
              <h3 className="text-2xl font-bold">Tempo restante para os bônus:</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-red rounded-2xl p-6 mb-2 shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-105 animate-glow">
                  <div className="text-4xl font-black neon-text">
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

        {/* Enhanced Limited bonuses with neon borders */}
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
            <div key={index} className="glass-card neon-border rounded-2xl p-6 text-center hover-glow transition-all duration-300">
              <div className="bg-brand-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon animate-pulse">
                <bonus.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
              <div className="text-brand-red font-semibold mb-3 neon-text text-sm">{bonus.subtitle}</div>
              <p className="text-gray-300 text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced final urgency message */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-3xl p-8 text-center shadow-neon-strong hover-glow">
          <h3 className="text-3xl font-bold mb-4 animate-pulse">
            ⚠️ AVISO IMPORTANTE
          </h3>
          <p className="text-xl mb-6">
            Após o lançamento oficial, o livro custará R$ 149,99 e os bônus 
            <span className="font-bold text-yellow-300"> NÃO estarão mais disponíveis</span> em nenhuma condição.
          </p>
          <p className="text-lg opacity-90">
            Esta é sua <span className="font-bold animate-pulse">única chance</span> de adquirir o pacote completo com 33% de desconto.
          </p>
        </div>
      </div>
    </section>
  );
};
