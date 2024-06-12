import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
	return (
		<div className='max-w-3xl space-y-4 mt-[180px]'>
			<div className='flex flex-col md:flex-row justify-center items-center gap-10'>
				<Image
					src='/images/main-logo.webp'
					height='400'
					width='400'
					alt='Logo'
					className='hidden dark:block object-contain'
				/>
				<Image
					src={'/images/main-light-logo.webp'}
					height='400'
					width='400'
					alt='Logo'
					className='dark:hidden object-contain'
				/>
				<div className='flex flex-col justify-center items-center gap-5'>
					<h1 className='text-6xl font-bold text-left'>
						<b className='text-green-400'>U</b>niversity <br />
						<b className='text-green-400'>M</b>akeUs <br />
						<b className='text-green-400'>C</b>hallenge <br />
					</h1>
					<p className='text-sm font-bold'>
						<b className='text-green-300'>앱&웹 서비스 런칭</b>에
						<b className='text-green-300'> 도전</b>
						하는 대학생 IT 연합동아리
					</p>
					<Button
						variant='ghost'
						className='bg-green-200 text-black rounded-2xl'
					>
						7기 모집예정
					</Button>
				</div>
			</div>
		</div>
	);
};
