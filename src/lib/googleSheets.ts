
interface LeadData {
  name: string;
  email: string;
}

export const sendToGoogleSheets = async (data: LeadData): Promise<void> => {
  try {
    // Esta URL precisa ser substituída pela URL do seu Google Apps Script
    // Siga as instruções em GOOGLE_SHEETS_SETUP.md
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const payload = {
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
      source: '100% Vendido Landing Page'
    };

    console.log('Enviando dados para Google Sheets:', payload);
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('Resposta do Google Sheets:', response.status);
    console.log('Lead enviado com sucesso:', data);
    
  } catch (error) {
    console.error('Erro ao enviar lead para Google Sheets:', error);
    // Não lançar erro para não quebrar a experiência do usuário
    // O toast de sucesso ainda será exibido
    console.log('Continuando fluxo mesmo com erro no Google Sheets');
  }
};
