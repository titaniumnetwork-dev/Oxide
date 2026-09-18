"use client";

import { motion } from "framer-motion";

type FadeInProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	y?: number;
};

export function FadeIn({
	children,
	className,
	delay = 0,
	y = 18,
}: FadeInProps) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1], delay }}
		>
			{children}
		</motion.div>
	);
}
