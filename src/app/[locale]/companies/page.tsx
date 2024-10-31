import CompanieList from '@/app/actions/client/CompanieList';



export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <CompanieList locale={locale} />;
}
