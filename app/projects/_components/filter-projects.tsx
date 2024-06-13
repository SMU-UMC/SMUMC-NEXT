'use client';

import { PROJECTS, PROJECTS_YEAR } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { ProjectCard } from './project-card';

export const FilterProjects = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tag = searchParams.get('tag');

	const setFilter = (tag: string | number) => {
		if (tag) {
			router.push('?tag=' + tag);
		} else {
			router.push('/projects');
		}
	};

	const filteredProjects = useMemo(() => {
		if (tag && tag !== 'All') {
			return PROJECTS.filter((project) => project.year.toString() === tag);
		}
		return PROJECTS;
	}, [tag]);

	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='text-green-500 dark:text-green-700 font-bold text-5xl mb-10 mt-20'>
				PROJECTS
			</h1>
			<h3 className='text-slate-200 text-lg'>
				SMUMC 멤버들이 참여한 <br /> 다양한 프로젝트를 확인해 보세요!
			</h3>
			<div className='flex gap-10 py-10'>
				{PROJECTS_YEAR.map((year, idx) => (
					<span
						key={idx}
						onClick={() => setFilter(year)}
						className={cn(`font-bold cursor-pointer`, {
							'text-blue-500': tag === year.toString(),
						})}
					>
						{year !== 'All' ? `${year}기` : year}
					</span>
				))}
			</div>
			<div className='max-w-5xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px]'>
					{filteredProjects.map((project) => (
						<ProjectCard project={project} />
					))}
				</div>
			</div>
		</div>
	);
};
