export async function GET() {
  return Response.json(
    [
      {
        id: 1,
        name: {
          en: 'Tech Innovators',
          de: 'Technik Innovatoren',
          fa: 'نوآوران فناوری',
        },
        type: {
          en: 'Client',
          de: 'Kunde',
          fa: 'مشتری',
        },
        address: {
          en: '123 Silicon Valley, USA',
          de: '123 Silicon Valley, USA',
          fa: '۱۲۳ دره سیلیکون، آمریکا',
        },
      },
      {
        id: 2,
        name: {
          en: 'Green Energy Co',
          de: 'Grüne Energie GmbH',
          fa: 'شرکت انرژی سبز',
        },
        type: {
          en: 'Employer',
          de: 'Arbeitgeber',
          fa: 'کارفرما',
        },
        address: {
          en: '456 Green Street, USA',
          de: '456 Grünstraße, USA',
          fa: 'خیابان سبز ۴۵۶، آمریکا',
        },
      },
      {
        id: 3,
        name: {
          en: 'Auto Dynamics',
          de: 'Auto Dynamik',
          fa: 'دینامیک خودرو',
        },
        type: {
          en: 'Client',
          de: 'Kunde',
          fa: 'مشتری',
        },
        address: {
          en: '789 Motorway, USA',
          de: '789 Autobahn, USA',
          fa: '۷۸۹ بزرگراه، آمریکا',
        },
      },
      {
        id: 4,
        name: {
          en: 'Health First',
          de: 'Gesundheit Zuerst',
          fa: 'سلامت اول',
        },
        type: {
          en: 'Employer',
          de: 'Arbeitgeber',
          fa: 'کارفرما',
        },
        address: {
          en: '321 Wellness Ave, USA',
          de: '321 Wellness Straße, USA',
          fa: '۳۲۱ خیابان سلامت، آمریکا',
        },
      },
      {
        id: 5,
        name: {
          en: 'FinTech Solutions',
          de: 'FinTech Lösungen',
          fa: 'راه‌حل‌های فین‌تک',
        },
        type: {
          en: 'Client',
          de: 'Kunde',
          fa: 'مشتری',
        },
        address: {
          en: '654 Finance Blvd, USA',
          de: '654 Finanzboulevard, USA',
          fa: 'بلوار مالی ۶۵۴، آمریکا',
        },
      },
    ],
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
