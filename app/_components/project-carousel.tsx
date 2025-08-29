'use client';

import { PROJECTS } from '@/constants/projects';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ProjectSlideCard } from './project-slide-card';
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
				<div className="flex flex-col items-center justify-center gap-1">
					<h3 className="text-green-300 font-medium text-lg tracking-wider">
						UMC DEMODAY
					</h3>
					<h1 className="font-extrabold text-4xl mb-30">
						세상의 틀을 깬 프로젝트를 만나보세요
					</h1>
				</div>

				{/* 배경 텍스트 - 왼쪽 */}
				<div className="absolute left-0 top-30 pointer-events-none">
					<h2 className="text-[120px] md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500/20 to-blue-500/20 whitespace-nowrap select-none">
						BREAK
					</h2>
				</div>

				{/* 배경 텍스트 - 오른쪽 */}
				<div className="absolute right-0 -bottom-28 pointer-events-none overflow-hidden">
					<h2 className="text-[120px] md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-l from-green-500/20 to-blue-500/20 whitespace-nowrap select-none ">
						THE RULES
					</h2>
				</div>

				<div className="w-full flex flex-col items-center justify-center gap-4 md:w-[80%] w-[90%]">
					<Swiper
						modules={[Autoplay, FreeMode]}
						spaceBetween={4}
						slidesPerView="auto"
						loop={true}
						speed={10000}
						freeMode={true}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							pauseOnMouseEnter: false,
						}}
						allowTouchMove={true}
						grabCursor={true}
						loopAdditionalSlides={2}
						className="!overflow-hidden w-full swiper-continuous-left"
					>
						{[...firstRow, ...firstRow, ...firstRow].map((project, index) => (
							<SwiperSlide key={`first-${index}`} className="!w-[320px]">
								<ProjectSlideCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>

					<Swiper
						modules={[Autoplay, FreeMode]}
						spaceBetween={4}
						slidesPerView="auto"
						loop={true}
						speed={10000}
						freeMode={true}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							pauseOnMouseEnter: false,
							reverseDirection: true,
						}}
						allowTouchMove={true}
						grabCursor={true}
						loopAdditionalSlides={2}
						className="!overflow-hidden w-full swiper-continuous-right"
						dir="rtl"
					>
						{[...secondRow, ...secondRow, ...secondRow].map(
							(project, index) => (
								<SwiperSlide
									key={`second-${index}`}
									className="!w-[320px]"
									dir="ltr"
								>
									<ProjectSlideCard project={project} />
								</SwiperSlide>
							),
						)}
					</Swiper>
				</div>
			</motion.div>
		</section>
	);
};
