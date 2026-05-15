import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "../../components/Motion";

export const metadata: Metadata = {
	title: "Setup",
};

export default function Setup() {
	return (
		<main className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 md:px-8">
			<FadeIn>
				<section className="content-frame mx-auto max-w-[980px]">
					<div className="legacy-stack">
						<h1 id="usage">Usage</h1>
						<p>
							TitaniumNetwork&apos;s services can be utilized either by hosting
							manually or using the officially hosted services. These servies
							such as InvisiProxy or AnuraOS can be obtained in the{" "}
							<a href="https://discord.gg/unblock" target="_blank">
								TN Discord
							</a>{" "}
							with a brief overview on the <Link href="/services">Services</Link>.
						</p>
						<h3>Web Proxy Services</h3>
						<p>
							In order to use a web proxy site, you would simply obtain any of our
							official domains (URLs/mirrors) from the TitaniumNetwork discord.
						</p>
						<p>
							Example Mirror/URL: <code>https://invisiproxy.com</code>
						</p>
						<p>
							Then you would just simply access the mirror URL on any modern
							browser, enter in a site within the search engine on the proxy site
							and enjoy unblocked content!
						</p>
						<h3>Kajigs</h3>
						<p>
							A repository of methods/exploits (found in the TN discord)
							maintained by TitaniumNetwork you can employ enabling you to bypass
							restrictions!
						</p>
						<p>
							These exploits range from WebView bypasses, Extension bypasses,
							chromeOS vulnerabilities, Windows elevation bypasses, and most web
							filter bypasses.
						</p>
						<h3>Setup</h3>
						<p>
							If you wish to setup any of TitaniumNetwork&apos;s services please
							check out{" "}
							<a href="https://docs.titaniumnetwork.org">the documentation.</a>
						</p>
					</div>
				</section>
			</FadeIn>
		</main>
	);
}
