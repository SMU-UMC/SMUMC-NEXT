import Image from 'next/image';
import { CounterCard } from './counter-card';

export const InfoBox = () => {
	return (
		<div className='relative flex flex-col items-center max-w-4xl space-y-4 bg-[#E3E1E2] dark:bg-zinc-800 w-full rounded-2xl h-full py-10 mt-[200px]'>
			<h1 className='font-bold text-[#7C7C7C] text-[3rem] m-5'>SMUMC</h1>
			<Image
				src='/images/smile.webp'
				height='100'
				width='100'
				alt='Logo'
				className='absolute left-[-20px] top-[100px]'
			/>
			<Image
				src='/images/code.webp'
				height='100'
				width='100'
				alt='Logo'
				className='absolute right-[-15px] bottom-[200px]'
			/>
			<div className='w-full flex gap-5 justify-center items-center'>
				{['스터디', '해커톤', '아이디어톤', '데모데이', '파트별 컨퍼런스'].map(
					(text, idx) => {
						return (
							<div
								key={idx}
								className='w-90 bg-[#293C30] px-4 py-1 rounded-2xl flex-wrap'
							>
								<h3 className='text-[#12F76C] text-[0.6rem] md:text-sm'>
									{text}
								</h3>
							</div>
						);
					}
				)}
			</div>
			<div className='w-full flex gap-5 justify-center items-center'>
				{['열쩡', '열쩡', '열쩡'].map((text, idx) => {
					return (
						<div
							key={idx}
							className='font-bold w-90 bg-[#2E3B3B] px-4 py-1 rounded-2xl flex-wrap'
						>
							<h3 className='font-bold text-[#76F4E1] text-[0.6rem] md:text-sm'>
								{text}
							</h3>
						</div>
					);
				})}
			</div>
			<div className='flex gap-5 flex-col md:flex-row py-10'>
				<CounterCard title='역대 SMUMC 멤버수' endNum={186} lastUnit='명' />
				<CounterCard title='현재 회원 수' endNum={41} lastUnit='명' />
				<CounterCard title='현재 기수' endNum={6} lastUnit='기' />
			</div>
		</div>
	);
};