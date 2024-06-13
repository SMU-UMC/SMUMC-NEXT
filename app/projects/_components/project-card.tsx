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
		<div
			key={project.id}
			className="bg-white shadow-md rounded-2xl h-[370px] w-[270px]"
		>
			<div className="relative w-full h-[55%] rounded-2xl bg-center bg-cover duration-500">
				<Image
					src={project.img ? project.img : '/images/demodayposter.webp'}
					alt={project.name}
					fill
					className="object-cover rounded-t-2xl"
				/>
			</div>
			<div className="flex flex-col items-start p-3 h-[45%] w-full">
				<div className="flex gap-2 justify-center items-center">
					<h4 className="text-sm font-bold text-slate-500">{project.name}</h4>
					{project.github && (
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
					)}
				</div>
				<div className="flex gap-2 mt-1">
					{project.stack.map((tech: string, idx: number) => (
						<span
							key={idx}
							className="bg-[#5C946B] text-[11px] text-white py-1 px-2 rounded-2xl"
						>
							{tech}
						</span>
					))}
				</div>
				<p className="mt-2 w-full text-sm text-black truncate flex flex-start">
					{project.description}
				</p>
				<div className="mt-5 flex gap-2 flex-wrap">
					{project.member.map((m, idx) => (
						<span key={idx} className="text-[12px] break-word text-black ">
							{m}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
