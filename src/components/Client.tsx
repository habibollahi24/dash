'use client';

import { useTranslations } from 'next-intl';
// import { Link } from '@/i18n/routing';

export default function Client() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <p>SSG</p>
      <h1 className="text-2xl">{t('title')}</h1>
    </div>
  );
}
