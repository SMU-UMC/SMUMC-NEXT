import { useEffect, useState } from "react";

interface FallingItem {
	id: number;
	left: number;
	animationDuration: number;
	delay: number;
	size: number;
}

export const useFallingAnimation = (count: number = 30) => {
	const [items, setItems] = useState<FallingItem[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const newItems: FallingItem[] = [];
		for (let i = 0; i < count; i++) {
			newItems.push({
				id: i,
				left: Math.random() * 100,
				animationDuration: 3 + Math.random() * 4,
				delay: Math.random() * 2,
				size: 20 + Math.random() * 30,
			});
		}
		setItems(newItems);
		setIsLoaded(true);
	}, [count]);

	return { items, isLoaded };
};
