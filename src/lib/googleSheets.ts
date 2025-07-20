
interface LeadData {
  name: string;
  email: string;
}

export const sendToGoogleSheets = async (data: LeadData): Promise<void> => {
  try {
    // URL do seu Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxe5qL4nxlrlebeoH6tUNMN4JtbC2sF9T2At-4DDUrvtMwW31IcsL8NT9PWz5mT3Sydpw/exec';
    
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
