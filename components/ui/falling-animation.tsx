"use client";

import Image from "next/image";
import { useFallingAnimation } from "@/hooks/use-falling-animation";

interface FallingAnimationProps {
	count?: number;
	imageSrc: string;
}

export const FallingAnimation = ({
	count = 30,
	imageSrc,
}: FallingAnimationProps) => {
	const { items, isLoaded } = useFallingAnimation(count);

	if (!isLoaded) return null;

	return (
		<>
			{items.map((item) => (
				<div
					key={item.id}
					className="fixed -top-24 z-[1] pointer-events-none animate-fall"
					style={
						{
							left: `${item.left}%`,
							width: `${item.size}px`,
							height: `${item.size}px`,
							animationDuration: `${item.animationDuration}s`,
							animationDelay: `${item.delay}s`,
						} as React.CSSProperties
					}
				>
					<Image
						src={imageSrc}
						alt=""
						aria-hidden="true"
						width={item.size}
						height={item.size}
					/>
				</div>
			))}
		</>
	);
};
