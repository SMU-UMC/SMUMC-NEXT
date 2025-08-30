import { MembersFilter } from "@/components/sections/members/members-filter";

interface MembersPageProps {
	searchParams: Promise<{ all?: string }>;
}

const MembersPage = async ({ searchParams }: MembersPageProps) => {
	const params = await searchParams;
	const isAllTab = params.all === "true";

	return (
		<main className="min-h-full flex flex-col justify-center items-center bg-green-50 py-36 sm:py-44">
			<MembersFilter defaultTab={isAllTab ? "member-list" : "active-member"} />
		</main>
	);
};

export default MembersPage;
