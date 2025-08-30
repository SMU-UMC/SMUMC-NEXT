'use client';

import { TabSelector } from '@/components/ui/tab-selector';

import { ActiveMember } from './active-member';
import { AllMember } from './all-member';

interface MembersFilterProps {
	defaultTab?: string;
}

export const MembersFilter = ({ defaultTab = 'active-member' }: MembersFilterProps) => {

	const tabItems = [
		{
			id: 'active-member',
			label: 'Active',
			content: <ActiveMember />,
		},
		{
			id: 'member-list',
			label: 'All',
			content: <AllMember />,
		},
	];

	return (
		<section className="flex flex-col items-center justify-center gap-10 sm:gap-20 mt-8 sm:mt-20 w-[90%] md:w-[80%]">
			<div className="relative w-full">
				<span className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-7xl font-black text-center tracking-wide text-zinc-600/15 animate-float select-none pointer-events-none -mt-30 sm:-mt-20 md:-mt-28">
					Break The Rules
				</span>
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="font-extrabold text-zinc-700 text-4xl md:text-5xl text-center break-keep">
						SMUMC와 함께 성장한 챌린저들
					</h1>
					<p className="text-zinc-500 text-md md:text-lg font-semibold text-center break-keep">
						열정으로 하나 된 우리 상명대 챌린저들을 만나보세요.
					</p>
				</div>
			</div>

			<div className="w-full max-w-4xl">
				<TabSelector
					items={tabItems}
					defaultActiveId={defaultTab}
					contentClassName="bg-transparent border-0 p-0"
					tabContainerClassName="border border-zinc-200/60 bg-zinc-50/50"
					useMobileTab={false}
				/>
			</div>
		</section>
	);
};
