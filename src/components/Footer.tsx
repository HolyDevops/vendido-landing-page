
import React from 'react';
import { ExternalLink, Globe, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">100%</span> Vendido
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              O método definitivo para vender 100% dos seus lançamentos imobiliários
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 mb-8">
            <a
              href="https://maisvgv.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>+VGV</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/thiagocosac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            <a
              href="https://linkedin.com/in/thiagocosac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Thiago Cosac. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
