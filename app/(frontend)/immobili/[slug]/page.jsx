import { client } from "@/sanity/lib/client";
import { SINGLE_POST } from "@/sanity/lib/queries";
import Button from "@/components/Button";
import CopyLinkButton from "@/components/CopyLinkButton";
import Carousel from "@/components/Carousel";
import PortableText from "@/components/PortableTextComponent";
import Form from "@/components/Form";

export async function generateMetadata({ params }) {
  const post = await client.fetch(SINGLE_POST, { slug: params.slug });
  if (!post) {
    return { title: 'Progetto Non Trovato' };
  }
  return {
    title: post.title || 'Nuovo Progetto', 
		description: post.excerpt || 'Progetto Senza Descrizione',
		openGraph: {
			title: post.title || 'Nuovo Progetto',
      description: post.excerpt || 'Progetto Senza Descrizione',
      url: `https://finelivingimmobiliare.com/immobili/${post.slug}`,
      images: [
        {
          url: post.images[0],
          alt: post.title,
          width: 500,
          height: 200,
        },
      ],
		}
  };
}

const options = { next: { revalidate: 60 } };

const PropertyPage = async ({ params }) => {
	const post = await client.fetch(SINGLE_POST, params, options);
	return (
		<article className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">
			<section>
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
					<hgroup>
						<h1 className="font-heading">{post.title}</h1>
						<h2 className=" text-xl mt-2">{post.description}</h2>
					</hgroup>
					<p className=" text-2xl text-secondary font-semibold mt-3 lg:mt-0">
						{post.renting ? (
							<span>€ {post.rentPrice} / Mese</span>
						) : (!post.renting && !post.selling) ? (
							<span>Su Contatto</span>
						) : !post.renting ? (
							<span>€ {post.sellPrice}</span>
						) : (<span>Da definire</span>)
						}
					</p>
				</div>
				<Carousel images={post.images} />
				<div className="my-5 grid grid-cols-2 grid-rows-1 gap-20 xl:gap-0 xl:grid-rows-none xl:grid-cols-5 items-start justify-center">
					<div className="max-w-full xl:max-w-8xl col-span-5 xl:col-span-4 xl:mr-5 flex flex-col items-center justify-center">
						<PortableText value={post.text} />
						<p className=" font-bold text-xs my-10">Per ulteriori informazioni e visite, contattare l'agenzia immobiliare Fine Living Immobiliare al <span className="underline underline-offset-2">+39 347 842 9161</span>. La presente scheda non può essere divulgata ad altre persone ed è soggetta alla Legge relativa alla riservatezza personale. Inoltre il presente documento non costituisce elemento contrattuale ai sensi dell'art. 13 e 14 del regolamento generale sulla protezione dei dati UE 2016/679. .</p>
					</div>
					<div className="aside flex flex-col gap-10 max-w-full justify-center items-center col-span-5 xl:col-span-1">
						<div className="w-full p-8 flex flex-col gap-y-8 border-2 ">
						<h3 className="text-left font-semibold text-xl">Caratteristiche</h3>
							<ul className="grid grid-rows-2 grid-cols-3 sm:flex justify-between flex-wrap gap-x-10 gap-y-5 xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:gap-y-10 xl:gap-x-5">
								<li className="flex gap-2  font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><g fill="none" fillRule="evenodd"><><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M7 6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v5H4a2 2 0 0 0-2 2v1a5.994 5.994 0 0 0 2.625 4.961l-.332.332a1 1 0 1 0 1.414 1.414l.876-.875c.454.11.929.168 1.417.168h8c.488 0 .963-.058 1.417-.168l.876.875a1 1 0 0 0 1.414-1.414l-.332-.332A5.994 5.994 0 0 0 22 14v-1a2 2 0 0 0-2-2H7zm-3 7h16v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/></></g></svg>
									<p>{post.various.bath}</p>
								</li>
								<li className="flex gap-2 font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"/></svg>
											<p>{post.various.rooms}</p>
								</li>
								<li className="flex gap-2  font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M5 9.979C5 11.095 6.79 12 9 12V9.979c0-.994 0-1.492-.397-1.795c-.398-.303-.792-.19-1.58.037C5.815 8.57 5 9.226 5 9.98"/><path d="M16 8.5c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5S5.134 5 9 5s7 1.567 7 3.5"/><path d="M2 9v6.667C2 17.507 5.134 19 9 19h11c.943 0 1.414 0 1.707-.293S22 17.943 22 17v-3c0-.943 0-1.414-.293-1.707S20.943 12 20 12H9m9 7v-2m-4 2v-2m-4 2v-2m-4 1.5v-2"/></g></svg>
									<p>{post.various.area}</p>
								</li>
								<li className="flex gap-2  font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"/><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8m6-15h6m-3-3v6"/></g></svg>
									<p>{post.various.constructionYear}</p>
								</li>
								<li className="flex gap-2  font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-48 120h48v24h-88v-24Zm8-16v-24h40v24Zm40-88v48h-48a8 8 0 0 0-8 8v32h-40a8 8 0 0 0-8 8v32H56V40Zm0 176H56v-32h144z"/></svg>
									<p>{post.various.floors}</p>
								</li>
								<li className="flex gap-2  font-semibold">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M11 16v-5H3m18-3h-6v2m0 8v3m-4-2v2m0-18v3m10 9h-6v-2m-4-4v2" /><path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" /></g></svg>
									<p>{post.various.locals}</p>
								</li>   
							</ul>
						<div className="flex flex-col min-[501px]:flex-row gap-5 xl:flex-col">
							<div className="w-sm text-center font-semibold max-w-full">
								{post.className == "ClassNamee Energetica A" ? (
									<p className="bg-[#33a357] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica B" ? (
									<p className="bg-[#79b752] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica C" ? (
									<p className="bg-[#c3d545] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica D" ? (
									<p className="bg-[#fff12c] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica E" ? (
									<p className="bg-[#edb731] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica F" ? (
									<p className="bg-[#d66f2c] px-4 py-2 rounded-md ">{post.className}</p>
									) : post.className == "ClassNamee Energetica G" ? (
									<p className="bg-[#cc232a] px-4 py-2 rounded-md ">{post.className}</p>
									) : (<p className="bg-gray-300 px-4 py-2 rounded-md">Classe Energ. in Corso</p>)
								} 
							</div>
							<CopyLinkButton />
						</div>
						<div>
							<h3 className=" font-semibold mb-5 text-xl">Informazioni</h3>
							<ul className="flex flex-col sm:flex-row gap-y-3 gap-x-10 justify-evenly xl:flex-col">
								<li><p className=" font-medium">Rif. Agenzia: <span className="underline underline-offset-2 font-semibold">{post.code}</span></p></li>
								<li><p className=" font-medium">Posto Auto: {post.various.garage ? (<span className="underline underline-offset-2 font-semibold">Disponibile</span>) : (<span className="font-semibold">Non Disponibile</span>)}</p></li>
								<li><p className=" font-medium">Disponibilità: {post.various.available ? (<span className="underline underline-offset-2 font-semibold">Libero</span>) : (<span className="font-semibold">Occupato</span>)}</p></li>
							</ul>
						</div>
					</div>
					</div>
				</div>
			</section>
			<section>
				<div className="w-full mt-32 xl:mt-20">
					<div className="mb-10">
						<h1 className="font-heading mb-3">Ubicazione</h1>
						<p>Per la tutela dei dati personali, la via indicata dal puntatore sulla mappa è approssimativa. </p>
					</div>
					<iframe title="Mappa dell'Immobile" src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&maptype=satellite&q=${post.luogo.indirizzo}`} width="600" height="450"  className="w-full" allowFullScreen="" loading="lazy"></iframe>
				</div>
			</section>
			<section>
				<div className="my-32 flex flex-col">
					<h1 className="font-heading">Richiedi Informazioni</h1>
					<Form name='Pagina Immobile' textarea post={post.code}>
					<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
						<input required type="text" name="nome" placeholder="*Nome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Nome" />
						<input type="text" name="cognome" placeholder="Cognome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Cognome" />
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
						<input required type="email" name="Email" placeholder="*Email" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Email" />
						<input required type="text" name="Telefono" placeholder="*Cellulare" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Telefono" />
					</div>
					</Form>
				</div>
			</section>
			<div className="flex mx-auto mt-5">
				<Button text='Torna Indietro' link='/immobili' />
			</div>
		</article>

	);
};

export default PropertyPage;