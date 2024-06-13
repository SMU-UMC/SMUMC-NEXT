'use client';

import { NEWS_INFOS } from '@/constants/info';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsInfo {
	id: string;
	title: string;
	description: string;
	detailImage: string;
	image: string;
	date: string;
}

export const RecentIssue: React.FC = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className='flex-col mt-[200px]'>
			<h1 className='text-green-500 dark:text-green-700- font-bold text-5xl mb-10'>
				PROJECTS
			</h1>
			<h3 className='text-black dark:text-white font-bold text-lg mb-10'>
				University MakeUs Challenge 데모데이 프로젝트 - SMUMC
			</h3>
			<div className='flex flex-col md:flex-row items-center justify-center gap-20'>
				{NEWS_INFOS.map((info, idx) => (
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						transition={{
							ease: 'easeInOut',
							duration: 2,
							y: { duration: 1 },
						}}
						key={info.id}
						className='relative flex flex-col items-center overflow-hidden w-[330px] h-[460px] rounded-[20px] border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-100'
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<img
							src={hoveredIndex === idx ? info.detailImage : info.image}
							alt={info.title}
							className={cn(
								`w-full h-[64%] object-cover transition-transform duration-1000 ${hoveredIndex === idx ? 'scale-105' : 'scale-100'}`
							)}
						/>
						<div className='flex flex-col items-center justify-center p-5 h-[36%] bg-white'>
							<h3 className='font-bold text-[20px] mb-3 text-black'>
								{info.title}
							</h3>
							<div className='w-[90%] text-center text-[13px] mb-2 text-black '>
								{info.description}
							</div>
							<p className='text-center text-[11px] bg-green-200 dark:bg-green-300   font-bold rounded-[15px] p-2'>
								{info.date}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};
