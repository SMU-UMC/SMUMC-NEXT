import { Projects } from '@/types/domain';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaGithub, FaPaperclip } from 'react-icons/fa';

export interface ProjectCardProps {
	project: Projects;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const router = useRouter();

	return (
		<div className="flex flex-col gap-1 h-full">
			<Image
				src={project.img ? project.img : '/images/demodayposter.webp'}
				alt={project.name}
				width={400}
				height={200}
				className="object-cover rounded-lg aspect-[16/9] "
			/>

			<div className="flex flex-col items-start p-3 w-full gap-1 flex-1">
				<div className="flex gap-2 justify-center items-center">
					<h4 className="text-lg font-extrabold">{project.name}</h4>
					{/* {project.github && (
						<FaGithub
							size="15"
							onClick={() => {
								router.push(`${project.github}`);
							}}
							className="hover:text-green-700 cursor-pointer"
						/>
					)}
					{project.release && (
						<FaPaperclip
							size="15"
							onClick={() => {
								router.push(`${project.release}`);
							}}
							className="hover:text-green-700 cursor-pointer"
						/>
					)} */}
					<p className="text-green-500 font-semibold">{project.year}기</p>
				</div>

				<p className="font-semibold w-full text-sm truncate flex flex-start">
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
		</div>
	);
};
