import { CounterCard } from "@/components/ui/counter-card";

export const StatsContainer = () => {
	return (
		<section
			className="gradient-green-fade border border-green-50/1 rounded-2xl p-4 w-full"
			aria-label="UMC 통계 정보"
		>
			<h3 className="sr-only">UMC 활동 통계</h3>
			<ul className="flex gap-5 flex-col md:flex-row list-none">
				<li>
					<CounterCard
						title="함께한 시간이 쌓아온 '연대'"
						endNum={186}
						lastUnit="명"
					/>
				</li>
				<li>
					<CounterCard
						title="현재가 말해주는 '열정'"
						endNum={41}
						lastUnit="명"
					/>
				</li>
				<li>
					<CounterCard
						title="기수가 증명하는 '지속성'"
						endNum={9}
						lastUnit="기"
					/>
				</li>
			</ul>
		</section>
	);
};
