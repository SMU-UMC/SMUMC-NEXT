import { FilterProjects } from './_components/FilterProjects';

const ProjectPage = () => {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20'>
				<FilterProjects />
			</div>
		</div>
	);
};

export default ProjectPage;
