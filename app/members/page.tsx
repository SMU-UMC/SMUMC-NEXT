import type { Metadata } from "next";
import { MembersFilter } from "@/components/sections/members/members-filter";

export const metadata: Metadata = {
	title: "멤버 | SMUMC",
	description:
		"SMUMC의 멤버들을 만나보세요. 활동 중인 멤버와 전체 멤버를 확인할 수 있습니다.",
	openGraph: {
		title: "멤버 | SMUMC",
		description:
			"SMUMC의 멤버들을 만나보세요. 활동 중인 멤버와 전체 멤버를 확인할 수 있습니다.",
		type: "website",
	},
};

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
