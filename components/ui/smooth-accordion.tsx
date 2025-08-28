'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface AccordionItemProps {
	title: string;
	children: React.ReactNode;
	isOpen?: boolean;
	onToggle?: () => void;
	className?: string;
}

export const SmoothAccordionItem = React.forwardRef<
	HTMLDivElement,
	AccordionItemProps
>(({ title, children, isOpen = false, onToggle, className }, ref) => {
	const [internalOpen, setInternalOpen] = React.useState(false);
	const actuallyOpen = isOpen !== undefined ? isOpen : internalOpen;

	const handleToggle = () => {
		if (onToggle) {
			onToggle();
		} else {
			setInternalOpen(!internalOpen);
		}
	};

	return (
		<div ref={ref} className={cn('border-b', className)}>
			<button
				onClick={handleToggle}
				className="flex w-full items-center justify-between py-4 font-medium group text-left hover:cursor-pointer"
			>
				<span className="text-md sm:text-xl font-bold text-zinc-700 hover:text-zinc-500 transition-all">
					{title}
				</span>
				<div className="relative size-12 shrink-0">
					<motion.span
						animate={{
							rotate: actuallyOpen ? 90 : 0,
							opacity: actuallyOpen ? 0 : 1,
						}}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="absolute inset-0 flex items-center justify-center text-lg"
					>
						<FiPlus size={20} />
					</motion.span>
					<motion.span
						animate={{
							rotate: actuallyOpen ? 0 : 90,
							opacity: actuallyOpen ? 1 : 0,
						}}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="absolute inset-0 flex items-center justify-center text-lg"
					>
						<FiMinus size={20} />
					</motion.span>
				</div>
			</button>

			<AnimatePresence initial={false}>
				{actuallyOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: 'auto',
							opacity: 1,
							transition: {
								height: { duration: 0.3, ease: 'easeOut' },
								opacity: { duration: 0.2, delay: 0.1 },
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: { duration: 0.3, ease: 'easeIn' },
								opacity: { duration: 0.2 },
							},
						}}
						className="overflow-hidden"
					>
						<div className="pb-4 pt-0">{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
});

SmoothAccordionItem.displayName = 'SmoothAccordionItem';

interface SmoothAccordionProps {
	children: React.ReactNode;
	type?: 'single' | 'multiple';
	className?: string;
}

export const SmoothAccordion: React.FC<SmoothAccordionProps> = ({
	children,
	type = 'single',
	className,
}) => {
	const [openItems, setOpenItems] = React.useState<number[]>([]);

	const handleToggle = (index: number) => {
		if (type === 'single') {
			setOpenItems(openItems.includes(index) ? [] : [index]);
		} else {
			setOpenItems(
				openItems.includes(index)
					? openItems.filter(i => i !== index)
					: [...openItems, index],
			);
		}
	};

	return (
		<div className={className}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						isOpen: openItems.includes(index),
						onToggle: () => handleToggle(index),
					} as any);
				}
				return child;
			})}
		</div>
	);
};
