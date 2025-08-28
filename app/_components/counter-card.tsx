'use client';

import CountUp from 'react-countup';
import React from 'react';

interface CountUpCardProps {
	title: string;
	endNum: number;
	startNum?: number;
	firstUnit?: string;
	lastUnit?: string;
}

export const CounterCard = ({ title, endNum }: CountUpCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center w-full md:w-[215px] lg:w-[260px] h-[200px] p-4 gap-4 bg-transparent rounded-2xl">
			<CountUp
				end={endNum}
				duration={7}
				className="text-4xl font-bold text-zinc-50"
			/>
			<h3 className="text-sm lg:text-md text-zinc-400">{title}</h3>
		</div>
	);
};
