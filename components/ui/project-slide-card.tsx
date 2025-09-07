"use client";

import Image from "next/image";
import type { Project } from "@/types";

interface ProjectSlideCardProps {
	project: Project;
}

export const ProjectSlideCard = ({ project }: ProjectSlideCardProps) => {
	return (
		<article
			className="w-[160px] md:w-[240px] h-[90px] md:h-[135px] rounded-xl relative overflow-hidden group transition-transform duration-300 mx-2"
			aria-label={`프로젝트: ${project.name} ${project.year}기`}
		>
			<figure className="relative w-full h-full">
				<Image
					src={project.img || "/images/default_project.webp"}
					alt={
						project.img
							? `${project.name} 프로젝트 이미지`
							: "기본 프로젝트 이미지"
					}
					fill
					className="object-cover"
				/>
				<figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-end p-4">
					<div className="text-white">
						<h3 className="font-bold text-md">{project.name}</h3>
						<p className="text-xs opacity-90">
							<span className="sr-only">프로젝트 연도: </span>
							{project.year}기
						</p>
					</div>
				</figcaption>
			</figure>
		</article>
	);
};
