'use client';

import { PART } from '@/constants/part';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const TabItem = ({
	id,
	part,
	current,
	toggle,
}: {
	id: number;
	part: string;
	current: boolean;
	toggle: () => void;
}) => {
	return (
		<li
			key={id}
			onClick={toggle}
			className={cn(
				'cursor-pointer py-2 px-3 rounded-2xl font-bold',
				current && 'border-b shadow-sm bg-green-400',
			)}
		>
			{part}
		</li>
	);
};

export const PartInfo = () => {
	const [currentId, setCurrentId] = useState<number | null>(PART[0].id);
	const { scrollY } = useScroll();
	const yCity = useTransform(scrollY, [0, 200], [0, -100]);
	const opacityCity = useTransform(
		scrollY,
		[0, 200, 300, 500],
		[1, 0.5, 0.2, 0],
	);

	const toggleItem = (id: number) => () => {
		setCurrentId(prev => (prev === id ? null : id));
	};
	const currentData = PART.find(item => item.id === currentId)?.description;

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
		>
			<h1 className="text-3xl font-bold  mt-[200px]">
				총 <b className="text-green-500">6개</b>의 파트로 구성
			</h1>
			<div>
				<ul className="flex flex-row gap-10 items-center justify-center py-10 flex-wrap">
					{PART.map(d => (
						<TabItem
							{...d}
							key={d.id}
							current={currentId === d.id}
							toggle={toggleItem(d.id)}
						/>
					))}
				</ul>
				<div className="bg-[#E3E1E2] h-[200px] rounded-2xl flex items-center justify-center px-10">
					<p className="text-xl font-bold text-gray-700">{currentData || ''}</p>
				</div>
			</div>
		</motion.div>
	);
};
