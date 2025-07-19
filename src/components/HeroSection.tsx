
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
    
    // TODO: Integração com Google Sheets
    // Aqui você conectará com a API do Google Sheets para salvar os dados
    // Exemplo: await sendToGoogleSheets(data);
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Obrigado!
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              O seu checklist será enviado para o e-mail informado em instantes.
            </p>
            <p className="text-sm text-muted-foreground">
              Verifique sua caixa de entrada (ou o spam) com o assunto{' '}
              <strong className="text-foreground">"Checklist 100% Vendido – Seu presente chegou!"</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background py-12 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-brand-red rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-brand-red rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-brand-red rounded-full opacity-30"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Main Title FIRST */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-foreground mb-6">
            100%{' '}
            <span className="text-brand-red">VENDIDO</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-8">
            Receba agora o{' '}
            <span className="text-brand-red">Checklist Oficial</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            Um passo a passo prático com as perguntas que vão transformar o jeito 
            que você lança seus empreendimentos imobiliários.
          </p>
        </div>

        {/* Book Cover SECOND */}
        <div className="text-center mb-12">
          <img 
            src="/images/book-mockup.jpg" 
            alt="Livro 100% Vendido" 
            className="w-64 h-auto mx-auto mb-8 shadow-2xl rounded-lg"
          />
          
          {/* Author */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Star className="w-4 h-4 text-brand-red" />
            <span className="text-sm font-medium">por Thiago Cosac</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-foreground">
            Preencha abaixo e receba o material exclusivo diretamente no seu e-mail:
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-auto mb-16 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          placeholder="Digite seu nome completo"
                          className="pl-10 h-12 text-lg"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
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
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          type="email"
                          placeholder="Digite seu melhor e-mail"
                          className="pl-10 h-12 text-lg"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-lg font-bold bg-brand-red hover:bg-brand-red/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

              <p className="text-sm text-muted-foreground text-center">
                🔒 Seus dados estão seguros. Nunca enviaremos spam.
              </p>
            </form>
          </Form>
        </div>

        {/* Author Bio */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="/images/thiago-cosac.png" 
              alt="Thiago Cosac" 
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Thiago Cosac</h3>
              <p className="text-muted-foreground leading-relaxed">
                É especialista em lançamentos imobiliários e fundador da +VGV Brasil, com mais de 50 empreendimentos lançados em todo o Brasil.
                O livro 100% Vendido reúne seu método completo, da escolha do terreno à última unidade entregue.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-12">
          <blockquote className="text-xl md:text-2xl font-bold text-foreground italic leading-relaxed max-w-3xl mx-auto">
            "Quem não tem método, depende da sorte. Esse checklist mostra como sair da intuição e entrar no controle."
          </blockquote>
          <cite className="text-muted-foreground font-medium mt-4 block">
            — Thiago Cosac
          </cite>
        </div>
      </div>
    </section>
  );
};
