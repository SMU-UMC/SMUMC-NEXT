export const ProjectCarouselBackground = () => {
	return (
		<>
			{/* 배경 텍스트 - 첫 번째 슬라이더 아래쪽과 살짝 겹침 */}
			<div className="absolute left-0 -top-[40px] md:-top-[100px] lg:-top-[180px] pointer-events-none z-0">
				<h2 className="text-[40px] md:text-[100px] lg:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500/20 to-blue-500/20 whitespace-nowrap select-none">
					BREAK
				</h2>
			</div>

			{/* 배경 텍스트 - 두 번째 슬라이더 위쪽과 살짝 겹침 */}
			<div className="absolute right-0 -bottom-[40px] md:-bottom-[100px] lg:-bottom-[180px] pointer-events-none z-0">
				<h2 className="text-[40px] md:text-[100px] lg:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-l from-green-500/20 to-blue-500/20 whitespace-nowrap select-none">
					THE RULES
				</h2>
			</div>
		</>
	);
};
