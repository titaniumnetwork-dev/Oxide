"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type HeroAction = {
	href: string;
	label: string;
	title?: string;
	variant: "primary" | "secondary";
	external?: boolean;
};

export function HeroActions({ actions }: { actions: HeroAction[] }) {
	const prefersReducedMotion = useReducedMotion();
	const baseButtonClass =
		"inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-2.5 text-[0.98rem] font-semibold leading-none tracking-[0.01em] whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45";
	const primaryButtonClass =
		"text-white border-white/20 bg-[linear-gradient(122deg,#e65153_0%,#cd3f5a_48%,#ff7d62_100%)]";
	const secondaryButtonClass =
		"text-white border-white/30 bg-white/[0.06] hover:bg-white/[0.1] hover:border-white/50";

	return (
		<motion.div
			className="mt-9 flex flex-wrap gap-3"
			initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
			animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
			transition={{ duration: 0.44, ease: [0.2, 0.9, 0.2, 1] }}
		>
			{actions.map((action, index) => (
				<motion.div
					key={action.label}
					className="inline-flex"
					initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
					animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{
							duration: 0.36,
							ease: [0.22, 1, 0.36, 1],
						}}
						whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
						whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
					>
					{action.external ? (
						<a
							title={action.title}
							href={action.href}
							target="_blank"
							rel="noreferrer"
							className={`${baseButtonClass} ${
								action.variant === "primary"
									? primaryButtonClass
									: secondaryButtonClass
							}`}
						>
							{action.label}
						</a>
					) : (
						<Link
							title={action.title}
							href={action.href}
							className={`${baseButtonClass} ${
								action.variant === "primary"
									? primaryButtonClass
									: secondaryButtonClass
							}`}
						>
							{action.label}
						</Link>
					)}
				</motion.div>
			))}
		</motion.div>
	);
}
