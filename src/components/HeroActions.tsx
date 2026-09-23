"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroAction = {
	href: string;
	label: string;
	title?: string;
	variant: "primary" | "secondary";
	external?: boolean;
};

export function HeroActions({ actions }: { actions: HeroAction[] }) {
	const baseButtonClass =
		"hero-btn inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-2.5 text-[0.98rem] font-semibold leading-none tracking-[0.01em] whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0D3F5]/45";
	const primaryButtonClass =
		"text-[#E0D3F5] border-[#E0D3F5]/20 bg-[linear-gradient(122deg,#5D36A2_0%,#8459CF_48%,#9C59CF_100%)]";
	const secondaryButtonClass =
		"text-[#E0D3F5] border-[#E0D3F5]/30 bg-[#E0D3F5]/[0.06] hover:bg-[#E0D3F5]/[0.1] hover:border-[#E0D3F5]/50";

	return (
		<motion.div
			className="mt-9 flex flex-wrap justify-center gap-3"
			initial={{ opacity: 0, y: 14 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.44, ease: [0.2, 0.9, 0.2, 1] }}
		>
			{actions.map((action) => (
				<motion.div
					key={action.label}
					className="inline-flex"
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{ scale: 1.04 }}
					whileTap={{ scale: 0.97 }}
				>
					{action.external ? (
						<a
							title={action.title}
							href={action.href}
							target="_blank"
							rel="noreferrer"
							className={`${baseButtonClass} ${action.variant === "primary" ? primaryButtonClass : secondaryButtonClass}`}
						>
							{action.label}
						</a>
					) : (
						<Link
							title={action.title}
							href={action.href}
							className={`${baseButtonClass} ${action.variant === "primary" ? primaryButtonClass : secondaryButtonClass}`}
						>
							{action.label}
						</Link>
					)}
				</motion.div>
			))}
		</motion.div>
	);
}
