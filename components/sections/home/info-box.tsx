'use client';

import { ActivityBadge } from '@/components/ui/activity-badge';
import { InfoBoxTitle } from './info-box-title';
import { StatsContainer } from './stats-container';
import { motion } from 'framer-motion';
import { UMC_ACTIVITIES } from '@/constants/info';

const listVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: 50,
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

export const InfoBox = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
			className="relative flex flex-col items-center max-w-4xl gap-8 rounded-2xl"
		>
			<InfoBoxTitle />

			<motion.ul
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={listVariants}
				className="w-full flex flex-wrap gap-2 justify-center items-center px-4 md:px-0"
			>
				{UMC_ACTIVITIES.map((activity, idx) => (
					<motion.li
						key={idx}
						variants={itemVariants}
						transition={{ type: 'spring' }}
					>
						<ActivityBadge text={activity} />
					</motion.li>
				))}
			</motion.ul>

			<StatsContainer />
		</motion.section>
	);
};
