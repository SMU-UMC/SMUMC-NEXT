'use client';

import { PROJECTS } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ProjectCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [hover, setHover] = useState<boolean>(false);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? PROJECTS.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === PROJECTS.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!hover) {
				nextSlide();
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [currentIndex, hover]);

	return (
		<>
			<motion.div
				className='mt-[200px]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					y: { duration: 1 },
				}}
			>
				<h1 className='text-green-500 dark:text-green-700- font-bold text-5xl mb-10'>
					PROJECTS
				</h1>
				<h3 className='dark:text-zinc-300 text-black font-bold text-lg'>
					University MakeUs Challenge 데모데이 프로젝트 - SMUMC
				</h3>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					y: { duration: 1 },
				}}
				className='max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div
					style={{
						backgroundImage: `url(${
							PROJECTS[currentIndex]?.img
								? PROJECTS[currentIndex].img
								: '/images/demodayposter.webp'
						})`,
					}}
					className='w-full h-full rounded-2xl bg-center bg-cover duration-500 object-contain'
				/>
				{hover && (
					<div className='absolute top-0 left-0 w-full h-full bg-black/50 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center rounded-2xl p-6'>
						<h2 className='text-white text-3xl font-bold mb-4 text-center'>
							{PROJECTS[currentIndex].name}
						</h2>
						<p className='text-white text-lg mb-4 text-center'>
							{PROJECTS[currentIndex].description}
						</p>
						<div className='flex flex-col justify-center'>
							<p className='text-white text-sm mr-2 mb-2'>
								{PROJECTS[currentIndex].member.map((m, idx) => {
									return (
										<div key={idx} className='flex flex-col gap-10'>
											<h3 className='inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2'>
												{m}
											</h3>
										</div>
									);
								})}
							</p>
							<p className='text-white text-sm mb-2'>
								{PROJECTS[currentIndex].stack.map((s, idx) => (
									<span
										key={idx}
										className='inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2'
									>
										{s}
									</span>
								))}
							</p>
						</div>
					</div>
				)}
				{/* LEFT */}
				<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
					<ChevronLeft size={30} onClick={prevSlide} />
				</div>
				{/* RIGHT */}
				<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
					<ChevronRight size={30} onClick={nextSlide} />
				</div>
				<div className='flex top-4 justify-center mt-20'>
					{PROJECTS.map((_, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className={cn(
								'text-2xl cursor-pointer',
								slideIndex === currentIndex && 'text-green-500'
							)}
						>
							<Dot />
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};
