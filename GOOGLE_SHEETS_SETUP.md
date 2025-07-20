
# Configuração Google Sheets + Apps Script

## Passo 1: Criar a Planilha Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para "Leads 100% Vendido"
4. Na primeira linha, adicione os cabeçalhos:
   - A1: Nome
   - B1: Email
   - C1: Data/Hora
   - D1: Origem

## Passo 2: Configurar o Google Apps Script

1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Renomeie o projeto para "Leads 100% Vendido API"
4. Substitua todo o código padrão pelo código abaixo:

```javascript
function doPost(e) {
  try {
    // ID da sua planilha Google Sheets
    const SHEET_ID = 'COLE_AQUI_O_ID_DA_SUA_PLANILHA';
    
    // Abrir a planilha
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parsear os dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Dados a serem inseridos
    const nome = data.name || '';
    const email = data.email || '';
    const timestamp = data.timestamp || new Date().toISOString();
    const source = data.source || 'Landing Page';
    
    // Adicionar uma nova linha com os dados
    sheet.appendRow([nome, email, timestamp, source]);
    
    // Resposta de sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Lead salvo com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Resposta de erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Erro ao salvar lead: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Passo 3: Configurar o ID da Planilha

1. Volte para sua planilha Google Sheets
2. Copie o ID da planilha da URL (parte entre `/d/` e `/edit`)
   - Exemplo: `https://docs.google.com/spreadsheets/d/1ABC123DEF456.../edit`
   - O ID seria: `1ABC123DEF456...`
3. Substitua `COLE_AQUI_O_ID_DA_SUA_PLANILHA` pelo ID real

## Passo 4: Implantar o Apps Script

1. No Apps Script, clique em "Implantar" > "Nova implantação"
2. Clique no ícone de configuração ⚙️ ao lado de "Tipo"
3. Selecione "Aplicativo da Web"
4. Configure:
   - **Descrição**: "API para capturar leads"
   - **Executar como**: "Eu"
   - **Quem tem acesso**: "Qualquer pessoa"
5. Clique em "Implantar"
6. **IMPORTANTE**: Copie a URL do aplicativo da Web que será gerada

## Passo 5: Autorizar Permissões

1. Quando solicitado, clique em "Autorizar acesso"
2. Selecione sua conta Google
3. Clique em "Ir para [Nome do Projeto] (não seguro)" se aparecer um aviso
4. Clique em "Permitir"

## Passo 6: Atualizar o Código da Landing Page

Substitua a URL no arquivo `src/lib/googleSheets.ts`:

```typescript
// Trocar esta linha:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Por esta (com sua URL real):
const GOOGLE_SCRIPT_URL = 'SUA_URL_COPIADA_DO_PASSO_4';
```

## Testando a Integração

1. Preencha o formulário na landing page
2. Verifique se os dados aparecem na planilha
3. Verifique o console do navegador para logs de debug

## Estrutura dos Dados Enviados

```json
{
  "name": "Nome do usuário",
  "email": "email@exemplo.com",
  "timestamp": "2025-01-20T10:30:00.000Z",
  "source": "100% Vendido Landing Page"
}
```

## Possíveis Problemas e Soluções

**Erro de CORS**: Normal com `mode: 'no-cors'` - o dados ainda são enviados.

**Dados não aparecem**: Verifique se:
- O ID da planilha está correto
- As permissões foram autorizadas
- A URL do Apps Script está correta

**Erro 403**: Verifique se "Qualquer pessoa" tem acesso na configuração de implantação.
