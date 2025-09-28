import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Socials",
};

export default function Socials() {
	return (
		<>
			<div className="background"></div>
			<div className="content">
				<div className="docs">
					<div data-aos="fade-right">
						<h2 id="titanium-socials">Socials</h2>
						<br></br>
						<ul className="service-lists">
							<li>
								<Social
									url="https://github.com/titaniumnetwork-dev"
									css="github"
								>
									GitHub
								</Social>
							</li>
							<li>
								<Social url="https://discord.gg/unblock" css="discord">
									Discord
								</Social>
							</li>
							<li>
								<Social
									url="https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg"
									css="youtube"
								>
									YouTube
								</Social>
							</li>
							<li>
								<Social url="https://x.com/TitaniumNetDev" css="x">
									X
								</Social>
							</li>
							<li>
								<Social
									url="https://bsky.app/profile/titaniumnetwork.org"
									css="bluesky"
								>
									Bluesky
								</Social>
							</li>
							<li>
								<Social
									url="https://www.instagram.com/titaniumnetworkofficial_"
									css="instagram"
								>
									Instagram
								</Social>
							</li>
							<li>
								<Social
									url="https://www.tiktok.com/@titaniumnetwork.org"
									css="tiktok"
								>
									TikTok
								</Social>
							</li>
							<li>
								<Social url="https://reddit.com/r/TitaniumNetwork" css="reddit">
									Reddit
								</Social>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

function Social({
	url,
	css,
	children,
}: {
	url: string;
	css: string;
	children: React.ReactNode;
}) {
	return (
		<>
			<a href={url} target="_blank">
				{children}
			</a>
			<div>
				<a href={url}>
					<i className={`fa-brands fa-${css}`}></i>
				</a>
			</div>
		</>
	);
}
