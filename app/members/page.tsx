import { MembersFilter } from '@/components/sections/members/members-filter';

const MembersPage = () => {
	return (
		<main className="min-h-full flex flex-col justify-center items-center bg-green-50 py-36 sm:py-44">
			<MembersFilter />
		</main>
	);
};

export default MembersPage;
