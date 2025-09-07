"use client";

import { LayoutGroup, motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileTabSelector } from "./mobile-tab-selector";

interface TabItem {
	id: string | number;
	label: string;
	content: ReactNode;
}

interface TabSelectorProps {
	items: TabItem[];
	className?: string;
	tabClassName?: string;
	contentClassName?: string;
	activeColor?: string;
	defaultActiveId?: string | number;
	tabContainerClassName?: string;
	onTabChange?: (id: string | number) => void;
	useMobileTab?: boolean;
}

export const TabSelector = ({
	items,
	className,
	tabClassName,
	activeColor = "bg-zinc-600",
	defaultActiveId,
	contentClassName,
	tabContainerClassName,
	onTabChange,
	useMobileTab = true,
}: TabSelectorProps) => {
	const [activeId, setActiveId] = useState<string | number>(
		defaultActiveId || items[0]?.id || 0,
	);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		requestAnimationFrame(() => {
			setIsClient(true);
		});
	}, []);

	const handleTabClick = (id: string | number) => {
		setActiveId(id);
		onTabChange?.(id);
	};

	const handleKeyDown = (event: React.KeyboardEvent, id: string | number) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleTabClick(id);
		}
	};

	const activeItem = items.find((item) => item.id === activeId);

	return (
		<div className={cn("w-full", className)}>
			{/* Mobile Tabs - only render if useMobileTab is true */}
			{useMobileTab && (
				<MobileTabSelector
					items={items}
					activeId={activeId}
					onTabClick={handleTabClick}
				/>
			)}

			{/* Desktop/Regular Tab Bar */}
			<div
				className={cn(
					"relative bg-gray-50/5 rounded-full p-1 mb-6 max-w-fit mx-auto",
					useMobileTab && "hidden lg:block",
					tabContainerClassName,
				)}
			>
				<LayoutGroup>
					<ul className="flex gap-1 list-none">
						{items.map((item) => (
							<li key={item.id}>
								<motion.button
									type="button"
									onClick={() => handleTabClick(item.id)}
									onKeyDown={(e) => handleKeyDown(e, item.id)}
									className={cn(
										"relative px-8 py-3 rounded-full font-medium transition-colors cursor-pointer",
										tabClassName,
									)}
									role="tab"
									aria-selected={activeId === item.id}
									aria-controls={`tabpanel-${item.id}`}
									id={`tab-${item.id}`}
									tabIndex={activeId === item.id ? 0 : -1}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									transition={{ type: "spring", stiffness: 400, damping: 25 }}
								>
									{activeId === item.id && isClient && (
										<motion.div
											layoutId="activeTab"
											className={cn(
												"absolute inset-0 rounded-full shadow-lg",
												activeColor,
											)}
											initial={false}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 30,
											}}
										/>
									)}
									<span
										className={cn(
											"relative z-10 transition-colors font-semibold text-zinc-600 text-sm sm:text-base",
											activeId === item.id && "text-white",
										)}
									>
										{item.label}
									</span>
								</motion.button>
							</li>
						))}
					</ul>
				</LayoutGroup>
			</div>

			<div
				className={cn(
					"p-8 min-h-[200px] rounded-2xl border border-gray-50/5 bg-gray-50/2 flex items-center justify-center",
					contentClassName,
				)}
				role="tabpanel"
				id={`tabpanel-${activeId}`}
				aria-labelledby={`tab-${activeId}`}
			>
				{activeItem?.content}
			</div>
		</div>
	);
};
