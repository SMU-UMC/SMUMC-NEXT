import { Member } from '@/types/domain';
import { BiSolidCrown } from 'react-icons/bi';

import Image from 'next/image';

interface MemberCardProps {
	member: Member;
}

export const MemberCard = ({ member }: MemberCardProps) => {
	return (
		<div className="flex flex-col items-center w-[200px] h-[300px] p-3 bg-[#E3E1E2] relative gap-10 rounded-2xl">
			<div className="flex flex-col items-center justify-center mt-10 relative">
				<Image
					src={member.sex === 'w' ? '/images/woman.png' : '/images/man.png'}
					alt={member.name}
					width={105}
					height={105}
					className="object-cover border-white border rounded-full"
				/>
				{member.position !== '챌린저' && (
					<BiSolidCrown color="#E6A912" className="absolute top-[-16px] " />
				)}
			</div>
			<div className="">
				<h3 className="mb-2 text-green-800 font-bold">{member.position}</h3>
				<h3 className="font-bold text-slate-700 text-xl">{member.name}</h3>
				<div className="text-green-800 text-sm">
					{member.year}기 {member.part}
				</div>
			</div>
		</div>
	);
};
