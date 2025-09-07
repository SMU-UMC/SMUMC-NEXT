"use client";

import { motion } from "framer-motion";
import { ActivityBadge } from "@/components/ui/activity-badge";
import { UMC_ACTIVITIES } from "@/constants/info";
import { InfoBoxTitle } from "./info-box-title";
import { StatsContainer } from "./stats-container";

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
				ease: "easeInOut",
				duration: 2,
				y: { duration: 1 },
			}}
			className="relative flex flex-col items-center max-w-4xl gap-8 rounded-2xl"
			aria-labelledby="info-section-title"
		>
			<InfoBoxTitle />

			<div>
				<h3 className="sr-only">UMC 활동 내용</h3>
				<motion.ul
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={listVariants}
					className="w-full flex flex-wrap gap-2 justify-center items-center px-4 md:px-0"
					aria-label="UMC에서 진행하는 활동들"
				>
					{UMC_ACTIVITIES.map((activity) => (
						<motion.li
							key={activity}
							variants={itemVariants}
							transition={{ type: "spring" }}
						>
							<ActivityBadge text={activity} />
						</motion.li>
					))}
				</motion.ul>
			</div>

			<StatsContainer />
		</motion.section>
	);
};
