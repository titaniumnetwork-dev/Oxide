import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "../components/Motion";

export const metadata: Metadata = {
	title: "TitaniumNetwork",
};

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-[1100px] px-4 pb-16 pt-8 md:px-8">
			<section className="content-frame pt-5 min-h-[calc(100vh-11.5rem)]">
				<FadeIn className="mx-auto max-w-[760px] pt-56 md:pt-64 sm:pt-24">
					<h1 className="text-balance text-[clamp(2.4rem,7.4vw,5.4rem)] leading-[0.92] tracking-[-0.03em] text-white">
						Titanium Network
					</h1>
					<p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1.9vw,1.34rem)] leading-relaxed text-white/78">
						Services for a less restrictive web experience, built with a focus on
						access, privacy, and practical deployment.
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<Link
							title="Wondering on how to unblock sites or self-host?"
							className="cta-hot"
							href="/setup"
						>
							Get Started
						</Link>
						<a
							title="Look here for either contributing or hosting your own web proxy service using our various open-source projects!"
							className="cta-cool"
							href="https://docs.titaniumnetwork.org"
							target="_blank"
						>
							Documentation
						</a>
					</div>
				</FadeIn>
			</section>
		</main>
	);
}
