import { FiArrowUpRight } from 'react-icons/fi';

import { GradientButton } from '@/components/ui/gradient-button';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className="flex flex-col justify-center items-center gap-1 mt-50">
			<Image
				priority
				src="/images/logo.webp"
				height="400"
				width="500"
				alt="Logo"
				className="object-contain aspect-[1.5/1]"
			/>
			<span className="text-zinc-300 text-md animate-float opacity-80 mb-4">
				앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리
			</span>
			<GradientButton asChild>
				<Link
					href="https://docs.google.com/forms/d/e/1FAIpQLSei6kktqYxR2cHaD45IVb2p6j9laV-C39LaZuNsz8O87HQSow/viewform"
					target="_blank"
				>
					9기 모집중 <FiArrowUpRight />
				</Link>
			</GradientButton>
		</section>
	);
};
