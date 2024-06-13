'use client';

import { useEffect, useState } from 'react';

interface CountUpCardProps {
	title: string;
	endNum: number;
	startNum?: number;
	firstUnit?: string;
	lastUnit?: string;
}

const counter = (
	setCount: React.Dispatch<React.SetStateAction<number>>,
	start: number,
	end: number
) => {
	let now = start;
	const handle = setInterval(() => {
		setCount(Math.ceil(now));
		if (now >= end) {
			clearInterval(handle);
		}
		const step = (end - start) / 20;
		now += step;
	}, 300);
};

export const CounterCard: React.FC<CountUpCardProps> = ({
	title,
	endNum,
	startNum = 0,
	firstUnit,
	lastUnit,
}) => {
	const [count, setCount] = useState(startNum);

	useEffect(() => {
		counter(setCount, startNum, endNum);
	}, [startNum, endNum]);

	return (
		<div className='flex flex-col items-center bg-gray-100 rounded-2xl w-72 h-56 gap-2 p-4'>
			<h3 className='font-bold text-xl text-gray-800'>{title}</h3>
			<div className='flex items-center'>
				{firstUnit && <span className='font-bold text-6xl'>{firstUnit}</span>}
				<span className='font-bold text-6xl'>{count}</span>
				{lastUnit && <span className='font-bold text-6xl'>{lastUnit}</span>}
			</div>
		</div>
	);
};
