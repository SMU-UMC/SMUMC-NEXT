"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SNS_LINKS } from "@/constants/sns";
import { cn } from "@/lib/utils";

export const COPYRIGHT_TEXT = "© SMUMC 2025.";

export const Footer = () => {
	const pathname = usePathname();

	const isNoticePage = pathname === "/notice";
	const isMemberPage = pathname === "/members";

	return (
		<footer
			className={cn(
				"flex items-center justify-between w-full py-6 px-10 z-50",
				isNoticePage && "bg-zinc-50",
				isMemberPage && "bg-green-50",
			)}
		>
			<p
				className={cn(
					"text-sm text-zinc-300",
					(isNoticePage || isMemberPage) && "text-zinc-600",
				)}
			>
				{COPYRIGHT_TEXT}
			</p>
			<nav className="flex items-center gap-x-2" aria-label="소셜 미디어 링크">
				<SnsLink
					href={SNS_LINKS.instagram}
					isLight={isNoticePage || isMemberPage}
				>
					<FaInstagram />
				</SnsLink>
				<SnsLink href={SNS_LINKS.kakao} isLight={isNoticePage || isMemberPage}>
					<RiKakaoTalkFill />
				</SnsLink>
			</nav>
		</footer>
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
				"rounded-full p-2 transition-all duration-300 bg-zinc-800 text-zinc-400 hover:text-zinc-200",
				isLight &&
					"bg-transparent text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200",
			)}
		>
			{children}
		</Link>
	);
};
