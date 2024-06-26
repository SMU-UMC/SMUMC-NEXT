import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-provider';
import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'SMUMC',
	description: 'FUNNY CODING SMUMC',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/logo.svg',
				href: '/logo.svg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/logo.png',
				href: '/logo.png',
			},
		],
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
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					storageKey="smumc-theme"
				>
					<div className="relative flex min-h-dvh flex-col bg-background dark:bg-[#1F1F1F]">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
