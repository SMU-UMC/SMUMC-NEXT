'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { RxNotionLogo } from 'react-icons/rx';

export const Footer = () => {
	return (
		<div className="flex items-center justify-between w-full py-6 px-10 z-50">
			<p className="text-zinc-300 text-sm">© SMUMC 2025.</p>
			<div className="flex items-center gap-x-2">
				<SnsLink href={'https://www.instagram.com/smu_makeus_challenge/'}>
					<FaInstagram />
				</SnsLink>
				<SnsLink
					href={'https://www.notion.so/32ddbcde1075427ab516333993806785?pvs=21'}
				>
					<RxNotionLogo />
				</SnsLink>
			</div>
		</div>
	);
};

const SnsLink = ({ href, children }: { href: string; children: ReactNode }) => {
	return (
		<Link
			href={href}
			target="_blank"
			className="bg-zinc-800 rounded-full p-2 text-zinc-400 hover:text-zinc-200 transition-all duration-300"
		>
			{children}
		</Link>
	);
};
