'use client';

import { PROJECTS, PROJECTS_YEAR } from '@/constants/projects';
import { TabSelector } from '@/components/ui/tab-selector';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { ProjectCard } from './project-card';

interface FilterProjectsProps {
	defaultTag?: string;
}

export const FilterProjects = ({ defaultTag = 'All' }: FilterProjectsProps) => {
	const router = useRouter();

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
					<ul className="flex flex-wrap justify-center gap-8 w-full mt-8 lg:mt-16">
						{(year === 'All'
							? [...PROJECTS].sort((a, b) => b.year - a.year)
							: PROJECTS.filter(p => p.year.toString() === year.toString())
						).map(project => (
							<ProjectCard project={project} key={project.id} />
						))}
					</ul>
			),
		}));
	}, []);

	return (
		<section className="flex flex-col items-center justify-center gap-4 size-full">
			<header className="flex flex-col items-center justify-center text-center gap-4 mt-4 sm:mt-12">
				<h1 className="text-white font-bold  text-5xl md:text-8xl relative inline-block tracking-wider ">
					PROJECTS
					<span className="absolute bottom-2 left-0 right-0 h-[35%] bg-green-400/40 -z-10" />
				</h1>
				<p className="break-keep text-zinc-400 text-md md:text-lg font-semibold text-center">
					SMUMC 멤버들이 참여한 다양한 프로젝트를 확인해 보세요!
				</p>
			</header>

			<div className="w-full max-w-8xl px-4 mt-2 lg:mt-16">
				<TabSelector
					items={tabItems}
					defaultActiveId={defaultTag}
					activeColor="bg-green-700/50"
					contentClassName="bg-transparent border-0 p-0 min-h-0"
					tabContainerClassName="bg-zinc-800/50"
					onTabChange={setFilter}
				/>
			</div>
		</section>
	);
};
