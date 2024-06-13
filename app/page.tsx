import { Hero } from './_components/hero';
import { InfoBox } from './_components/info-box';
import { PartInfo } from './_components/part-info';
import { ProjectCarousel } from './_components/project-carousel';
import { RecentIssue } from './_components/recent-issue';

const HomePage = () => {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20'>
				<Hero />
				<InfoBox />
				<PartInfo />
				<ProjectCarousel />
				<RecentIssue />
			</div>
		</div>
	);
};

export default HomePage;
