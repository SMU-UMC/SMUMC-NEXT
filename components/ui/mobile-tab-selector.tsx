"use client";

import { cn } from "@/lib/utils";

interface TabItem {
	id: string | number;
	label: string;
}

interface MobileTabSelectorProps {
	items: TabItem[];
	activeId: string | number;
	onTabClick: (id: string | number) => void;
	className?: string;
}

export const MobileTabSelector = ({
	items,
	activeId,
	onTabClick,
	className,
}: MobileTabSelectorProps) => {
	return (
		<nav className={cn("lg:hidden mb-6", className)}>
			<ul className="flex flex-wrap gap-2 justify-center">
				{items.map((item) => (
					<li key={item.id}>
						<button
							onClick={() => onTabClick(item.id)}
							className={cn(
								"px-4 py-2 rounded-full font-medium transition-all text-sm border",
								activeId === item.id
									? "bg-green-50/5 text-green-100 border-green-50/10 "
									: "bg-zinc-50/5 text-zinc-400  border-zinc-50/5",
							)}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
