import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page Not Found",
};

export default function NotFound() {
	return (
		<main className="mx-auto w-full max-w-275 px-4 pb-16 pt-8 md:px-8">
			<section className="content-frame min-h-[calc(100vh-11.5rem)] grid place-items-center pt-6 pb-8">
				<div className="w-full max-w-180 text-center">
					<p className="text-sm font-semibold tracking-[0.18em] text-white/65">404</p>
					<h1 className="mt-3 text-balance text-[clamp(2.1rem,6.2vw,4rem)] leading-[0.95] tracking-[-0.03em] text-white">
						Page Not Found
					</h1>
					<p className="mx-auto mt-5 max-w-[48ch] text-[clamp(1rem,1.8vw,1.2rem)] text-white/78">
						We've disabled TitaniumNetwork servicessss...
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Link
							href="/"
							className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(122deg,#e65153_0%,#cd3f5a_48%,#ff7d62_100%)] px-5 py-2.5 text-[0.98rem] font-semibold leading-none tracking-[0.01em] whitespace-nowrap text-white transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45"
						>
							Go Home
						</Link>
						<a
							href="https://docs.titaniumnetwork.org"
							target="_blank"
							rel="noreferrer"
							className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/6 px-5 py-2.5 text-[0.98rem] font-semibold leading-none tracking-[0.01em] whitespace-nowrap text-white transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:bg-white/10 hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45"
						>
							Documentation
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
