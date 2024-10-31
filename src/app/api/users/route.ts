export async function GET() {
  return Response.json([
    {
      id: 1,
      name: {
        en: 'John Doe',
        de: 'Johann Doe',
        fa: 'جان دو',
      },
      email: 'john@example.com',
      address: {
        en: '123 Main St, Anytown, USA',
        de: '123 Hauptstraße, Irgendstadt, USA',
        fa: 'خیابان اصلی ۱۲۳، هرشهری، آمریکا',
      },
    },
    {
      id: 2,
      name: {
        en: 'Jane Smith',
        de: 'Johanna Schmidt',
        fa: 'جین اسمیت',
      },
      email: 'jane@example.com',
      address: {
        en: '456 Elm St, Anytown, USA',
        de: '456 Ulmenstraße, Irgendstadt, USA',
        fa: 'خیابان علم ۴۵۶، هرشهری، آمریکا',
      },
    },
    {
      id: 3,
      name: {
        en: 'Alice Johnson',
        de: 'Alice Johnson',
        fa: 'آلیس جانسون',
      },
      email: 'alice@example.com',
      address: {
        en: '789 Oak St, Anytown, USA',
        de: '789 Eichenstraße, Irgendstadt, USA',
        fa: 'خیابان بلوط ۷۸۹، هرشهری، آمریکا',
      },
    },
    {
      id: 4,
      name: {
        en: 'Bob Brown',
        de: 'Robert Braun',
        fa: 'باب براون',
      },
      email: 'bob@example.com',
      address: {
        en: '321 Pine St, Anytown, USA',
        de: '321 Kiefernstraße, Irgendstadt, USA',
        fa: 'خیابان کاج ۳۲۱، هرشهری، آمریکا',
      },
    },
    {
      id: 5,
      name: {
        en: 'Charlie Davis',
        de: 'Karl Davis',
        fa: 'چارلی دیویس',
      },
      email: 'charlie@example.com',
      address: {
        en: '654 Maple St, Anytown, USA',
        de: '654 Ahornstraße, Irgendstadt, USA',
        fa: 'خیابان افرا ۶۵۴، هرشهری، آمریکا',
      },
    },
  ]);
}
