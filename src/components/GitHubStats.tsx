"use client";

import { useEffect, useState } from "react";

type OrgStats = {
	stars: number;
	followers: number;
};

function formatCompact(n: number) {
	return new Intl.NumberFormat("en", { notation: "compact" }).format(n);
}

export function GitHubStats() {
	const [stats, setStats] = useState<OrgStats | null>(null);

	useEffect(() => {
		let cancelled = false;
		async function load() {
			try {
				const orgRes = await fetch(
					"https://api.github.com/orgs/titaniumnetwork-dev"
				);
				if (!orgRes.ok) return;
				const org = await orgRes.json();
				let stars = 0;
				let url: string | null =
					"https://api.github.com/orgs/titaniumnetwork-dev/repos?per_page=100";
				while (url) {
					const res: Response = await fetch(url);
					if (!res.ok) return;
					const repos = await res.json();
					for (const repo of repos) stars += repo.stargazers_count ?? 0;
					const link = res.headers.get("link");
					const next = link?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;
					url = next;
				}
				if (!cancelled)
					setStats({ stars, followers: org.followers ?? 0 });
			} catch {
				// leave hidden on failure (offline, rate-limited, etc.)
			}
		}
		load();
		return () => {
			cancelled = true;
		};
	}, []);

	if (!stats) return null;

	return (
		<p className="mt-6 text-[0.8rem] tracking-wide text-[#E0D3F5]/55">
			<a
				href="https://github.com/titaniumnetwork-dev"
				target="_blank"
				rel="noreferrer"
				className="transition-colors duration-150 hover:text-[#B295E4]"
			>
				{formatCompact(stats.stars)} stars /{" "}
				{formatCompact(stats.followers)} followers
			</a>
		</p>
	);
}
