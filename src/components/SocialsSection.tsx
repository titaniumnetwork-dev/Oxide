import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaRedditAlien,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { FadeIn } from "./Motion";

const socials = [
	{
		name: "GitHub",
		url: "https://github.com/titaniumnetwork-dev",
		icon: FaGithub,
	},
	{
		name: "Discord",
		url: "https://discord.gg/unblock",
		icon: FaDiscord,
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/@Titanium-Network",
		icon: FaYoutube,
	},
	{
		name: "X",
		url: "https://x.com/TitaniumNetDev",
		icon: FaXTwitter,
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/titaniumnetwork.org",
		icon: SiBluesky,
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/titaniumnetworkdotorg",
		icon: FaInstagram,
	},
	{
		name: "TikTok",
		url: "https://www.tiktok.com/@titaniumnetwork.org",
		icon: FaTiktok,
	},
	{
		name: "Reddit",
		url: "https://reddit.com/r/TitaniumNetwork",
		icon: FaRedditAlien,
	},
];

export function SocialsSection() {
	return (
		<div className="legacy-stack">
			<FadeIn>
				<h2 id="socials">Socials</h2>
			</FadeIn>
			<ul className="social-list-legacy">
				{socials.map((social, index) => (
					<li key={social.name}>
						<FadeIn delay={index * 0.04 + 0.03}>
							<Social
								url={social.url}
								name={social.name}
								Icon={social.icon}
							/>
						</FadeIn>
					</li>
				))}
			</ul>
		</div>
	);
}

function Social({
	url,
	name,
	Icon,
}: {
	url: string;
	name: string;
	Icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<a className="social-row-legacy" href={url} target="_blank">
			<span className="social-name">{name}</span>
			<span className="social-badge" aria-hidden="true">
				<Icon className="h-4 w-4" />
			</span>
		</a>
	);
}
