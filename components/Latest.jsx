import Button from "./Button";
import LatestCard from "./LatestCard";
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const Latest = async () => {
	const listings = await client.fetch(LATEST_POSTS, {}, options);
	return (
		<div className="flex flex-col items-center justify-center my-32 gap-10">
			<div className="flex flex-col">
				<h1 className="font-heading text-black text-3xl text-center">Novità</h1>
				<p className="text-center mt-3">Proposte immobiliari più recenti.</p>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-center gap-20 ">
				{
					listings.map((property) => {
						return (
							<LatestCard
								title={property.title}
								image={property.image}
								description={property.description}
								slug={property.slug}
								code={property.code}
								baths={property.various.bath}
								rooms={property.various.rooms}
								area={property.various.area}
								selling={property.selling}
								sellPrice={property.sellPrice}
								renting={property.renting}
								rentPrice={property.rentPrice}
								/>
						);
					})
				}
			</div>
			<Button link='/immobili' text='Tutti gli Immobili'/>
		</div>
	);
};

export default Latest;