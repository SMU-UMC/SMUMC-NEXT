import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { QNA } from '@/constants/info';

export const QuestionAccordion = () => {
	return (
		<div className='flex flex-col items-center justify-center w-[80%]'>
			<h1 className='text-green-700 dark:text-green-700 font-bold text-5xl mb-10 mt-[100px]'>
				자주 묻는 질문
			</h1>
			<div className='w-full flex flex-col gap-10'>
				{QNA.map((q, idx) => (
					<Accordion type='single' collapsible>
						<AccordionItem value={idx.toString()}>
							<AccordionTrigger className='text-left font-bold text-lg'>
								{q.question}
							</AccordionTrigger>
							<AccordionContent className='text-left text-sm'>
								{q.answer}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	);
};
