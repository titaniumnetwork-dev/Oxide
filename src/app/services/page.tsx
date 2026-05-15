import { Metadata } from "next";
import { FadeIn } from "../../components/Motion";

export const metadata: Metadata = {
	title: "Services",
};

const serviceGroups = [
	{
		title: "Browsing",
		services: [
			{
				name: "InvisiProxy LTS",
				href: "https://invisiproxy.com",
				source: "https://github.com/QuiteAFancyEmerald/InvisiProxy/",
			},
			{
				name: "DayDreamX",
				href: "https://daydreamx.pro",
				source: "https://gitlab.com/nightnetwork/daydreamx",
			},
			{
				name: "Incognito",
				href: "https://incog.works",
				source: "https://github.com/MotorTruck1221/Incognito",
			},
			{
				name: "Lunar",
				href: "https://nebulaservices.org",
				source: "https://github.com/NebulaServices/Nebula",
			},
			{
				name: "Nebula",
				href: "https://nebulaservices.org",
				source: "https://github.com/NebulaServices/Nebula",
			},
		],
	},
	{
		title: "WebOS",
		services: [
			{
				name: "AnuraOS",
				href: "https://anura.pro",
				source: "https://github.com/MercuryWorkshop/anuraOS",
			},
			{
				name: "Terbium",
				href: "https://terbiumon.top",
				source: "https://github.com/TerbiumOS/web-v2",
			},
		],
	},
	{
		title: "Unblocked Games",
		services: [
			{
				name: "Truffled",
				href: "https://truffled.lol",
				source: "https://github.com/aukak/truffled",
			},
			{
				name: "Space",
				href: "https://gointospace.app",
				source: "https://gitlab.com/nightnetwork/Space",
			},
			{
				name: "Kazwire",
				href: "https://kazwire.com",
				source: "https://github.com/whos-evan/kazwire",
			},
			{
				name: "Definitely Science",
				href: "https://definitelyscience.com",
				source: "https://github.com/titaniumnetwork-dev/Definitely-Science",
			},
		],
	},
];

export default function Services() {
	return (
		<main className="mx-auto w-full max-w-300 px-4 pb-16 pt-8 md:px-8">
			<section className="content-frame mx-auto max-w-245">
				<div className="legacy-stack">
					<FadeIn>
						<h2 id="web-proxy-services">Web Proxy Services</h2>
					</FadeIn>

					{serviceGroups.map((group, index) => (
						<FadeIn className="service-group" key={group.title} delay={index * 0.05 + 0.02}>
							<h3>{group.title}</h3>
							<ul className="service-list-legacy">
								{group.services.map((service) => (
									<li key={service.name}>
										<Service href={service.href} source={service.source}>
											{service.name}
										</Service>
									</li>
								))}
							</ul>
						</FadeIn>
					))}
				</div>
			</section>
		</main>
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
		<div className="service-row-legacy">
			<a className="service-name" href={href} target="_blank">
				{children}
			</a>
			<div className="service-meta">
				<a className="service-link-icon" href={href} target="_blank">
					❐
				</a>
				{source ? (
					<a className="service-source" href={source} target="_blank">
						[Source]
					</a>
				) : null}
			</div>
		</div>
	);
}
