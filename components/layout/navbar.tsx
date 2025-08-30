'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { HiOutlineFire } from 'react-icons/hi2';
import { MobileNavbar } from './mobile-navbar';

export const Navbar = () => {
	return (
		<>
			{/* Desktop Navigation */}
			<header
				className={cn(
					'z-50 fixed top-0 hidden sm:flex items-center justify-between w-full p-10',
				)}
			>
				<nav className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900/40 backdrop-blur-md rounded-full p-2 flex items-center gap-x-2">
					<NavLink href="/">
						<HiOutlineFire size={20} />
					</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/members">Members</NavLink>
					<NavLink href="/notice">FAQ</NavLink>
				</nav>
			</header>
			{/* Mobile Navigation */}
			<MobileNavbar />
		</>
	);
};

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				'px-6 py-3 rounded-full transition-all text-sm font-medium text-white hover:text-gray-300',
				pathname === href && 'bg-green-600',
			)}
		>
			{children}
		</Link>
	);
};
