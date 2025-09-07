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
	const handleKeyDown = (
		event: React.KeyboardEvent,
		itemId: string | number,
	) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			onTabClick(itemId);
		}
	};

	return (
		<div className={cn("lg:hidden mb-6", className)}>
			<ul
				className="flex flex-wrap gap-2 justify-center list-none"
				aria-label="Mobile navigation tabs"
			>
				{items.map((item) => (
					<li key={item.id}>
						<button
							type="button"
							onClick={() => onTabClick(item.id)}
							onKeyDown={(e) => handleKeyDown(e, item.id)}
							className={cn(
								"px-4 py-2 rounded-full font-medium transition-all text-sm border cursor-pointer",
								"",
								activeId === item.id
									? "bg-green-50/5 text-green-100 border-green-50/10"
									: "bg-zinc-50/5 text-zinc-400 border-zinc-50/5",
							)}
							role="tab"
							aria-selected={activeId === item.id}
							aria-controls={`tabpanel-${item.id}`}
							id={`tab-${item.id}`}
							tabIndex={activeId === item.id ? 0 : -1}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
