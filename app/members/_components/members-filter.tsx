'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';

import { ActiveMember } from './active-member';
import { AllMember } from './all-member';

export const MembersFilter = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const all = searchParams.get('all');
	console.log(all);

	const setFilter = (all: boolean) => {
		if (all) {
			router.push('?all=' + all);
		} else {
			router.push('/members');
		}
	};

	return (
		<div>
			<h1 className='text-green-400 animate-blink font-bold text-5xl mb-10 mt-[100px]'>
				역대 UMC 멤버
			</h1>
			<div className='flex items-center justify-center gap-20'>
				<Button
					variant='link'
					className={cn('text-2xl', !all && 'text-green-500 underline')}
					onClick={() => setFilter(false)}
				>
					Active Member
				</Button>
				<Button
					variant='link'
					className={cn('text-2xl', all && 'text-green-500 underline')}
					onClick={() => setFilter(true)}
				>
					Member List
				</Button>
			</div>
			<div className='mt-10 flex flex-col items-center justify-center'>
				{all && <AllMember />}
				{!all && <ActiveMember />}
			</div>
		</div>
	);
};
