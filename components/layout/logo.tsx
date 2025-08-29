'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();

	return (
		<div
			className="flex items-center gap-x-2 cursor-pointer"
			onClick={() => router.push('/')}
		>
			<Image
				src="/logo.png"
				height="40"
				width="40"
				alt="Logo"
				className="object-contain"
			/>
		</div>
	);
};

export default Logo;
