import { Metadata } from "next";
import { FadeIn } from "../components/Motion";
import { HeroActions } from "../components/HeroActions";

export const metadata: Metadata = {
	title: "TitaniumNetwork",
};

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-275 pb-16 pt-8 md:px-8">
			<section className="content-frame min-h-[calc(100vh-11.5rem)] grid place-items-center pt-6 pb-8">
				<FadeIn className="w-full text-center">
					<h1 className="mx-auto text-balance text-[clamp(2.4rem,7.4vw,5.4rem)] leading-[0.92] tracking-[-0.03em] text-white">
						TitaniumNetwork
					</h1>
					<p className="mx-auto mt-6 max-w-[52ch] text-[clamp(1.02rem,1.9vw,1.34rem)] leading-relaxed text-white/78">
						Services for a less restrictive web experience, built
						with a focus on access, privacy, and practical
						deployment.
					</p>
					<HeroActions
						actions={[
							{
								href: "/setup",
								label: "Get Started",
								variant: "primary",
								title: "Wondering on how to unblock sites or self-host?",
							},
							{
								href: "https://docs.titaniumnetwork.org",
								label: "Documentation",
								variant: "secondary",
								external: true,
								title: "Look here for either contributing or hosting your own web proxy service using our various open-source projects!",
							},
						]}
					/>
				</FadeIn>
			</section>
		</main>
	);
}
