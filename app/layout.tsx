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
				<div className="relative flex flex-col size-full min-h-dvh">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
