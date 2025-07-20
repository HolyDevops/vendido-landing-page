
interface LeadData {
  name: string;
  email: string;
}

export const sendToGoogleSheets = async (data: LeadData): Promise<void> => {
  try {
    // Esta URL precisa ser substituída pela URL do seu Google Apps Script
    // Para criar: https://script.google.com/home/start
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        timestamp: new Date().toISOString(),
        source: '100% Vendido Landing Page'
      })
    });

    console.log('Lead enviado para Google Sheets:', data);
  } catch (error) {
    console.error('Erro ao enviar lead para Google Sheets:', error);
    throw new Error('Falha ao salvar os dados. Tente novamente.');
  }
};
