'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function ToggleLang({ local }: { local: string }) {
  const [_, setSelectedValue] = useState('');

  const { push } = useRouter();

  const lang =
    local === 'fa'
      ? 'Persian'
      : local === 'en'
      ? 'English'
      : 'German';

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
    push(`/${value}`);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={lang} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languege</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="de">German</SelectItem>
          <SelectItem value="fa">persian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
