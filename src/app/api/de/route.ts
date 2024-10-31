export async function GET() {
  return Response.json({
    list: [
      {
        id: 1,
        title: ' Überblick',
        icon: '../layout-grid.svg',
        url: '/',
      },
      {
        id: 2,
        title: 'Unternehmen',
        icon: '../palette.svg',
        url: '/companies',
      },
      {
        id: 3,
        title: 'Bestellungen',
        icon: '../sticky-note.svg',
        url: '/orders',
      },
      {
        id: 4,
        title: 'Benutzer',
        icon: '../octagon.svg',
        url: '/users',
      },
    ],
    admin: {
      username: 'Mohammad Habibollahi',
      email: 'Habibollahi24@gmail.com',
    },
  });
}
