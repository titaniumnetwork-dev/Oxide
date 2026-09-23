"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { FaDiscord, FaGithub } from "react-icons/fa6";

const navLinks = [
	{ href: "/setup", label: "Setup" },
	{ href: "/#services", label: "Services" },
	{ href: "/#socials", label: "Socials" },
	{ href: "https://docs.titaniumnetwork.org", label: "Docs", external: true },
];

const navHoverColor = "#B295E4";
const navHoverShadowColor = "#9C59CF";
const navTapColor = "#9C59CF";
const navTapShadowColor = "#B759CF";

const navLabelVariants = {
	rest: {
			scale: 1,
			color: "rgba(224,211,245,0.76)",
			textShadow: "0 0 0 rgba(224,211,245,0)",
		},
	hover: {
		scale: 1.01,
		color: navHoverColor,
		textShadow: `0 0 1px ${navHoverShadowColor}`,
	},
	tap: {
		scale: 0.97,
		color: navTapColor,
		textShadow: `0 0 1px ${navTapShadowColor}`,
	},
	active: {
			scale: 1,
			color: "rgba(224,211,245,0.94)",
			textShadow: "0 0 1px rgba(224,211,245,0.38)",
		},
};

export default function Nav() {
	const pathname = usePathname();
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hash, setHash] = useState("");

	useEffect(() => {
		const updateHash = () => setHash(window.location.hash);
		updateHash();
		window.addEventListener("hashchange", updateHash);
		return () => window.removeEventListener("hashchange", updateHash);
	}, []);

	const [isHeroVisible, setIsHeroVisible] = useState(true);

	useIsomorphicLayoutEffect(() => {
		const hero = document.getElementById("hero-title");
		if (!hero) {
			setIsHeroVisible(false);
			return;
		}
		const rect = hero.getBoundingClientRect();
		setIsHeroVisible(rect.top < window.innerHeight && rect.bottom > 0);
		const observer = new IntersectionObserver(
			([entry]) => setIsHeroVisible(entry.isIntersecting),
			{ threshold: 0 }
		);
		observer.observe(hero);
		return () => observer.disconnect();
	}, [pathname]);

	const isHomeActive = pathname === "/";
	const isNavItemActive = (href: string) => {
		if (href.startsWith("/#")) return hash === href.slice(1);
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	const handleInternalNav = (
		event: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		setIsMobileMenuOpen(false);
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
			<div className="relative md:hidden backdrop-blur-sm border-b border-[#E0D3F5]/14 bg-[#24202C]/20">
				<div className="flex h-14 items-center justify-between px-3">
					<Link
						href="/"
						className={`min-w-0 text-sm font-semibold tracking-[0.18em] text-[#E0D3F5] transition-opacity duration-300 ${isHeroVisible ? "pointer-events-none opacity-0" : "opacity-100"}`}
						aria-label="TitaniumNetwork home"
						aria-hidden={isHeroVisible || undefined}
						onClick={(event) => {
							if (pathname !== "/") return;
							event.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
					>
						<span
							className="font-raleway align-middle text-lg tracking-normal"
							style={{
								color: "color-mix(in oklab, var(--primary) 72%, #E0D3F5 28%)",
								textShadow:
									"0 0 1px color-mix(in oklab, var(--primary) 58%, #E0D3F5 42%)",
							}}
						>
							[
						</span>
						<span
							className="tn-brand mx-1.5 align-middle"
							style={{
								color: "rgba(224,211,245,1)",
								textShadow: "0 0 1px rgba(224,211,245,0.22)",
							}}
						>
							TN
						</span>
						<span
							className="font-raleway align-middle text-lg tracking-normal"
							style={{
								color: "color-mix(in oklab, var(--primary) 72%, #E0D3F5 28%)",
								textShadow:
									"0 0 1px color-mix(in oklab, var(--primary) 58%, #E0D3F5 42%)",
							}}
						>
							]
						</span>
					</Link>

					<button
						type="button"
						aria-label={
							isMobileMenuOpen ? "Close menu" : "Open menu"
						}
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-main-nav"
						onClick={() => setIsMobileMenuOpen((open) => !open)}
						className="font-raleway inline-flex h-10 items-center justify-center rounded-md px-3 text-xs tracking-[0.18em] text-[#E0D3F5]/86 transition-colors duration-150 hover:text-[#E0D3F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)"
					>
						{isMobileMenuOpen ? "Close" : "Menu"}
					</button>
				</div>

				<AnimatePresence>
					{isMobileMenuOpen ? (
						<motion.div
							id="mobile-main-nav"
							initial={{ opacity: 0, y: -8, scale: 0.985 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -6, scale: 0.99 }}
							transition={{ duration: 0.16, ease: "easeOut" }}
							className="absolute left-3 right-3 top-14 z-30 rounded-xl border border-[#E0D3F5]/14 bg-[#24202C]/96 p-3 shadow-[0_16px_34px_rgba(10,6,20,0.35)] backdrop-blur"
						>
							<ul className="grid gap-2">
								{navLinks.map((item, index) => (
									<motion.li
										key={item.label}
										initial={{ opacity: 0, y: -4 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -2 }}
										transition={{
											duration: 0.14,
											ease: "easeOut",
											delay: index * 0.02,
										}}
									>
										{item.external ? (
											<a
												href={item.href}
												target="_blank"
												rel="noreferrer"
												className="mobile-nav-link"
												onClick={() =>
													setIsMobileMenuOpen(false)
												}
											>
												{item.label}
											</a>
										) : (
											<Link
												href={item.href}
												className={`mobile-nav-link ${isNavItemActive(item.href) ? "mobile-nav-link-active" : ""}`}
												onClick={(event) =>
													handleInternalNav(
														event,
														item.href
													)
												}
											>
												{item.label}
											</Link>
										)}
									</motion.li>
								))}
							</ul>
							<div className="mt-2 flex items-center gap-4 border-t border-[#E0D3F5]/10 px-2 pt-3">
								<a
									href="https://discord.gg/unblock"
									target="_blank"
									rel="noreferrer"
									aria-label="Discord"
									className="nav-icon-link"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<FaDiscord />
								</a>
								<span aria-hidden="true" className="nav-separator">
									|
								</span>
								<a
									href="https://github.com/titaniumnetwork-dev"
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
									className="nav-icon-link"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<FaGithub />
								</a>
							</div>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>

			<div className="hidden w-full md:block">
				<div className="flex items-start gap-3">
					<Link
						href="/"
						className={`group mr-auto inline-flex shrink-0 items-center pl-3 pt-2 font-semibold tracking-[0.2em] text-[#E0D3F5] transition-opacity duration-300 md:pl-5 md:pt-2.5 text-[clamp(1rem,0.68vw+0.51rem,1.6rem)] ${isHeroVisible ? "pointer-events-none opacity-0" : "opacity-100"}`}
						aria-label="TitaniumNetwork home"
						aria-hidden={isHeroVisible || undefined}
						onClick={(event) => {
							if (pathname !== "/") return;
							event.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
					>
						<span
							className="font-raleway tracking-normal text-[#E0D3F5]/70 [text-shadow:0_0_0_transparent] transition-[color,text-shadow] duration-150 ease-out group-hover:text-[color-mix(in_oklab,var(--primary)_72%,#E0D3F5_28%)] group-hover:[text-shadow:0_0_1px_color-mix(in_oklab,var(--primary)_58%,#E0D3F5_42%)] text-[clamp(1.5rem,1.6vw+0.44rem,3rem)]"
							style={
								isHomeActive
									? {
											color: "color-mix(in oklab, var(--primary) 72%, #E0D3F5 28%)",
											textShadow:
												"0 0 1px color-mix(in oklab, var(--primary) 58%, #E0D3F5 42%)",
										}
									: undefined
							}
						>
							[
						</span>
						<span
							className={`tn-brand mx-1.5 text-[#E0D3F5]/82 transition-colors duration-150 ease-out group-hover:text-(--primary) tracking-normal ${isHomeActive ? "tn-home-active" : ""}`}
						>
							TN
						</span>
						<span
							className="font-raleway tracking-normal text-[#E0D3F5]/70 [text-shadow:0_0_0_transparent] transition-[color,text-shadow] duration-150 ease-out group-hover:text-[color-mix(in_oklab,var(--primary)_72%,#E0D3F5_28%)] group-hover:[text-shadow:0_0_1px_color-mix(in_oklab,var(--primary)_58%,#E0D3F5_42%)] text-[clamp(1.5rem,1.6vw+0.44rem,3rem)]"
							style={
								isHomeActive
									? {
											color: "color-mix(in oklab, var(--primary) 72%, #E0D3F5 28%)",
											textShadow:
												"0 0 1px color-mix(in oklab, var(--primary) 58%, #E0D3F5 42%)",
										}
									: undefined
							}
						>
							]
						</span>
					</Link>

					<nav
						aria-label="Primary"
						className="relative min-w-0 flex-1 h-[clamp(2.5rem,2.14vw+1.075rem,4.5rem)]"
					>
						<div className="relative h-full w-full">
							<div className="absolute right-0 z-10 flex h-full max-w-full items-center pr-[clamp(1rem,1.5vw,2.5rem)]">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 -left-[clamp(2.5rem,4.5vw+1rem,4.5rem)]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="210"
										height="48"
										viewBox="0 0 210 48"
										fill="none"
										className="absolute left-0 top-0 h-full w-auto"
										role="presentation"
										aria-hidden="true"
									>
										<mask
											id="path-1-inside-1-nav-main"
											fill="#E0D3F5"
										>
											<path d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0" />
										</mask>
										<path
											d="M0 0C38.2511 0 21.0006 48 57.7516 48H210V0"
											fill="#24202C"
										/>
										<path
											d="M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1V0V-1ZM210 48V49H211V48H210ZM211 0C211 -0.552285 210.552 -1 210 -1C209.448 -1 209 -0.552285 209 0H210H211ZM57.7516 48V49H210V48V47H57.7516V48ZM210 48H211V0H210H209V48H210ZM0 0V1C9.31973 1 15.1441 3.90917 19.2727 8.19387C23.4583 12.5377 25.9728 18.3582 28.517 24.3887C31.0303 30.346 33.5776 36.5246 37.8674 41.1778C42.2197 45.8988 48.3065 49 57.7516 49V48V47C48.8212 47 43.2827 44.1012 39.3379 39.8222C35.3306 35.4754 32.909 29.654 30.3597 23.6113C27.8412 17.6418 25.1994 11.4623 20.7129 6.80613C16.1693 2.09083 9.80581 -1 0 -1V0Z"
											fill="#E0D3F5"
											fillOpacity="0.141176"
											mask="url(#path-1-inside-1-nav-main)"
										/>
									</svg>
									<div className="nav-rail-extension absolute inset-y-0 right-0 left-[134px]" />
								</div>
								<ul className="no-scrollbar relative flex min-w-0 flex-nowrap items-center overflow-x-auto gap-x-[clamp(1.25rem,1.43vw+0.71rem,3rem)]">
									{navLinks.map((item) => (
										<li key={item.label}>
											{item.external ? (
												<motion.a
													href={item.href}
													target="_blank"
													rel="noreferrer"
													className="nav-link-plain"
													transition={{
														duration: 0.1,
														ease: "easeOut",
													}}
												>
													<motion.span
														className="nav-link-label"
														variants={navLabelVariants}
														initial="rest"
														animate="rest"
														whileHover="hover"
														whileTap="tap"
														transition={{
															duration: 0.1,
															ease: "easeOut",
														}}
													>
														{item.label}
													</motion.span>
												</motion.a>
											) : (
												<Link
													href={item.href}
													className="nav-link-plain"
													onClick={(event) =>
														handleInternalNav(
															event,
															item.href
														)
													}
												>
													<motion.span
														className="nav-link-label"
														variants={navLabelVariants}
														initial="rest"
														animate={
															isNavItemActive(
																item.href
															)
																? "active"
																: "rest"
														}
														whileHover="hover"
														whileTap="tap"
														transition={{
															duration: 0.1,
															ease: "easeOut",
														}}
													>
														{item.label}
													</motion.span>
												</Link>
											)}
										</li>
									))}
									<li className="hidden items-center gap-4 xl:flex">
										<span aria-hidden="true" className="nav-separator">
											|
										</span>
										<a
											href="https://discord.gg/unblock"
											target="_blank"
											rel="noreferrer"
											aria-label="Discord"
											className="nav-icon-link"
										>
											<FaDiscord />
										</a>
										<a
											href="https://github.com/titaniumnetwork-dev"
											target="_blank"
											rel="noreferrer"
											aria-label="GitHub"
											className="nav-icon-link"
										>
											<FaGithub />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>

		</header>
	);
}
