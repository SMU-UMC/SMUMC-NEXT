'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GradientButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'relative px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer flex items-center justify-center gap-2',
					'bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium',
					'transition-all duration-500 hover:from-gray-800 hover:to-gray-700',
					className,
				)}
				{...props}
			>
				<div
					className="absolute -inset-[1px] rounded-xl overflow-hidden pointer-events-none -z-10"
					aria-hidden="true"
				>
					<div className="absolute  -top-40 -left-10 w-56 h-56 gradient-conic-white animate-rotate-mirror rounded-full opacity-70 blur-md" />
				</div>

				{children}
			</button>
		);
	},
);

GradientButton.displayName = 'GradientButton';

export { GradientButton };
