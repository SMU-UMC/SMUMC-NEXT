export const ProjectCarouselBackground = () => {
	return (
		<>
			{/* 배경 텍스트 - 왼쪽 */}
			<div className="absolute left-0 top-30 pointer-events-none">
				<h2 className="text-[120px] md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500/20 to-blue-500/20 whitespace-nowrap select-none">
					BREAK
				</h2>
			</div>

			{/* 배경 텍스트 - 오른쪽 */}
			<div className="absolute right-0 -bottom-28 pointer-events-none overflow-hidden">
				<h2 className="text-[120px] md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-l from-green-500/20 to-blue-500/20 whitespace-nowrap select-none">
					THE RULES
				</h2>
			</div>
		</>
	);
};
