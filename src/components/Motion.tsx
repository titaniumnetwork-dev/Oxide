"use client";

import { motion, useReducedMotion } from "framer-motion";

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
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={prefersReducedMotion ? false : { opacity: 0, y }}
			whileInView={
				prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
			}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1], delay }}
		>
			{children}
		</motion.div>
	);
}
