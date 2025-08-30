'use client';

import { PART } from '@/constants/part';
import { TabSelector } from '@/components/ui/tab-selector';
import { motion } from 'framer-motion';

export const PartInfo = () => {
	const tabItems = PART.map(part => ({
		id: part.id,
		label: part.part,
		content: (
			<p className="text-md font-normal text-zinc-200 text-center max-w-2xl">
				{part.description}
			</p>
		),
	}));

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
			className="flex flex-col gap-10 justify-center items-center"
		>
			<h1 className="text-center text-2xl md:text-3xl font-bold leading-normal break-keep">
				6개월 간의{' '}
				<strong className="font-black relative">
					열정과 끈기
					<span className="absolute bottom-0 left-0 right-0 h-[50%] bg-yellow-400/40 -z-10" />
				</strong>
				로 성장할 챌린저들과 <br /> "실제로 동작하는 서비스를 만들어보자!"라는
				목표를 향해 달립니다
			</h1>

			<TabSelector items={tabItems} defaultActiveId={PART[0].id} />
		</motion.section>
	);
};
