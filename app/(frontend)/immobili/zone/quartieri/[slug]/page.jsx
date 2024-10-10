import LatestBox from "@/components/LatestBox";
import Button from "@/components/Button";
import { client } from "@/sanity/lib/client";
import { CURRENT_LOCATION } from "@/sanity/lib/queries";
import { LOCATIONS_RELATED } from "@/sanity/lib/queries";

export async function generateMetadata({ params }) {
  const locations = await client.fetch(CURRENT_LOCATION, { slug: params.slug });
  if (!locations) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: locations.title || 'Nuovo Progetto', 
		description: 'In questa pagina sono catalogati gli immobili selezionati per Quartiere di Appartenenza, sfogliali e trova quello giusto per te.',
		openGraph: {
			title: locations.title || 'Nuovo Progetto',
			description: 'In questa pagina sono catalogati gli immobili selezionati per Quartiere di Appartenenza, sfogliali e trova quello giusto per te.',
      url: `https://finelivingimmobiliare.com/immobili/zone/quartieri/${locations.slug}`,
		}
  };
}

const options = { next: { revalidate: 60 } };

const DistrictPage = async ({ params }) => {
	const related = await client.fetch(LOCATIONS_RELATED, params, options )
	const zone = await client.fetch(CURRENT_LOCATION, params, options )
	return (
		<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">
    <h1 className="font-heading flex flex-col">Immobili nella Zona: <span className="text-4xl mt-1 underline text-secondary">{zone.title}</span></h1 >
    <p className="mt-10 font-semibold bg-secondary/90 w-fit py-2 px-3 rounded-xl text-white">Totali: <span className="mx-2 font-bold underline underline-offset-2">{zone.total}</span></p>
    <div className="flex flex-col gap-8 justify-center items-center my-32">
      {
        related.map((post) => {
          return (
            <LatestBox 
              title={post.title} 
              excerpt={post.excerpt}
              image={post.image}
              description={post.description}
              slug={post.slug}
              code={post.code}
              baths={post.various.bath}
              rooms={post.various.rooms}
              area={post.various.area}
              selling={post.selling}
              sellPrice={post.sellPrice}
              renting={post.renting}
              rentPrice={post.rentPrice}
            />
          )
        })
      }
    </div>
    <div className="flex items-center justify-center">
      <Button link='/immobili' text='Torna indietro' isDark isFilled />
    </div>
  </div>
	);
};

export default DistrictPage;