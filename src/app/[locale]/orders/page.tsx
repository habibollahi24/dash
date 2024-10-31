import React from 'react';

type OrderType = {
  id: 1;
  customer: {
    [index: string]: string;
  };
  items: [
    {
      name: {
        [index: string]: string;
      };
      quantity: 1;
      price: 1200;
    },
    {
      name: {
        [index: string]: string;
      };
      quantity: 2;
      price: 25;
    }
  ];
};

export default async function OrdersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // const data = await fetch(`http://localhost:3001/orders`, {
  //   cache: 'force-cache',
  // });
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
    {
      cache: 'force-cache',
    }
  );
  const res: OrderType[] = await data.json();
  console.log(res);
  return (
    <div>
      <p className="p-4">SSG with Data</p>
      <div className="grid gap-5 grid-cols-12">
        {res.map((order) => {
          return (
            <div
              key={order.id}
              className="shadow-sm  rounded-lg p-10 col-span-12 md:col-span-4"
            >
              <p className="text-lg">{order.customer[locale]}</p>
              <ul className="">
                {order.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="p-2 shadow-sm  list-disc  rounded-md my-1 w-full"
                    >
                      <p className="">
                        {item.name[locale]} * {item.quantity}
                      </p>

                      <p className=" ">{item.price}$</p>
                    </li>
                  );
                })}
              </ul>
              {/* <p className="text-gray-500">{user.address[locale]}</p>
              <p className="text-left font-semibold">{user.email}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
