import Image from "next/image";
import Link from "next/link";
import { FallingAnimation } from "@/components/ui/falling-animation";

export default function NotFound() {
	return (
		<div className="relative flex flex-col items-center justify-center h-screen gap-10 overflow-hidden">
			<FallingAnimation count={30} imageSrc="/images/sweet-potato.svg" />
			<div className="relative z-10 flex flex-col items-center justify-center gap-6">
				<Image
					src="/images/404.webp"
					alt="Not Found"
					width={300}
					height={300}
				/>
				<p>요청하신 페이지를 찾을 수 없습니다.</p>
			</div>
			<Link href="/" className="relative z-10 text-blue-500">
				페이지로 돌아가기
			</Link>
		</div>
	);
}
