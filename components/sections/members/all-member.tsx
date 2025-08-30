"use client";

import { Check, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MemberCard } from "@/components/ui/member-card";
import { MEMBERS } from "@/constants/members";

const LAST_YEAR = 8;

export const AllMember = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const yearParam = searchParams.get("year");
	const year = parseInt(yearParam || LAST_YEAR.toString(), 10);

	useEffect(() => {
		if (!yearParam) {
			router.push(`/members?all=true&year=${LAST_YEAR}`);
		}
	}, [yearParam, router]);

	const setFilter = (selectedYear: string) => {
		const parsedYear = parseInt(selectedYear, 10);
		if (!isNaN(parsedYear)) {
			router.replace(`/members?all=true&year=${parsedYear}`, { scroll: false });
		} else {
			router.replace("/members?all=true", { scroll: false });
		}
	};

	const CURRENT_MEMBERS = MEMBERS.filter((member) => member.year === year);

	const SET_YEARS = new Set(MEMBERS.map((member) => member.year));
	const ALL_YEARS = [...SET_YEARS].sort((a, b) => b - a);

	return (
		<div className="w-full mt-10">
			<div className="mb-5 flex justify-end items-center relative">
				<DropdownMenu>
					<DropdownMenuTrigger className="flex h-11 w-[180px] items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-gray-300 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 data-[state=open]:border-green-500">
						<span>{year}기</span>
						<ChevronDown className="h-4 w-4 opacity-50" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-[180px] max-h-[300px] overflow-y-auto"
					>
						{ALL_YEARS.map((num) => (
							<DropdownMenuItem
								key={num}
								onClick={() => setFilter(num.toString())}
								className="flex items-center justify-between"
							>
								<span
									className={year === num ? "font-medium text-green-700" : ""}
								>
									{num}기
								</span>
								{year === num && <Check className="h-4 w-4 text-green-600" />}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{CURRENT_MEMBERS.map((member) => (
					<MemberCard key={member.id} member={member} />
				))}
			</div>
		</div>
	);
};
