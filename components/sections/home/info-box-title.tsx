export const InfoBoxTitle = () => {
	return (
		<div className="relative w-full">
			<span className="absolute inset-0 flex items-center justify-center text-5xl md:text-8xl font-black text-center tracking-wide text-zinc-600/15 animate-float select-none pointer-events-none -mt-30">
				Break The Rules
			</span>
			<h2 className="relative text-center text-2xl md:text-3xl font-bold leading-normal break-keep z-10">
				아이디어를 현실로!
				<br />
				전국 대학생 IT 연합
				<strong className="font-bold text-green-500"> UMC</strong>에서
				여러분을 기다립니다.
			</h2>
		</div>
	);
};