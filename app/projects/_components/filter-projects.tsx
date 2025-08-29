'use client';

import { PROJECTS, PROJECTS_YEAR } from '@/constants/projects';
import { TabSelector } from '@/components/ui/tab-selector';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { ProjectCard } from './project-card';

export const FilterProjects = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tag = searchParams.get('tag') || 'All';

	const setFilter = (tag: string | number) => {
		if (tag && tag !== 'All') {
			router.push('?tag=' + tag);
		} else {
			router.push('/projects');
		}
	};

	const tabItems = useMemo(() => {
		return PROJECTS_YEAR.map(year => ({
			id: year,
			label: year !== 'All' ? `${year}기` : year,
			content: (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 mt-16 w-full items-stretch justify-items-center">
					{(year === 'All'
						? [...PROJECTS].sort((a, b) => b.year - a.year)
						: PROJECTS.filter(p => p.year.toString() === year.toString())
					).map(project => (
						<ProjectCard project={project} key={project.id} />
					))}
				</div>
			),
		}));
	}, []);

	return (
		<div className="flex flex-col items-center justify-center gap-4 size-full">
			<div className="flex flex-col items-center justify-center text-center gap-4 mt-12">
				<h1 className="text-white font-bold  text-5xl sm:text-8xl relative inline-block tracking-wider ">
					PROJECTS
					<span className="absolute bottom-2 left-0 right-0 h-[35%] bg-green-400/40 -z-10" />
				</h1>
				<h3 className="break-keep text-zinc-400 text-md font-semibold">
					SMUMC 멤버들이 참여한 다양한 프로젝트를 확인해 보세요!
				</h3>
			</div>

			<div className="w-full max-w-7xl px-4 mt-16">
				<TabSelector
					items={tabItems}
					defaultActiveId={tag}
					activeColor="bg-green-700/50"
					contentClassName="bg-transparent border-0 p-0 min-h-0"
					tabContainerClassName="bg-zinc-800/50"
					onTabChange={setFilter}
				/>
			</div>
		</div>
	);
};
