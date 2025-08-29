import { Member } from '@/types';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

interface MemberCardProps {
	member: Member;
}

export const MemberCard = ({ member }: MemberCardProps) => {
	return (
		<div className="border border-zinc-200/80  bg-white/80 rounded-xl relative w-full h-56">
			<div className="flex items-center justify-between p-6">
				<div className="flex flex-col justify-center">
					<span className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2 py-1 rounded-md inline-block w-fit mb-2">
						{member.position}
					</span>

					<div className="flex items-center gap-2">
						<h3 className="font-bold text-zinc-900 text-2xl">{member.name}</h3>
						{member.github && (
							<Link
								href={`https://github.com/${member.github}`}
								target="_blank"
							>
								<SiGithub
									className="text-zinc-500 hover:text-zinc-600"
									size={17}
								/>
							</Link>
						)}
					</div>

					<div className="text-zinc-500 text-sm">
						{member.year}기 {member.part}
					</div>
				</div>

				<div className="absolute right-2 bottom-2 rounded-full overflow-hidden">
					<Image
						src="/images/mascot.webp"
						alt="mascot"
						priority
						aria-hidden
						width={150}
						height={150}
						className="object-contain p-4"
					/>
				</div>
			</div>
		</div>
	);
};
