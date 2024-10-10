import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const metadata = {
	title: 'Sitemap',
	description: 'In questa pagina puoi trovare la Sitemap del nostro sito web che elenca tutte le pagine del sito.',
	openGraph: {
		title: 'Sitemap',
    description: 'In questa pagina puoi trovare la Sitemap del nostro sito web che elenca tutte le pagine del sito.',
    url: 'https://finelivingimmobiliare.com/sitemap'
	}
}


const options = { next: { revalidate: 60 } };

const all_zones = defineQuery(`*[_type == 'zones']{
  title,
  slug,
  "areas": *[_type == 'locations' && references(^._id)]{
    title,
    slug,
    "listings": *[_type == 'listings' && references(^._id)]{
      title,
      slug,
      code,
    },
  },
}`)

const SitemapPage = async () => {
	const zones = await client.fetch(all_zones, {}, options)
	return (
		<section className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">  
				<h1 className="font-heading">Sitemap</h1>
				<div className="mt-10">
					<ul className="menu rounded-box w-full">
						<li><a href="/">Homepage</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/contatti">Contatti</a></li>
						<li>
							<a href="/servizi">Servizi</a>
							<ul>
								<li><a href="/servizi/valuta">Valuta il tuo Immobile</a></li>
								<li><a href="/servizi/richiedi">Richiesta Specifica</a></li>
								<li><a href="/servizi/proponi">Proponi il tuo Immobile</a></li>
							</ul>
						</li>
						<li>
							<a href="/immobili">Immobili</a>
							<ul>
								{zones.map((zone) => (
									<li>
										<a href={'/immobili/zone/' + zone.slug.current}>{zone.title}</a>
										<ul>
											{zone.areas.map((area) => (
												<li >
													<a href={'/immobili/zone/quartieri/' + area.slug.current}>{area.title}</a>
													<ul>
														{area.listings.map((listing) => (
															<li>
																<a href={'/immobili/'+ listing.slug.current}>{listing.title} | Cod. Agenzia: {listing.code}</a>
															</li>
														))}
													</ul>
												</li>
											))}
										</ul>
									</li>
								))}
							</ul>
						</li>
						<li><a href="/">Privacy & Cookie Policy</a></li>
						<li><a href="/">Revoca Consensi</a></li>
					</ul>
				</div>
		</section>		

	);
};

export default SitemapPage;