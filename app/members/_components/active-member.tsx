import { MEMBERS } from '@/constants/members';
import { MemberCard } from './member-card';

export const ActiveMember = () => {
	const CURRENT_MEMBERS = MEMBERS.filter((member) => member.year === 6);
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
			{CURRENT_MEMBERS.map((member, idx) => {
				return <MemberCard member={member} />;
			})}
		</div>
	);
};
