import type { Metadata } from "next";
import "./globals.css";
import type React from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.smumc.co.kr/"),
	title: "SMUMC",
	description: "FUNNY CODING SMUMC",
	icons: {
		icon: "/logo.png",
	},
	openGraph: {
		title: "SMUMC",
		description: "YAHO SMUMC CODING",
		siteName: "SMUMC",
		locale: "ko_KR",
		type: "website",
		url: "https://www.smumc.co.kr/",
		images: [
			{
				url: "/images/openGraph.png",
				width: 1200,
				height: 638,
				alt: "SMUMC 대표 이미지",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
			<body className="antialiased" suppressHydrationWarning>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 bg-black text-white px-2 py-1 z-50 rounded"
				>
					메인 콘텐츠로 건너뛰기
				</a>
				<div className="relative flex flex-col size-full min-h-dvh">
					<Navbar />
					<main id="main-content" tabIndex={-1} className="flex-1">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
