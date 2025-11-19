import { Metadata } from "next";
import disabled from "../../lib/disabled";

export const metadata: Metadata = {
	title: "Services",
};

export default function Services() {
	return (
		<>
			<div className="background"></div>
			<div className="content">
				<div className="docs">
					<div data-aos="fade-right">
						<h2 id="web-proxy-services">Web Proxy Services</h2>
						<br></br>
						<ul className="service-lists">
							<li>
								<Service
									href="https://holyunblocker.org"
									source="https://github.com/QuiteAFancyEmerald/Holy-Unblocker/"
								>
									Holy Unblocker LTS
								</Service>
							</li>
							<li>
								<Service
									href="https://anura.pro"
									source="https://github.com/MercuryWorkshop/anuraOS"
								>
									AnuraOS
								</Service>
							</li>
							<li>
								<Service
									href="https://terbiumon.top"
									source="https://github.com/TerbiumOS/web-v2"
								>
									Terbium
								</Service>
							</li>
							<li>
								<Service
									href="https://incog.works"
									source="https://github.com/MotorTruck1221/Incognito"
								>
									Incognito
								</Service>
							</li>
							<li>
								<Service
									href="https://radon.games"
									source="https://github.com/Radon-Games/Radon-Games"
								>
									Radon Games
								</Service>
							</li>
							<li>
								<Service
									href="https://nebulaservices.org"
									source="https://github.com/NebulaServices/Nebula"
								>
									Nebula
								</Service>
							</li>
							<li>
								<Service
									href="https://definitelyscience.com"
									source="https://github.com/titaniumnetwork-dev/Definitely-Science"
								>
									Definitely Science
								</Service>
							</li>
							<li>
								<Service
									href="https://kazwire.com"
									source="https://github.com/whos-evan/kazwire"
								>
									Kazwire
								</Service>
							</li>
							<li>
								<Service
									href="https://fern.best"
									source="https://github.com/genericness/fern-foss"
								>
									Fern
								</Service>
							</li>
						</ul>
						<br></br>
						<h3 id="web-proxy-services">Community Proxy Services</h3>
						<br></br>
						<ul className="service-lists"></ul>
					</div>
				</div>
			</div>
		</>
	);
}

function Service({
	href,
	children,
	source,
}: {
	href: string;
	children: React.ReactNode;
	source?: string;
}) {
	return (
		<>
			<a href={href} target="_blank">
				{children}
			</a>
			<div>
				<a href={href} target="_blank">
					❐
				</a>
			</div>
			<div>
				{source ? (
					<a href={source} target="_blank">
						[Source]
					</a>
				) : (
					""
				)}
			</div>
		</>
	);
}
