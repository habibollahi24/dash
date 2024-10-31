import SelectedItemSidebar from '@/app/actions/client/SelectedItemSidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Image from 'next/image';

export default async function AppSidebar({
  locale,
}: {
  locale: string;
}) {
  // const data = await fetch(`http://localhost:3001/${locale}`);
  const data = await fetch(`http://localhost:3000/api/${locale}`);
  const res = await data.json();

  const list: {
    id: number;
    title: string;
    icon: string;
    url: string;
  }[] = res.list;

  const admin: { username: string; email: string } = res.admin;

  return (
    <Sidebar
      side={locale === 'fa' ? 'right' : 'left'}
      className="!text-white"
    >
      <SidebarHeader className="text-center py-4 text-xl font-bold">
        LOGO
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="items-stretch ">
              {list.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SelectedItemSidebar
                    locale={locale}
                    sidebarItem={item}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-center gap-x-2 items-center py-4">
          <div className="text-xs">
            <div className="text-white">{admin?.username}</div>
            <div className="text-white leading-none">
              {admin?.email}
            </div>
          </div>
          <Image
            src="/article.jpg"
            width={40}
            height={40}
            alt="user"
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
