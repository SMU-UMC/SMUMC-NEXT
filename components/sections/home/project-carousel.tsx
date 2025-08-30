'use client';

import { PROJECTS } from '@/constants/projects';
import { motion } from 'framer-motion';
import { ProjectCarouselHeader } from './project-carousel-header';
import { ProjectCarouselBackground } from './project-carousel-background';
import { ProjectCarouselSlider } from './project-carousel-slider';
import 'swiper/css';
import 'swiper/css/free-mode';

export const ProjectCarousel = () => {
	// 프로젝트를 두 그룹으로 나누기
	const halfIndex = Math.ceil(PROJECTS.length / 2);
	const firstRow = PROJECTS.slice(0, halfIndex);
	const secondRow = PROJECTS.slice(halfIndex);

	return (
		<section className="flex flex-col items-center justify-center gap-4 w-full">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					y: { duration: 1 },
				}}
				className="w-full py-16 space-y-4 flex flex-col items-center justify-center relative"
			>
				<ProjectCarouselHeader />
				<ProjectCarouselBackground />

				<div className="w-full flex flex-col items-center justify-center gap-4 md:w-[80%] w-[90%]">
					<ProjectCarouselSlider
						swiper-wrapper
						projects={firstRow}
						direction="left"
						keyPrefix="first"
					/>
					<ProjectCarouselSlider
						swiper-wrapper
						projects={secondRow}
						direction="right"
						keyPrefix="second"
					/>
				</div>
			</motion.div>
		</section>
	);
};
