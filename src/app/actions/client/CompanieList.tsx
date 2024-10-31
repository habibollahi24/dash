'use client';

import { useEffect, useState } from 'react';

// const data = await fetch(`http://localhost:3001/companies`);
//   const res: CompaniesType[] = await data.json();
//   console.log(res);

type CompaniesType = {
  id: 1;
  name: {
    [index: string]: string;
  };
  type: {
    [index: string]: string;
  };

  address: {
    [index: string]: string;
  };
};

export default function CompanieList({ locale }: { locale: string }) {
  const [companies, setCompanies] = useState<CompaniesType[]>([]);
  useEffect(() => {
    // fetch('http://localhost:3001/companies')
    //   .then((response) => response.json())
    //   .then((data) => setCompanies(data));
    fetch('http://localhost:3000/api/companies')
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div>
      <p className="p-4">CSR</p>
      <div className="grid gap-5 grid-cols-12">
        {companies.map((user) => {
          return (
            <div
              key={user.id}
              className="shadow-sm  rounded-lg p-10 col-span-12 md:col-span-4"
            >
              <p className="text-lg">{user.name[locale]}</p>
              <p className="text-gray-500">{user.address[locale]}</p>
              <p className="text-left font-semibold">
                {user.type[locale]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
