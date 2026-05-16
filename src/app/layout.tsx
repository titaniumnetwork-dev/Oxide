import { Metadata, Viewport } from "next";
import Nav from "../components/Nav";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
	title: "TitaniumNetwork",
	description:
		"The official site for TitaniumNetwork, an organization dedicated to providing free access to information by innovating web proxy technologies and bypassing censorship.",
	keywords:
		"proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, InvisiProxy, chromebooks, titaniumnetwork, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked, Titanium Network, Hypertabs, Securly, iboss, Relay, Lightspeed, Unblock, Bypass, Chromebooks, Alloy Proxy",
	robots: "index, follow, snippet",
	icons: "/logo.png",
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: {
		media: "(prefers-color-scheme: dark)",
		color: "#434c5e",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={raleway.variable}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "TitaniumNetwork",
							url: "https://titaniumnetwork.org",
							logo: "https://titaniumnetwork.org/logo.png",
							alternateName: "TitaniumNetworkDevelopment",
							sameAs: [
								"https://github.com/titaniumnetwork-dev",
								"https://discord.gg/unblock",
								"https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg",
								"https://x.com/TitaniumNetDev",
								"https://bsky.app/profile/titaniumnetwork.org",
								"https://www.instagram.com/titaniumnetworkofficial_",
								"https://www.tiktok.com/@titaniumnetwork.org",
								"https://reddit.com/r/TitaniumNetwork",
							],
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: "What is TitaniumNetwork?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "TitaniumNetwork is an organization dedicated to providing services related to bypassing internet censorship. Our projects provide users with a less restrictive browsing experience. For this TN prioritizes the production and improvement of web proxy technologies.",
									},
								},
								{
									"@type": "Question",
									name: "Can I use TitaniumNetwork to evade website blocks?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Of course, whether it's at your school, or in the workplace, our robust proxies allow you to bypass web filters, including iBoss, Cisco, and more.",
									},
								},
								{
									"@type": "Question",
									name: "Does TitaniumNetwork help protect my online privacy?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes! Just like a VPN, TN hides your IP address, and also prevents site data from being stored locally in an identifiable manner.",
									},
								},
								{
									"@type": "Question",
									name: "How do I unblock websites at school?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Using TitaniumNetwork's various services such as InvisiProxy, a free web proxy service with frequent updates and domain restocks, you can unblock sites at school! If a InvisiProxy site gets blocked simply join the TN Discord to request for a newer site. Restocks occur monthly to prevent mass blocking.",
									},
								},
								{
									"@type": "Question",
									name: "What sites can I unblock with InvisiProxy?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "With InvisiProxy you can access sites such as Discord, Spotify, YouTube and other game sites!",
									},
								},
								{
									"@type": "Question",
									name: "Are web proxies safe?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yep! Check out our Privacy Policy for more information. We don't collect or log any information as it defeats our main moral with ending internet censorship and providing a more private experience without downloading anything. We are also open-source.",
									},
								},
								{
									"@type": "Question",
									name: "Does InvisiProxy hide my search history?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes! Change your Tab appearance via Settings > Tab Cloak and use Stealth mode when browsing.",
									},
								},
								{
									"@type": "Question",
									name: "What is the main project TitaniumNetwork has worked on with web proxy technologies?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Ultraviolet, a highly sophisticated proxy used for evading internet censorship or accessing websites in a controlled sandbox using the power of service-workers and more!",
									},
								},
								{
									"@type": "Question",
									name: "Where can I obtain more proxy sites?",
									acceptedAnswer: {
										"@type": "Answer",
										text: 'Be sure to join the TitaniumNetwork discord at discord.gg/unblock! Then simply use the bot in #panel to get a new link.',
									},
								},
								{
									"@type": "Question",
									name: "Is InvisiProxy open-source?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes! Check out our GitHub where you can deploy or host your own instance of InvisiProxy.",
									},
								},
							],
						}),
					}}
				></script>
			</head>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
