import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { GradientButton } from "@/components/ui/gradient-button";
import { RECRUITMENT } from "@/constants/recruitment";

export const Hero = () => {
	return (
		<section className="flex flex-col justify-center items-center gap-1 mt-40 sm:mt-60">
			<Image
				priority
				src="/images/logo.webp"
				height={400}
				width={500}
				alt="Logo"
				className="object-contain w-full max-w-[500px] h-auto"
			/>
			<p className="text-zinc-300 text-md animate-float opacity-80 mb-4 text-center px-10 break-keep mt-2">
				앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리
			</p>
			<RecruitmentButton />
		</section>
	);
};

const RecruitmentButton = () => {
	const { CURRENT_GENERATION, IS_RECRUITING, APPLICATION_FORM_URL } =
		RECRUITMENT;

	if (!IS_RECRUITING) {
		return (
			<GradientButton
				disabled
				aria-label={`${CURRENT_GENERATION}기 모집이 완료되었습니다`}
			>
				{CURRENT_GENERATION}기 모집 완료
			</GradientButton>
		);
	}

	if (IS_RECRUITING) {
		return (
			<GradientButton asChild>
				<Link
					href={APPLICATION_FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${CURRENT_GENERATION}기 모집 지원서 작성하기 (새 창에서 열림)`}
				>
					{CURRENT_GENERATION}기 모집중
					<FiArrowUpRight aria-hidden="true" />
				</Link>
			</GradientButton>
		);
	}
};
