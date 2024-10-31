import React from 'react';

type UserType = {
  id: 1;
  name: {
    [index: string]: string;
  };
  email: string;
  address: {
    [index: string]: string;
  };
};

export default async function UsersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // const data = await fetch(`http://localhost:3001/users`);
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`
  );
  const res: UserType[] = await data.json();
  console.log(res);
  return (
    <div>
      <p className="p-4">SSR</p>
      <div className="grid gap-5 grid-cols-12">
        {res.map((user) => {
          return (
            <div
              key={user.id}
              className="shadow-sm  rounded-lg p-10 col-span-12 md:col-span-4"
            >
              <p className="text-lg">{user.name[locale]}</p>
              <p className="text-gray-500">{user.address[locale]}</p>
              <p className="text-left font-semibold">{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
