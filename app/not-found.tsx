import Image from "next/image";
import Link from "next/link";
import { FallingAnimation } from "@/components/ui/falling-animation";

export default function NotFound() {
	return (
		<div className="relative flex flex-col items-center justify-center h-screen gap-10 overflow-hidden">
			<div aria-hidden="true">
				<FallingAnimation count={30} imageSrc="/images/sweet-potato.svg" />
			</div>
			<div
				className="relative z-10 flex flex-col items-center justify-center gap-6"
				role="alert"
				aria-label="404 페이지를 찾을 수 없음"
			>
				<h1 className="sr-only">404 페이지를 찾을 수 없음</h1>
				<figure>
					<Image
						src="/images/404.webp"
						alt="404 에러 페이지를 나타내는 이미지"
						width={300}
						height={300}
						priority
					/>
				</figure>
				<p className="text-center text-md">
					요청하신 페이지를 찾을 수 없습니다.
				</p>
			</div>
			<nav className="relative z-10">
				<Link
					href="/"
					className="text-blue-500  hover:text-blue-700 px-2 py-1"
					aria-label="홈페이지로 돌아가기"
				>
					홈 페이지로 돌아가기
				</Link>
			</nav>
		</div>
	);
}
