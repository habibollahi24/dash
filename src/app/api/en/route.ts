export async function GET() {
  return Response.json({
    list: [
      {
        id: 1,
        title: 'Overview',
        icon: '../layout-grid.svg',
        url: '/',
      },
      {
        id: 2,
        title: 'Companies',
        icon: '../palette.svg',
        url: '/companies',
      },
      {
        id: 3,
        title: 'Orders',
        icon: '../sticky-note.svg',
        url: '/orders',
      },
      {
        id: 4,
        title: 'Users',
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
