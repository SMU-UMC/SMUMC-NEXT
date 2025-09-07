import type { Metadata } from "next";
import { QuestionAccordion } from "@/components/sections/notice/question-accordion";

export const metadata: Metadata = {
	title: "공지사항 | SMUMC",
	description: "SMUMC의 공지사항과 자주 묻는 질문을 확인해보세요.",
	openGraph: {
		title: "공지사항 | SMUMC",
		description: "SMUMC의 공지사항과 자주 묻는 질문을 확인해보세요.",
		type: "website",
	},
};

const NoticePage = () => {
	return (
		<div className="min-h-full flex flex-col justify-center items-center py-40 sm:py-44">
			<QuestionAccordion />
		</div>
	);
};

export default NoticePage;
