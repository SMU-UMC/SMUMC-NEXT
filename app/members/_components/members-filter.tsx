'use client';

import { TabSelector } from '@/components/ui/tab-selector';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { ActiveMember } from './active-member';
import { AllMember } from './all-member';

export const MembersFilter = () => {
	const searchParams = useSearchParams();
	const all = searchParams.get('all');
	const [activeTab, _setActiveTab] = useState(
		all ? 'member-list' : 'active-member',
	);

	const tabItems = [
		{
			id: 'active-member',
			label: 'Active Member',
			content: <ActiveMember />,
		},
		{
			id: 'member-list',
			label: 'Member List',
			content: <AllMember />,
		},
	];

	return (
		<div className="flex flex-col items-center justify-center gap-20 mt-20 w-[90%] md:w-[80%]">
			<div className="relative w-full">
				<h1 className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-8xl font-black text-center tracking-wide text-zinc-600/15 animate-float select-none pointer-events-none -mt-30">
					Break The Rules
				</h1>
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="font-extrabold text-zinc-700 text-4xl sm:text-5xl text-center break-keep">
						SMUMC와 함께 성장한 챌린저들
					</h1>
					<p className="text-zinc-500 text-md font-semibold">
						열정으로 하나 된 우리 상명대 챌린저들을 만나보세요.
					</p>
				</div>
			</div>

			<div className="w-full max-w-4xl">
				<TabSelector
					items={tabItems}
					defaultActiveId={activeTab}
					contentClassName="bg-transparent border-0 p-0"
					tabContainerClassName="border border-zinc-200/60 bg-zinc-50/50"
				/>
			</div>
		</div>
	);
};
