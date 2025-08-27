'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="flex items-center justify-between w-full py-6 px-10 z-50">
			<p className="text-zinc-300 text-sm">© SMUMC 2025.</p>
			<div className="flex items-center gap-x-2">
				<Link
					href={'https://www.instagram.com/smu_makeus_challenge/'}
					target="_blank"
					className="bg-zinc-800 rounded-full p-2 text-zinc-400 hover:text-zinc-200 transition-all duration-300"
				>
					<FaInstagram />
				</Link>
			</div>
		</div>
	);
};
