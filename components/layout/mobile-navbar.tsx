'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HiOutlineFire } from 'react-icons/hi2';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { COPYRIGHT_TEXT } from './footer';

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const menuItems = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/members', label: 'Members' },
		{ href: '/notice', label: 'FAQ' },
	];

	return (
		<>
			{/* Hamburger Button */}
			<button
				onClick={toggleMenu}
				className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-gray-900/40 backdrop-blur-md sm:hidden flex items-center justify-center cursor-pointer"
				aria-label="Toggle menu"
			>
				{isOpen ? (
					<RxCross2 className="w-5 h-5 text-white" />
				) : (
					<RxHamburgerMenu className="w-5 h-5 text-white" />
				)}
			</button>

			{/* Overlay */}
			<div
				className={cn(
					'fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] sm:hidden transition-opacity duration-300',
					isOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none',
				)}
				onClick={closeMenu}
			/>

			{/* Menu Panel */}
			<nav
				className={cn(
					'fixed top-0 right-0 h-full w-[300px] bg-zinc-900/95 backdrop-blur-lg z-[58] sm:hidden',
					'transform transition-transform duration-300 ease-out',
					isOpen ? 'translate-x-0' : 'translate-x-full',
				)}
			>
				<div className="flex flex-col h-full pt-24 px-8">
					<div className="flex flex-col gap-2">
						{menuItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								onClick={closeMenu}
								className={cn(
									'flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-all duration-300 hover:scale-95',
									pathname === item.href && 'text-green-600',
								)}
							>
								<span className="font-bold text-3xl">{item.label}</span>
							</Link>
						))}
					</div>

					{/* Footer */}
					<div className="mt-auto mb-6 pt-6 border-t border-white/10">
						<div className="text-white/60 text-sm">
							<p>{COPYRIGHT_TEXT}</p>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
