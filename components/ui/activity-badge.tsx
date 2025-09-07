interface ActivityBadgeProps {
	text: string;
	className?: string;
}

export const ActivityBadge = ({ text, className = "" }: ActivityBadgeProps) => {
	return (
		<span
			className={`bg-green-50/5 px-4 py-2 rounded-2xl border border-green-50/10 inline-flex items-center ${className}`}
		>
			<span className="text-green-100 text-xs">{text}</span>
		</span>
	);
};
