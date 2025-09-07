import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap cursor-pointer rounded-md text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
				transparent: "bg-transparent text-zinc-200",
			},
			size: {
				default: "px-4 py-2",
				sm: "px-3",
				lg: "px-8",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
	loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			loading = false,
			loadingText = "Loading...",
			children,
			disabled,
			...props
		},
		ref,
	) => {
		const _Comp = asChild ? Slot : "button";
		const isDisabled = disabled || loading;

		if (asChild) {
			return (
				<Slot
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					aria-disabled={isDisabled}
					aria-label={loading && loadingText ? loadingText : undefined}
					{...props}
				>
					{loading ? (
						<>
							<span className="sr-only">{loadingText}</span>
							{children}
						</>
					) : (
						children
					)}
				</Slot>
			);
		}

		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={isDisabled}
				aria-disabled={isDisabled}
				aria-label={loading && loadingText ? loadingText : undefined}
				{...props}
			>
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
Button.displayName = "Button";

export { Button, buttonVariants };
