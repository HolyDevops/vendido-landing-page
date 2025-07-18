
import React from 'react';
import { ExternalLink, Globe, Instagram, Linkedin } from 'lucide-react';

export const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://maisvgv.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">+VGV</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://instagram.com/thiagocosac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href="https://linkedin.com/in/thiagocosac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          <p className="text-gray-500 text-xs">
            © 2025 Thiago Cosac. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
