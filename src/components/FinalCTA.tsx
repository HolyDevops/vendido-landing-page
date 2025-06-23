
import React from 'react';
import { ShoppingCart, Shield, CreditCard, Clock } from 'lucide-react';

interface FinalCTAProps {
  onPurchase: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPurchase }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Final CTA Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-black text-brand-black mb-6">
              Sua transformação
              <span className="gradient-text"> começa agora</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Não perca a oportunidade de aprender com quem já vendeu mais de R$ 1,3 bilhão em empreendimentos
            </p>
          </div>

          {/* Price comparison */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  Investimento na pré-venda:
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-gray-500 line-through">De R$ 149,99</span>
                    <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">33% OFF</span>
                  </div>
                  <div className="text-4xl font-black text-brand-red">R$ 99,99</div>
                  <div className="text-lg text-green-600 font-semibold">ou 10x de R$ 9,99 sem juros</div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-green-100 border border-green-300 rounded-2xl p-6">
                  <Shield className="w-8 h-8 text-green-600 mx-auto md:ml-auto mb-2" />
                  <div className="font-semibold text-green-800">FRETE GRÁTIS</div>
                  <div className="text-sm text-green-600">Para todo o Brasil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="text-center mb-8">
            <button 
              onClick={onPurchase}
              className="btn-primary-large group relative overflow-hidden animate-pulse-red"
            >
              <div className="flex items-center justify-center gap-3 relative z-10">
                <ShoppingCart className="w-6 h-6" />
                <span>GARANTIR MEU EXEMPLAR AGORA</span>
              </div>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Clique no botão acima e finalize sua compra em menos de 2 minutos
            </p>
          </div>

          {/* Payment options */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h4 className="text-xl font-bold text-brand-black mb-6 text-center">
              Formas de pagamento aceitas:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border">
                <CreditCard className="w-8 h-8 text-brand-red" />
                <div>
                  <div className="font-semibold">Cartão de Crédito</div>
                  <div className="text-sm text-gray-600">Em até 10x sem juros</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">PIX</div>
                  <div className="text-sm text-gray-600">À vista com desconto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Shield,
                title: "Compra 100% Segura",
                description: "Transação protegida por SSL"
              },
              {
                icon: Clock,
                title: "Entrega Garantida",
                description: "Em até 7 dias úteis"
              },
              {
                icon: CreditCard,
                title: "Pagamento Seguro",
                description: "Processado por plataforma confiável"
              }
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-green-600" />
                </div>
                <h5 className="font-bold text-brand-black mb-2">{guarantee.title}</h5>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>

          {/* Final urgency reminder */}
          <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-2xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">
              ⏰ Últimas horas da pré-venda!
            </h4>
            <p>
              Garante seu exemplar com 33% de desconto e todos os bônus exclusivos antes que a oferta expire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
