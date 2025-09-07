import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";

export interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<li className="flex flex-col gap-1 size-full max-w-xs">
			<Image
				src={project.img ? project.img : "/images/default_project.webp"}
				alt={project.name}
				width={400}
				height={200}
				className="object-cover rounded-lg aspect-[16/9] "
			/>

			<div className="flex flex-col items-start p-3 w-full gap-1 flex-1">
				<div className="flex justify-between items-center w-full">
					<div className="flex gap-2 justify-center items-center">
						<h3 className="text-lg font-extrabold">{project.name}</h3>
						<p className="text-green-500 font-semibold">{project.year}기</p>
					</div>

					<div className="flex gap-2">
						{project.github && (
							<Link
								href={project.github}
								target="_blank"
								className="cursor-pointer"
								aria-label={`${project.name} GitHub`}
							>
								<FaGithub
									size={16}
									className="hover:text-zinc-200 text-zinc-400 transition-colors duration-300"
								/>
							</Link>
						)}
						{project.release && (
							<Link
								href={project.release}
								target="_blank"
								className="cursor-pointer"
								aria-label={`${project.name} 배포 사이트`}
							>
								<ArrowUpRight
									size={16}
									className="hover:text-zinc-200 text-zinc-400 transition-colors duration-300"
								/>
							</Link>
						)}
					</div>
				</div>

				<p className="font-semibold w-full text-sm truncate">
					{project.description}
				</p>

				<div className="mt-2 flex gap-2 flex-wrap flex-1">
					{project.member.map((m, idx) => (
						<span key={idx} className="text-[11px] break-word text-zinc-400">
							{m}
						</span>
					))}
				</div>

				<div className="flex gap-2 mt-2">
					{project.stack.map((tech: string, idx: number) => (
						<span
							key={idx}
							className="text-[9px] border text-zinc-400 border-zinc-700 py-1 px-2 rounded-sm"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</li>
	);
};
