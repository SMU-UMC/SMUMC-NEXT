"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { HiOutlineFire } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { MobileNavbar } from "./mobile-navbar";

export const Navbar = () => {
	return (
		<>
			{/* Desktop Navigation */}
			<nav
				className={cn(
					"z-50 fixed top-0 hidden sm:flex items-center justify-between w-full p-10",
				)}
			>
				<ul
					className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900/40 backdrop-blur-md rounded-full p-2 flex items-center gap-x-2"
					aria-label="주 메뉴"
				>
					<NavLink href="/" aria-label="홈">
						<HiOutlineFire size={20} aria-hidden="true" />
					</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/members">Members</NavLink>
					<NavLink href="/notice">FAQ</NavLink>
				</ul>
			</nav>
			{/* Mobile Navigation */}
			<MobileNavbar />
		</>
	);
};

const NavLink = ({
	href,
	children,
	"aria-label": ariaLabel,
}: {
	href: string;
	children: ReactNode;
	"aria-label"?: string;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li>
			<Link
				className={cn(
					"block rounded-full transition-all text-sm font-medium text-white hover:text-gray-300 px-6 py-3",
					isActive && "bg-green-600",
				)}
				href={href}
				aria-label={ariaLabel}
				aria-current={isActive ? "page" : undefined}
			>
				{children}
			</Link>
		</li>
	);
};
