'use client';

import Image from 'next/image';

export const Hero = () => {
	return (
		<div className="mt-52">
			<div className="flex flex-col justify-center items-center gap-5">
				<Image
					src="/images/logo.webp"
					height="400"
					width="500"
					alt="Logo"
					className="object-contain aspect-[1.5/1]"
				/>
				<span className="text-zinc-300 text-md animate-float opacity-80">
					앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리
				</span>
			</div>
		</div>
	);
};
