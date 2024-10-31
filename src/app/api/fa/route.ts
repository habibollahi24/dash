export async function GET() {
  return Response.json({
    list: [
      {
        id: 1,
        title: ' پیش نمایش',
        icon: '../layout-grid.svg',
        url: '/',
      },
      {
        id: 2,
        title: 'شرکت ها',
        icon: '../palette.svg',
        url: '/companies',
      },
      {
        id: 3,
        title: 'سفارشات',
        icon: '../sticky-note.svg',
        url: '/orders',
      },
      {
        id: 4,
        title: 'کاربران',
        icon: '../octagon.svg',
        url: '/users',
      },
    ],
    admin: {
      username: 'محمد حبیب الهی',
      email: 'Habibollahi24@gmail.com',
    },
  });
}
