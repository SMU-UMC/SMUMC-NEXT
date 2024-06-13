'use client';

import { useEffect } from 'react';
import { MEMBERS } from '@/constants/members';
import { MemberCard } from './member-card';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const AllMember = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const yearParam = searchParams.get('year');
  const year = parseInt(yearParam || '6', 10);

  useEffect(() => {
    if (!yearParam) {
      router.push(`/members?all=true&year=6`);
    }
  }, [yearParam, router]);

  const setFilter = (selectedYear: string) => {
    const parsedYear = parseInt(selectedYear, 10);
    if (!isNaN(parsedYear)) {
      router.push(`/members?all=true&year=${parsedYear}`);
    } else {
      router.push('/members?all=true');
    }
  };

  const CURRENT_MEMBERS = MEMBERS.filter(member => member.year === year);

  const SET_YEARS = new Set(MEMBERS.map(member => member.year));
  const ALL_YEARS = [...SET_YEARS].sort((a, b) => b - a);

  return (
    <>
      <div className="w-[30%] mb-20 m-auto">
        <Select onValueChange={setFilter}>
          <SelectTrigger className="">
            <SelectValue placeholder="기수 선택" />
          </SelectTrigger>
          <SelectContent className="bg-slate-400">
            <SelectGroup>
              {ALL_YEARS.map(num => (
                <SelectItem
                  key={num}
                  value={num.toString()}
                  className="cursor-pointer"
                >
                  {num}기
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {CURRENT_MEMBERS.map(member => (
          <div key={member.id}>
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </>
  );
};
