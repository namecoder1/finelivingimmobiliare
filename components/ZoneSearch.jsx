import { client } from "@/sanity/lib/client";
import { ZONES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ZoneSearch = async () => {
	const zones = await client.fetch(ZONES_QUERY, {}, options)
	return (
		<div className="my-32">
			<div className="text-center flex flex-col items-center justify-center">
				<h1 className="font-heading text-3xl">Ricerca per Zona:</h1>
				<p className="mt-2">Risparmia tempo e cerca comodamente</p>
			</div>
			<div className="flex md:flex-row flex-col items-center justify-center gap-14 mt-10 my-5">
				{
					zones.map(zone => {
						return (
						<a href={'immobili/zone/' + zone.slug} className="card bg-base-100 image-full w-80 shadow-xl items-end">
							<figure>
								<img
									src={zone.image}
									alt={`Immagine della categoria ${zone.title}`}
									/>
								<div className="absolute inset-0 bg-gray-700/40 rounded-[14px] mix-blend-multiply"></div>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-white text-2xl">{zone.title}</h2>
							</div>
						</a>
						)
					})
				}
			</div>
		</div>
	);
};

export default ZoneSearch;