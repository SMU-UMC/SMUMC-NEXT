import type { Metadata } from "next";
import { FilterProjects } from "@/components/sections/projects/filter-projects";

export const metadata: Metadata = {
	title: "프로젝트 | SMUMC",
	description: "SMUMC에서 진행한 다양한 프로젝트들을 확인해보세요.",
	openGraph: {
		title: "프로젝트 | SMUMC",
		description: "SMUMC에서 진행한 다양한 프로젝트들을 확인해보세요.",
		type: "website",
	},
};

interface ProjectPageProps {
	searchParams: Promise<{ tag?: string }>;
}

const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
	const params = await searchParams;
	const tag = params.tag || "All";

	return (
		<div className="min-h-full flex flex-col py-40">
			<div className="mb-8">
				<h1 className="sr-only">프로젝트</h1>
			</div>
			<FilterProjects defaultTag={tag} />
		</div>
	);
};

export default ProjectPage;
