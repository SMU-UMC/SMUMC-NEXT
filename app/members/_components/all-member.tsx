'use client';

import { useEffect } from 'react';
import { MEMBERS } from '@/constants/members';
import { MemberCard } from './member-card';
import { useRouter, useSearchParams } from 'next/navigation';

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
			router.replace(`/members?all=true&year=${parsedYear}`, { scroll: false });
		} else {
			router.replace('/members?all=true', { scroll: false });
		}
	};

	const CURRENT_MEMBERS = MEMBERS.filter(member => member.year === year);

	const SET_YEARS = new Set(MEMBERS.map(member => member.year));
	const ALL_YEARS = [...SET_YEARS].sort((a, b) => b - a);

	return (
		<div className="max-w-7xl mx-auto px-4 w-full mt-10">
			<div className="mb-5 flex justify-end items-center">
				<Select onValueChange={setFilter} defaultValue={year.toString()}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="기수 선택" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{ALL_YEARS.map(num => (
								<SelectItem key={num} value={num.toString()}>
									{num}기
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{CURRENT_MEMBERS.map(member => (
					<MemberCard key={member.id} member={member} />
				))}
			</div>
		</div>
	);
};
