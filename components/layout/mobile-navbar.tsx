"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { COPYRIGHT_TEXT } from "./footer";

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const toggleButtonRef = useRef<HTMLButtonElement>(null);
	const navRef = useRef<HTMLElement>(null);
	const firstFocusableElementRef = useRef<HTMLAnchorElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
		// Return focus to toggle button when menu closes
		toggleButtonRef.current?.focus();
	};

	const menuItems = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
		{ href: "/members", label: "Members" },
		{ href: "/notice", label: "FAQ" },
	];

	// Focus management when menu opens
	useEffect(() => {
		if (isOpen) {
			// Move focus to first navigation link when menu opens
			setTimeout(() => {
				firstFocusableElementRef.current?.focus();
			}, 100);
		}
	}, [isOpen]);

	// Handle keyboard navigation and escape key
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!isOpen) return;

		if (e.key === "Escape") {
			closeMenu();
		}

		// Focus trap implementation
		if (e.key === "Tab") {
			const focusableElements = navRef.current?.querySelectorAll(
				"a[href], button:not([disabled])",
			);
			if (!focusableElements || focusableElements.length === 0) return;

			const firstElement = focusableElements[0] as HTMLElement;
			const lastElement = focusableElements[
				focusableElements.length - 1
			] as HTMLElement;

			if (e.shiftKey && document.activeElement === firstElement) {
				e.preventDefault();
				lastElement.focus();
			} else if (!e.shiftKey && document.activeElement === lastElement) {
				e.preventDefault();
				firstElement.focus();
			}
		}
	};

	// Handle overlay click
	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			closeMenu();
		}
	};

	return (
		<>
			{/* Hamburger Button */}
			<button
				type="button"
				ref={toggleButtonRef}
				onClick={toggleMenu}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggleMenu();
					}
				}}
				className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-gray-900/40 backdrop-blur-md sm:hidden flex items-center justify-center cursor-pointer"
				aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				aria-haspopup="menu"
			>
				{isOpen ? (
					<RxCross2 className="w-5 h-5 text-white" aria-hidden="true" />
				) : (
					<RxHamburgerMenu className="w-5 h-5 text-white" aria-hidden="true" />
				)}
			</button>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] sm:hidden transition-opacity duration-300"
					onClick={handleOverlayClick}
					aria-hidden="true"
				/>
			)}

			{/* Menu Panel */}
			<nav
				ref={navRef}
				id="mobile-navigation"
				className={cn(
					"fixed top-0 right-0 h-full w-[300px] bg-zinc-900/95 backdrop-blur-lg z-[58] sm:hidden",
					"transform transition-transform duration-300 ease-out",
					isOpen ? "translate-x-0" : "translate-x-full",
				)}
				aria-label="Main navigation"
				onKeyDown={handleKeyDown}
			>
				<div className="flex flex-col h-full pt-24 px-8">
					{/* Navigation Links */}
					<ul className="flex flex-col gap-2">
						{menuItems.map((item, index) => (
							<li key={item.href}>
								<Link
									ref={index === 0 ? firstFocusableElementRef : null}
									href={item.href}
									onClick={closeMenu}
									className={cn(
										"flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-all duration-300 hover:scale-95",
										pathname === item.href && "text-green-600",
									)}
									aria-current={pathname === item.href ? "page" : undefined}
								>
									<span className="font-bold text-3xl">{item.label}</span>
									{pathname === item.href && (
										<span className="sr-only">(current page)</span>
									)}
								</Link>
							</li>
						))}
					</ul>

					{/* Footer */}
					<footer className="mt-auto mb-6 pt-6 border-t border-white/10">
						<div className="text-white/60 text-sm">
							<p>{COPYRIGHT_TEXT}</p>
						</div>
					</footer>
				</div>
			</nav>

			{/* Screen reader announcement for menu state */}
			<div
				role="status"
				aria-live="polite"
				aria-atomic="true"
				className="sr-only"
			>
				{isOpen ? "Navigation menu opened" : ""}
			</div>
		</>
	);
};
