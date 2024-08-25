'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
	const { scrollY } = useScroll();

	const yCity = useTransform(scrollY, [0, 200], [0, -100]);
	const opacityCity = useTransform(
		scrollY,
		[0, 200, 300, 500],
		[1, 0.5, 0.2, 0],
	);

	const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
	const xText = useTransform(scrollY, [0, 200], [0, -250]);

	return (
		<div className="max-w-3xl space-y-4 mt-[180px]">
			<div className="flex flex-col md:flex-row justify-center items-center gap-10">
				<motion.div
					style={{ opacity: opacityCity, y: yCity }}
					transition={{
						ease: 'easeInOut',
						duration: 2,
						y: { duration: 1 },
					}}
				>
					<Image
						src="/images/main-logo.webp"
						height="400"
						width="400"
						alt="Logo"
						className="hidden dark:block object-contain"
					/>
				</motion.div>
				<motion.div style={{ opacity: opacityCity, y: yCity }}>
					<Image
						src={'/images/main-light-logo.webp'}
						height="400"
						width="400"
						alt="Logo"
						className="dark:hidden object-contain"
					/>
				</motion.div>
				<motion.div
					className="flex flex-col justify-center items-center gap-5"
					style={{ scale: scaleText, y: xText }}
				>
					<h1 className="text-6xl font-bold text-left">
						<b className="text-green-400 animate-blink">U</b>niversity <br />
						<b className="text-green-400 animate-blink">M</b>akeUs <br />
						<b className="text-green-400 animate-blink">C</b>hallenge <br />
					</h1>
					<p className="text-sm font-bold">
						<b className="text-green-300 animate-blink">앱&웹 서비스 런칭</b>에
						<b className="text-green-300 animate-blink"> 도전</b>
						하는 대학생 IT 연합동아리
					</p>
					<Button
						variant="ghost"
						className="bg-green-200 text-black rounded-2xl font-bold background-blink"
						onClick={() => {
							window.open('https://forms.gle/CQneU5oj8XBHbrGa7', '_blank');
						}}
					>
						🔥 7기 모집 진행중 🔥
					</Button>
				</motion.div>
			</div>
		</div>
	);
};
