import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "TitaniumNetwork",
};

export default function Home() {
	return (
		<>
			<div className="background"></div>
			<div className="content">
				<div className="container">
					<div data-aos="fade-right">
						<p
							title="TitaniumNetwork is a provider of various web proxy services for unblocking sites and bypassing censorship."
							className="header-text"
						>
							The Service Hub for TitaniumNetwork
						</p>
						<p
							title="This is the mobile version of TitaniumNetwork's documentation service, ProxyDocs."
							className="header-text-mobile"
						>
							TN Service Hub
						</p>
						<p title="What is TitaniumNetwork?">
							TitaniumNetwork is an organization dedicated to providing
							services related to bypassing internet censorship. Our projects
							provide users with a less restrictive
							browsing experience. For this TN prioritizes the production and
							improvement of web proxy technologies.
						</p>
						<div className="button-group">
							<Link
								title="Wondering on how to unblock sites or self-host?"
								className="button"
								href="/setup"
							>
								Get Started
							</Link>
							<a
								title="Look here for either contributing or hosting your own web proxy service using our various open-source projects!"
								className="button button-right"
								href="https://docs.titaniumnetwork.org"
								target="_blank"
							>
								Documentation
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
