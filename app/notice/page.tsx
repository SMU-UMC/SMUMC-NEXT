import { QuestionAccordion } from './_components/question-accordion';

const NoticePage = () => {
	return (
		<div className="min-h-full flex flex-col">
			<div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20">
				<QuestionAccordion />
			</div>
		</div>
	);
};

export default NoticePage;
