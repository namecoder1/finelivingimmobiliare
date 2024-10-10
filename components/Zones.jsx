import { client } from "@/sanity/lib/client";
import { LOCATIONS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

const Zones = async () => {
	const locations = await client.fetch(LOCATIONS_QUERY, {}, options)
	return (
		<div className="my-10">
			<div className="divider my-1" />
			<ul className="flex gap-5 overflow-x-scroll py-2 carousel">
				{
					locations.map((location) => {
						return (
							<li className="carousel-item">
								<Link href={`/immobili/zone/quartieri/` + location.slug} className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white hover:border-secondary flex items-center justify-center font-semibold py-2 px-3 rounded-lg border-2 duration-200">{location.title}</Link>
							</li>
						)
					})
				}
			</ul>
			<div className="divider my-1" />
		</div>
	);
};

export default Zones;