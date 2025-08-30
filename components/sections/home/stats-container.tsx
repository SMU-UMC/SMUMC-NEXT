import { CounterCard } from '@/components/ui/counter-card';

export const StatsContainer = () => {
	return (
		<div className="flex gap-5 flex-col md:flex-row gradient-green-fade border border-green-50/1 rounded-2xl p-4 w-full">
			<CounterCard
				title="함께한 시간이 쌓아온 '연대'"
				endNum={186}
				lastUnit="명"
			/>
			<CounterCard title="현재가 말해주는 '열정'" endNum={41} lastUnit="명" />
			<CounterCard
				title="기수가 증명하는 '지속성'"
				endNum={9}
				lastUnit="기"
			/>
		</div>
	);
};