
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, User, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
});

type FormData = z.infer<typeof formSchema>;

export const LeadCaptureForm: React.FC = () => {
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
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-brand-black mb-4">
            Obrigado!
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            O seu checklist será enviado para o e-mail informado em instantes.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Verifique sua caixa de entrada (ou o spam) com o assunto{' '}
            <strong>"Checklist 100% Vendido – Seu presente chegou!"</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-brand-black mb-6">
              Preencha abaixo e receba o material exclusivo diretamente no seu e-mail:
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-black font-semibold">
                        Nome completo *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                      <FormLabel className="text-brand-black font-semibold">
                        E-mail *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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

                <p className="text-sm text-gray-500 text-center mt-4">
                  🔒 Seus dados estão seguros. Nunca enviaremos spam.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
