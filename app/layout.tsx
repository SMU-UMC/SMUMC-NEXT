import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';
import { cn } from '@/lib/utils';
import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'SMUMC',
	description: 'FUNNY CODING SMUMC',
	icons: {
		icon: '/logo.png',
	},
	openGraph: {
		title: 'SMUMC 사이트에 오신 것을 환영합니다!',
		description: 'YAHO SMUMC CODING',
		siteName: 'SMUMC',
		locale: 'ko_KR',
		type: 'website',
		url: 'https://www.smumc.co.kr/',
		images: {
			url: '/logo.svg',
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
			<body
				className={cn('font-sans antialiased', inter.variable)}
				suppressHydrationWarning
			>
				<div className="relative flex flex-col size-full min-h-dvh">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
