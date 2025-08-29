import { Hero } from './_components/hero';
import { InfoBox } from './_components/info-box';
import { PartInfo } from './_components/part-info';
import { ProjectCarousel } from './_components/project-carousel';

const HomePage = () => {
	return (
		<div className="flex flex-col items-center justify-center px-6 pb-50 gap-100 min-h-full">
			<Hero />
			<InfoBox />
			<PartInfo />
			<ProjectCarousel />
		</div>
	);
};

export default HomePage;
