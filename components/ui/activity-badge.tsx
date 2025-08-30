interface ActivityBadgeProps {
	text: string;
}

export const ActivityBadge = ({ text }: ActivityBadgeProps) => {
	return (
		<div className="bg-green-50/5 px-4 py-2 rounded-2xl border border-green-50/10">
			<h3 className="text-green-100 text-xs">{text}</h3>
		</div>
	);
};
