'use client';

import { Project } from '@/types/project';

interface ProjectSlideCardProps {
	project: Project;
}

export const ProjectSlideCard = ({ project }: ProjectSlideCardProps) => {
	return (
		<div
			className="h-[180px] rounded-xl bg-center bg-cover relative overflow-hidden group cursor-pointer transition-transform duration-300 mx-2"
			style={{
				backgroundImage: `url(${project.img || '/images/default_project.webp'})`,
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
				<div className="text-white">
					<h3 className="font-bold text-lg mb-1">{project.name}</h3>
					<p className="text-sm opacity-90">{project.year}기</p>
				</div>
			</div>
		</div>
	);
};