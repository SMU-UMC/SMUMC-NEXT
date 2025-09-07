import { Hero } from "@/components/sections/home/hero";
import { InfoBox } from "@/components/sections/home/info-box";
import { PartInfo } from "@/components/sections/home/part-info";
import { ProjectCarousel } from "@/components/sections/home/project-carousel";

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
