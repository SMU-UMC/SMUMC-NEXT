import { MEMBERS } from '@/constants/members';
import { MemberCard } from '@/components/ui/member-card';

const CURRENT_YEAR = 8;

export const ActiveMember = () => {
	const CURRENT_MEMBERS = MEMBERS.filter(
		member => member.year === CURRENT_YEAR,
	);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
			{CURRENT_MEMBERS.map(member => {
				return <MemberCard member={member} key={member.id} />;
			})}
		</div>
	);
};
