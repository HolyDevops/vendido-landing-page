
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, User, CheckCircle, Loader2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
});

type FormData = z.infer<typeof formSchema>;

export const HeroSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Lead captured:', data);
    
    // Here you would integrate with your email automation service
    // Example: await sendToActiveCompaign(data);
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-brand-black flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-600/10 border border-green-600/20 rounded-2xl p-8 mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Obrigado!
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              O seu checklist será enviado para o e-mail informado em instantes.
            </p>
            <p className="text-sm text-gray-400">
              Verifique sua caixa de entrada (ou o spam) com o assunto{' '}
              <strong className="text-white">"Checklist 100% Vendido – Seu presente chegou!"</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brand-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-brand-red rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-brand-red rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-brand-red rounded-full opacity-30"></div>
      
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Author */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Star className="w-4 h-4 text-brand-red" />
          <span className="text-sm font-medium">por Thiago Cosac</span>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
            100%{' '}
            <span className="gradient-text">VENDIDO</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            Receba agora o{' '}
            <span className="text-brand-red">Checklist Oficial</span>
          </h2>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-xl mx-auto">
            Um passo a passo prático com as perguntas que vão transformar o jeito 
            que você lança seus empreendimentos imobiliários.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          placeholder="Digite seu nome completo"
                          className="pl-10 h-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-red focus:ring-brand-red"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          placeholder="Digite seu melhor e-mail"
                          className="pl-10 h-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-red focus:ring-brand-red"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-lg font-bold bg-brand-red hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Quero receber o checklist'
                )}
              </Button>

              <p className="text-sm text-gray-400 text-center">
                🔒 Seus dados estão seguros. Nunca enviaremos spam.
              </p>
            </form>
          </Form>
        </div>

        {/* Quick testimonial */}
        <div className="border-t border-white/10 pt-8">
          <blockquote className="text-lg text-gray-300 italic">
            "Quem não tem método, depende da sorte."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
