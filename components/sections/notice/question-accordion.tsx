import {
	SmoothAccordion,
	SmoothAccordionItem,
} from '@/components/ui/smooth-accordion';
import { QNA } from '@/constants/info';

export const QuestionAccordion = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-40 w-[90%] md:w-[80%]">
			<header className="flex flex-col items-center justify-center gap-1">
				<h1 className="text-green-700 font-extrabold text-7xl sm:text-9xl tracking-wider leading-[1.2]">
					FAQ
				</h1>
				<p className="text-zinc-500 text-md sm:text-lg font-semibold break-keep text-center">
					UMC에 대해 자주 궁금해하시는 질문들을 모아봤어요
				</p>
			</header>

			<div className="w-full text-zinc-600">
				<SmoothAccordion type="single">
					{QNA.map((q, idx) => (
						<SmoothAccordionItem
							key={idx}
							title={q.question}
							className="border-b-2 border-zinc-200 last:border-none"
						>
							<p className="text-left text-md text-zinc-500 font-semibold leading-relaxed">
								{q.answer}
							</p>
						</SmoothAccordionItem>
					))}
				</SmoothAccordion>
			</div>
		</section>
	);
};
