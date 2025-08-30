'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ProjectSlideCard } from '@/components/ui/project-slide-card';
import { Project } from '@/types';

interface ProjectCarouselSliderProps {
	projects: Project[];
	direction: 'left' | 'right';
	keyPrefix: string;
}

export const ProjectCarouselSlider = ({
	projects,
	direction,
	keyPrefix,
}: ProjectCarouselSliderProps) => {
	const isRightDirection = direction === 'right';

	return (
		<Swiper
			autoplay={{ delay: 0, disableOnInteraction: false }}
			modules={[Autoplay]}
			loop
			loopAdditionalSlides={1}
			spaceBetween={8}
			centeredSlides
			slidesPerView="auto"
			speed={10000}
			freeMode={true}
			allowTouchMove={true}
			grabCursor={true}
			className={`!overflow-hidden w-full swiper-continuous-${direction}`}
			dir={direction === 'left' ? 'ltr' : 'rtl'}
		>
			{[...projects, ...projects, ...projects].map((project, index) => (
				<SwiperSlide
					key={`${keyPrefix}-${index}`}
					className="!w-[160px] md:!w-[240px] swiper-slide"
					dir={isRightDirection ? 'ltr' : undefined}
				>
					<ProjectSlideCard project={project} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
