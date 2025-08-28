'use client';

import Image from 'next/image';
import { CounterCard } from './counter-card';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const listVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: 50,
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

export const InfoBox = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
			className="relative flex flex-col items-center max-w-4xl gap-8 rounded-2xl"
		>
			<div className="relative w-full">
				<h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-8xl font-black text-center tracking-wide text-zinc-600/15 animate-float select-none pointer-events-none -mt-30">
					Break The Rules
				</h1>
				<h2 className="relative text-center text-2xl md:text-3xl font-bold leading-normal break-keep z-10">
					아이디어를 현실로!
					<br />
					전국 대학생 IT 연합
					<strong className="font-bold text-green-500"> UMC</strong>에서
					여러분을 기다립니다.
				</h2>
			</div>
			<AnimatePresence>
				<motion.ul
					key="list1"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={listVariants}
					className="w-full flex flex-wrap gap-2 justify-center items-center px-4 md:px-0"
				>
					{[
						'스터디',
						'해커톤',
						'미니 프로젝트',
						'데모데이',
						'파트별 컨퍼런스',
					].map((text, idx) => (
						<motion.li
							key={idx}
							variants={itemVariants}
							transition={{ type: 'spring' }}
							className=" bg-green-50/5 px-4 py-2 rounded-2xl border border-green-50/10"
						>
							<h3 className="text-green-100 text-xs">{text}</h3>
						</motion.li>
					))}
				</motion.ul>
			</AnimatePresence>

			<div className="flex gap-5 flex-col md:flex-row gradient-green-fade border border-green-50/1 rounded-2xl p-4 w-full">
				<CounterCard
					title="함께한 시간이 쌓아온 ‘연대’"
					endNum={186}
					lastUnit="명"
				/>
				<CounterCard title="현재가 말해주는 ‘열정’" endNum={41} lastUnit="명" />
				<CounterCard
					title="기수가 증명하는 ‘지속성’"
					endNum={9}
					lastUnit="기"
				/>
			</div>
		</motion.div>
	);
};
