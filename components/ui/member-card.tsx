import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import type { Member } from "@/types";

interface MemberCardProps {
	member: Member;
}

export const MemberCard = ({ member }: MemberCardProps) => {
	return (
		<li className="border border-zinc-200/80 bg-white/80 rounded-xl relative w-full h-56">
			<article className="flex items-center justify-between p-6">
				<div className="flex flex-col justify-center">
					<p className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2 py-1 rounded-md inline-block w-fit mb-2">
						{member.position}
					</p>

					<div className="flex items-center gap-2">
						<h3 className="font-bold text-zinc-900 text-xl sm:text-2xl">
							{member.name}
						</h3>
						{member.github && (
							<Link
								href={`https://github.com/${member.github}`}
								target="_blank"
								aria-label={`${member.name}의 GitHub 프로필`}
							>
								<SiGithub
									className="text-zinc-500 hover:text-zinc-600"
									size={17}
								/>
							</Link>
						)}
					</div>

					<p className="text-zinc-500 text-xs sm:text-sm">
						{member.year}기 {member.part}
					</p>
				</div>

				<div className="absolute right-2 bottom-2 rounded-full overflow-hidden">
					<Image
						src={member.image || "/images/mascot.webp"}
						alt={`${member.name} profile` || "mascot"}
						aria-hidden
						width={150}
						height={150}
						className="object-contain p-4 h-[150px]"
					/>
				</div>
			</article>
		</li>
	);
};
