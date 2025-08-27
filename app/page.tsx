import { Hero } from './_components/hero';

const HomePage = () => {
	return (
		<div className="min-h-full flex flex-col">
			<div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20">
				<Hero />
				{/* <InfoBox />
				<PartInfo />
				<ProjectCarousel />
				<RecentIssue /> */}
			</div>
		</div>
	);
};

export default HomePage;
