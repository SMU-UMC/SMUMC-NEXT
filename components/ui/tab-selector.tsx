'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

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
}

export const TabSelector = ({
	items,
	className,
	tabClassName,
	activeColor = 'bg-zinc-600',
	defaultActiveId,
}: TabSelectorProps) => {
	const [activeId, setActiveId] = useState<string | number>(
		defaultActiveId || items[0]?.id || 0,
	);

	const activeItem = items.find(item => item.id === activeId);

	return (
		<div className={cn('w-full', className)}>
			<div className="relative bg-gray-50/5 rounded-full p-1 mb-6 max-w-fit mx-auto">
				<div className="flex gap-1">
					{items.map(item => (
						<motion.button
							key={item.id}
							onClick={() => setActiveId(item.id)}
							className={cn(
								'relative px-8 py-3 rounded-full font-medium transition-colors',
								tabClassName,
							)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 25 }}
						>
							{activeId === item.id && (
								<motion.div
									layoutId="activeTab"
									className={cn(
										'absolute inset-0 rounded-full shadow-lg',
										activeColor,
									)}
									transition={{
										type: 'spring',
										stiffness: 400,
										damping: 30,
									}}
								/>
							)}
							<span
								className={cn(
									'relative z-10 transition-colors font-semibold text-zinc-600',
									activeId === item.id && 'text-white',
								)}
							>
								{item.label}
							</span>
						</motion.button>
					))}
				</div>
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={activeId}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{
						type: 'tween',
						duration: 0.3,
					}}
					className={cn(
						'p-8 min-h-[200px] rounded-2xl border border-gray-50/5 bg-gray-50/2 flex items-center justify-center',
					)}
				>
					{activeItem?.content}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
