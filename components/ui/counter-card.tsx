"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

interface CountUpCardProps {
	title: string;
	endNum: number;
	startNum?: number;
	firstUnit?: string;
	lastUnit?: string;
}

export const CounterCard = ({ title, endNum, lastUnit }: CountUpCardProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<div
			ref={ref}
			className="flex flex-col items-center justify-center w-full md:w-[215px] lg:w-[260px] h-[200px] p-4 gap-4 bg-transparent rounded-2xl"
		>
			<div className="flex items-end justify-center gap-1.5">
				<CountUp
					end={endNum}
					duration={4}
					start={isInView ? 0 : undefined}
					className="text-3xl md:text-4xl font-bold text-zinc-50"
				/>
				<span className="text-3xl md:text-4xl font-bold text-zinc-50">
					{lastUnit}
				</span>
			</div>
			<h3 className="text-sm lg:text-md text-zinc-400">{title}</h3>
		</div>
	);
};
