import { client } from "@/sanity/lib/client";
import { CURRENT_ZONE } from "@/sanity/lib/queries";
import { ZONES_RELATED } from "@/sanity/lib/queries";
import LatestBox from "@/components/LatestBox";
import Button from "@/components/Button";

export async function generateMetadata({ params }) {
  const zone = await client.fetch(CURRENT_ZONE, { slug: params.slug });
  if (!zone) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: zone.title || 'Nuovo Progetto', 
		description: 'In questa pagina sono catalogati gli immobili selezionati per Area di Appartenenza, sfogliali e trova quello giusto per te.',
		openGraph: {
			title: zone.title || 'Nuovo Progetto',
			description: 'In questa pagina sono catalogati gli immobili selezionati per Area di Appartenenza, sfogliali e trova quello giusto per te.',
      url: `https://finelivingimmobiliare.com/immobili/zone/${zone.slug}`,
		}
  };
}

const options = { next: { revalidate: 60 } };

const ZonesPage = async ({ params }) => {
	const related = await client.fetch(ZONES_RELATED, params, options )
	const zone = await client.fetch(CURRENT_ZONE, params, options )
	return (
		<>
			<section id="hero">
				<div className="relative font-poppins">
					<div className="absolute inset-x-0 bottom-0 h-full bg-gray-800"></div>
					<div className=" max-w-auto">
						<div className="relative shadow-xl sm:overflow-hidden ">
							<div className="absolute inset-0">
								<img className="h-full w-full object-cover opacity-40" src={zone.image} alt="Immagine di copertina" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
								<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">{zone.title}</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">
				<h1 className="font-heading flex flex-col">Immobili nella Zona: <span className="text-4xl mt-1 underline text-secondary">{zone.title}</span></h1>
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
					<Button link='/' text='Torna indietro' />
				</div>
			</div>
		</>

	);
};

export default ZonesPage;