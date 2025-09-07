"use client";

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	asChild?: boolean;
	loading?: boolean;
	loadingText?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
	(
		{
			className,
			children,
			asChild = false,
			loading = false,
			loadingText = "Loading...",
			disabled,
			...props
		},
		ref,
	) => {
		const isDisabled = disabled || loading;

		const gradientElement = (
			<div
				className="absolute -inset-[1px] rounded-xl overflow-hidden pointer-events-none -z-10"
				aria-hidden="true"
			>
				<div className="absolute  -top-40 -left-10 w-56 h-56 gradient-conic-white animate-rotate-mirror rounded-full opacity-70 blur-md" />
			</div>
		);

		if (asChild) {
			return (
				<Slot
					ref={ref}
					className={cn(
						"relative px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer flex items-center justify-center gap-2",
						"bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium",
						"transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
						"enabled:hover:from-gray-800 enabled:hover:to-gray-700",
						"disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					aria-disabled={isDisabled}
					aria-label={loading && loadingText ? loadingText : undefined}
					{...props}
				>
					{React.isValidElement(children) &&
						React.cloneElement(children as React.ReactElement, {
							disabled: isDisabled,
							children: (
								<>
									{gradientElement}
									{loading && <span className="sr-only">{loadingText}</span>}
									{(children as React.ReactElement).props.children}
								</>
							),
						})}
				</Slot>
			);
		}

		return (
			<button
				ref={ref}
				className={cn(
					"relative px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer flex items-center justify-center gap-2",
					"bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium",
					"transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					"enabled:hover:from-gray-800 enabled:hover:to-gray-700",
					"disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				disabled={isDisabled}
				aria-disabled={isDisabled}
				aria-label={loading && loadingText ? loadingText : undefined}
				{...props}
			>
				{gradientElement}
				{loading ? (
					<>
						<span className="sr-only">{loadingText}</span>
						{children}
					</>
				) : (
					children
				)}
			</button>
		);
	},
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
