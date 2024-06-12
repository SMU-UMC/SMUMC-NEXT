'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
});

const Logo = () => {
	const router = useRouter();
	return (
		<div
			className='hidden md:flex items-center gap-x-2 cursor-pointer'
			onClick={() => router.push('/')}
		>
			<Image
				src='/images/main-light-logo.webp'
				height='40'
				width='40'
				alt='Logo'
				className='dark:hidden'
			/>
			<Image
				src='/images/main-logo.webp'
				height='40'
				width='40'
				alt='Logo'
				className='hidden dark:block'
			/>
			<p className={cn('font-semibold', font.className)}>SMUMC</p>
		</div>
	);
};

export default Logo;
