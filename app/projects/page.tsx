import { FilterProjects } from "@/components/sections/projects/filter-projects";

interface ProjectPageProps {
	searchParams: Promise<{ tag?: string }>;
}

const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
	const params = await searchParams;
	const tag = params.tag || "All";

	return (
		<main className="min-h-full flex flex-col py-40">
			<FilterProjects defaultTag={tag} />
		</main>
	);
};

export default ProjectPage;
