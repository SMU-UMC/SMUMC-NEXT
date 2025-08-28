'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { RxNotionLogo } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const Footer = () => {
	const pathname = usePathname();
	const isNoticePage = pathname === '/notice';
	const isMemberPage = pathname === '/members';

	return (
		<div
			className={cn(
				'flex items-center justify-between w-full py-6 px-10 z-50',
				isNoticePage && 'bg-zinc-50',
				isMemberPage && 'bg-green-50',
			)}
		>
			<p
				className={cn(
					'text-sm text-zinc-300',
					(isNoticePage || isMemberPage) && 'text-zinc-600',
				)}
			>
				© SMUMC 2025.
			</p>
			<div className="flex items-center gap-x-2">
				<SnsLink
					href={'https://www.instagram.com/smu_makeus_challenge/'}
					isLight={isNoticePage || isMemberPage}
				>
					<FaInstagram />
				</SnsLink>
				<SnsLink
					href={'https://open.kakao.com/o/s0RE3nIh'}
					isLight={isNoticePage || isMemberPage}
				>
					<RiKakaoTalkFill />
				</SnsLink>
			</div>
		</div>
	);
};

const SnsLink = ({
	href,
	children,
	isLight = false,
}: {
	href: string;
	children: ReactNode;
	isLight?: boolean;
}) => {
	return (
		<Link
			href={href}
			target="_blank"
			className={cn(
				'rounded-full p-2 transition-all duration-300',
				isLight
					? 'bg-transparent text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200'
					: 'bg-zinc-800 text-zinc-400 hover:text-zinc-200',
			)}
		>
			{children}
		</Link>
	);
};
