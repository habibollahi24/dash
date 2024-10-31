export async function GET() {
  return Response.json([
    {
      id: 1,
      customer: {
        en: 'John Doe',
        de: 'Johann Doe',
        fa: 'جان دو',
      },
      items: [
        {
          name: {
            en: 'Laptop',
            de: 'Laptop',
            fa: 'لپ‌تاپ',
          },
          quantity: 1,
          price: 1200,
        },
        {
          name: {
            en: 'Mouse',
            de: 'Maus',
            fa: 'ماوس',
          },
          quantity: 2,
          price: 25,
        },
      ],
    },
    {
      id: 2,
      customer: {
        en: 'Jane Smith',
        de: 'Johanna Schmidt',
        fa: 'جین اسمیت',
      },
      items: [
        {
          name: {
            en: 'Monitor',
            de: 'Monitor',
            fa: 'مانیتور',
          },
          quantity: 1,
          price: 300,
        },
      ],
    },
    {
      id: 3,
      customer: {
        en: 'Alice Johnson',
        de: 'Alice Johnson',
        fa: 'آلیس جانسون',
      },
      items: [
        {
          name: {
            en: 'Tablet',
            de: 'Tablet',
            fa: 'تبلت',
          },
          quantity: 1,
          price: 500,
        },
        {
          name: {
            en: 'Headphones',
            de: 'Kopfhörer',
            fa: 'هدفون',
          },
          quantity: 1,
          price: 150,
        },
      ],
    },
    {
      id: 4,
      customer: {
        en: 'Bob Brown',
        de: 'Robert Braun',
        fa: 'باب براون',
      },
      items: [
        {
          name: {
            en: 'Smartphone',
            de: 'Smartphone',
            fa: 'گوشی هوشمند',
          },
          quantity: 1,
          price: 800,
        },
        {
          name: {
            en: 'Charger',
            de: 'Ladegerät',
            fa: 'شارژر',
          },
          quantity: 1,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      customer: {
        en: 'Charlie Davis',
        de: 'Karl Davis',
        fa: 'چارلی دیویس',
      },
      items: [
        {
          name: {
            en: 'Camera',
            de: 'Kamera',
            fa: 'دوربین',
          },
          quantity: 1,
          price: 1000,
        },
        {
          name: {
            en: 'Tripod',
            de: 'Stativ',
            fa: 'سه‌پایه',
          },
          quantity: 1,
          price: 100,
        },
      ],
    },
  ]);
}
