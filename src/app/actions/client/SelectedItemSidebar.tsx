'use client';

import { SidebarMenuButton } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';

import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
  locale: string;
  sidebarItem: {
    id: number;
    title: string;
    icon: string;
    url: string;
  };
};

export default function SelectedItemSidebar({
  locale,
  sidebarItem,
}: Props) {
  const segment = useSelectedLayoutSegment();

  return (
    <SidebarMenuButton
      className={`hover:text-white hover:bg-transparent active:bg-transparent mb-2 ${
        sidebarItem.url === '/' + (segment ?? '')
          ? 'font-bold text-xl'
          : ''
      }`}
      asChild
    >
      <Link
        href={`/${locale}${sidebarItem.url}`}
        className="w-full flex justify-start "
      >
        <Image
          src={sidebarItem.icon}
          width={20}
          height={20}
          alt={sidebarItem.title}
        />
        <span className="hover:scale-105 text-white">
          {sidebarItem.title}
        </span>
      </Link>
    </SidebarMenuButton>
  );
}
