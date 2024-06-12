import React from 'react';
import { Hero } from './_components/hero';
import { Footer } from './_components/footer';

const HomePage = () => {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
				<Hero />
			</div>
		</div>
	);
};

export default HomePage;
