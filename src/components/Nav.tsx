"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";

const navLinks = [
	{ href: "/setup", label: "Setup" },
	{ href: "/services", label: "Services" },
	{ href: "/socials", label: "Socials" },
	{ href: "https://docs.titaniumnetwork.org", label: "Docs", external: true },
];

export default function Nav() {
	const pathname = usePathname();
	const router = useRouter();
	const prefersReducedMotion = useReducedMotion();
	const navLabelVariants = prefersReducedMotion
		? undefined
		: {
				rest: {
					scale: 1,
					color: "rgba(255,248,251,0.76)",
					textShadow: "0 0 0 rgba(255,248,251,0)",
				},
				hover: {
					scale: 1.01,
					color: "color-mix(in oklab, var(--primary) 72%, white 28%)",
					textShadow: "0 0 1px color-mix(in oklab, var(--primary) 58%, white 42%)",
				},
				tap: {
					scale: 0.97,
					color: "color-mix(in oklab, var(--primary) 64%, white 36%)",
					textShadow: "0 0 1px color-mix(in oklab, var(--primary) 52%, white 48%)",
				},
				active: {
					scale: 1,
					color: "rgba(255,248,251,0.94)",
					textShadow: "0 0 1px rgba(255,248,251,0.38)",
				},
			};

	const isHomeActive = pathname === "/";
	const isNavItemActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

	const handleInternalNav = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (prefersReducedMotion) return;
		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey
		) {
			return;
		}
		event.preventDefault();
		window.setTimeout(() => {
			router.push(href);
		}, 105);
	};

	return (
		<header className="sticky top-0 z-40">
			<div className="w-full">
				<div className="flex items-start gap-3">
					<Link
						href="/"
						className="group shrink-0 pl-3 pt-2 font-semibold tracking-[0.2em] text-white md:pl-5 md:pt-2.5 text-lg mr-auto"
						aria-label="TitaniumNetwork home"
					>
							<span
								className="align-middle text-3xl text-white/70 [text-shadow:0_0_0_transparent] transition-[color,text-shadow] duration-150 ease-out group-hover:text-[color-mix(in_oklab,var(--primary)_72%,white_28%)] group-hover:[text-shadow:0_0_1px_color-mix(in_oklab,var(--primary)_58%,white_42%)]"
							style={
								isHomeActive
									? {
											color: "color-mix(in oklab, var(--primary) 72%, white 28%)",
											textShadow:
												"0 0 1px color-mix(in oklab, var(--primary) 58%, white 42%)",
										}
									: undefined
							}
						>
							[
						</span>
							<span
								className="mx-1.5 align-middle text-white/82 transition-colors duration-150 ease-out group-hover:text-white font-['Raleway'] tracking-normal"
							style={
								isHomeActive
									? {
											color: "rgba(255,248,251,1)",
											textShadow: "0 0 1px rgba(255,248,251,0.22)",
										}
									: undefined
							}
						>
							TitaniumNetwork
						</span>
							<span
								className="align-middle text-3xl text-white/70 [text-shadow:0_0_0_transparent] transition-[color,text-shadow] duration-150 ease-out group-hover:text-[color-mix(in_oklab,var(--primary)_72%,white_28%)] group-hover:[text-shadow:0_0_1px_color-mix(in_oklab,var(--primary)_58%,white_42%)]"
							style={
								isHomeActive
									? {
											color: "color-mix(in oklab, var(--primary) 72%, white 28%)",
											textShadow:
												"0 0 1px color-mix(in oklab, var(--primary) 58%, white 42%)",
										}
									: undefined
							}
						>
							]
						</span>
					</Link>

						<nav aria-label="Primary" className="relative h-12 min-w-0 flex-1">
						<div className="relative h-full w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="210"
								height="48"
								viewBox="0 0 210 48"
								fill="none"
									className="absolute right-96 top-0 z-0 h-12 w-52.5"
								role="presentation"
								aria-hidden="true"
							>
								<mask id="path-1-inside-1-nav-main" fill="white">
									<path d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0" />
								</mask>
								<path d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0" fill="#220934" />
								<path
									d="M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1V0V-1ZM210 48V49H211V48H210ZM211 0C211 -0.552285 210.552 -1 210 -1C209.448 -1 209 -0.552285 209 0H210H211ZM57.7516 48V49H210V48V47H57.7516V48ZM210 48H211V0H210H209V48H210ZM0 0V1C9.31973 1 15.1441 3.90917 19.2727 8.19387C23.4583 12.5377 25.9728 18.3582 28.517 24.3887C31.0303 30.346 33.5776 36.5246 37.8674 41.1778C42.2197 45.8988 48.3065 49 57.7516 49V48V47C48.8212 47 43.2827 44.1012 39.3379 39.8222C35.3306 35.4754 32.909 29.654 30.3597 23.6113C27.8412 17.6418 25.1994 11.4623 20.7129 6.80613C16.1693 2.09083 9.80581 -1 0 -1V0Z"
									fill="white"
									fillOpacity="0.141176"
									mask="url(#path-1-inside-1-nav-main)"
								/>
							</svg>

								<div className="nav-rail-extension absolute right-0 w-100 top-0 z-0 h-12" />

								<div className="absolute z-10 flex h-full items-center justify-between right-0 pr-12">
									<ul className="no-scrollbar flex min-w-0 flex-nowrap items-center gap-x-10 overflow-x-auto">
											{navLinks.map((item) => (
												<li key={item.label}>
													{item.external ? (
													<motion.a
														href={item.href}
														target="_blank"
														rel="noreferrer"
														className="nav-link-plain"
														transition={{ duration: 0.1, ease: "easeOut" }}
													>
															<motion.span
																className="nav-link-label"
																variants={navLabelVariants}
																initial="rest"
																animate="rest"
															whileHover="hover"
															whileTap="tap"
															transition={{ duration: 0.1, ease: "easeOut" }}
														>
															{item.label}
														</motion.span>
													</motion.a>
													) : (
														<Link
															href={item.href}
															className="nav-link-plain"
															onClick={(event) => handleInternalNav(event, item.href)}
														>
															<motion.span
																className="nav-link-label"
																variants={navLabelVariants}
																initial="rest"
																animate={isNavItemActive(item.href) ? "active" : "rest"}
																whileHover="hover"
																whileTap="tap"
																transition={{ duration: 0.1, ease: "easeOut" }}
														>
															{item.label}
														</motion.span>
													</Link>
												)}
											</li>
										))}
									</ul>
								</div>
							</div>
						</nav>
					</div>
			</div>

			<div
				className="fixed bottom-0 left-0 z-50 flex items-end">
				<DockBrandButton href="https://discord.gg/unblock" label="Discord">
					<FaDiscord />
				</DockBrandButton>
				<DockBrandButton href="https://github.com/titaniumnetwork-dev" label="GitHub">
					<FaGithub />
				</DockBrandButton>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="210"
				height="48"
				viewBox="0 0 210 48"
				style={{ transform: "rotate(180deg)" }}
				fill="none"
					className="fixed -left-4 bottom-0 z-0 h-12 w-52.5"
				role="presentation"
				aria-hidden="true"
			>
				<mask id="path-1-inside-1-nav-main" fill="white">
					<path d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0"></path>
				</mask>
				<path d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0" fill="#220934"></path>
				<path d="M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1V0V-1ZM210 48V49H211V48H210ZM211 0C211 -0.552285 210.552 -1 210 -1C209.448 -1 209 -0.552285 209 0H210H211ZM57.7516 48V49H210V48V47H57.7516V48ZM210 48H211V0H210H209V48H210ZM0 0V1C9.31973 1 15.1441 3.90917 19.2727 8.19387C23.4583 12.5377 25.9728 18.3582 28.517 24.3887C31.0303 30.346 33.5776 36.5246 37.8674 41.1778C42.2197 45.8988 48.3065 49 57.7516 49V48V47C48.8212 47 43.2827 44.1012 39.3379 39.8222C35.3306 35.4754 32.909 29.654 30.3597 23.6113C27.8412 17.6418 25.1994 11.4623 20.7129 6.80613C16.1693 2.09083 9.80581 -1 0 -1V0Z" fill="white" fillOpacity="0.141176" mask="url(#path-1-inside-1-nav-main)"></path>
			</svg>
		</header>
	);
}

function DockBrandButton({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: ReactNode;
}) {
	return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				aria-label={label}
				className="dock-brand-button group relative block h-12 w-20"
			>
				<span className="dock-brand-icon absolute inset-0 z-10 flex items-center justify-center text-xl">
					{children}
				</span>
			</a>
		);
}
