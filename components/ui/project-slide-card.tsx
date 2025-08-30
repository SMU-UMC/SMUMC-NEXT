'use client';

import { Project } from '@/types';
import Image from 'next/image';

interface ProjectSlideCardProps {
	project: Project;
}

export const ProjectSlideCard = ({ project }: ProjectSlideCardProps) => {
	return (
		<article className="w-[240px] h-[135px] rounded-xl relative overflow-hidden group cursor-pointer transition-transform duration-300 mx-2">
			<Image
				aria-label="데모데이 프로젝트 이미지"
				src={project.img || '/images/default_project.webp'}
				alt={project.name}
				fill
				className="object-cover"
				sizes="240px"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
				<div className="text-white">
					<h3 className="font-bold text-lg">{project.name}</h3>
					<p className="text-sm opacity-90">{project.year}기</p>
				</div>
			</div>
		</article>
	);
};
