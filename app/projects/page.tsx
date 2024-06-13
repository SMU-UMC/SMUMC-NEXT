import { Suspense } from 'react';
import { FilterProjects } from './_components/filter-projects';

const ProjectPage = () => {
	return (
		<div className="min-h-full flex flex-col">
			<div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20">
				<Suspense fallback={<div>Loading...</div>}>
					<FilterProjects />
				</Suspense>
			</div>
		</div>
	);
};

export default ProjectPage;
