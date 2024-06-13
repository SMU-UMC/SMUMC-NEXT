import React from 'react';
import { MembersFilter } from './_components/MembersFilter';

const MembersPage = () => {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20'>
				<MembersFilter />
			</div>
		</div>
	);
};

export default MembersPage;
