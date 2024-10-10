import Link from "next/link";
import LatestBox from "@/components/LatestBox";
import Zones from "@/components/Zones";
import SearchBar from "@/components/SearchBar";
import { client } from "@/sanity/lib/client";
import Button from "@/components/Button";

export const metadata = {
	title: 'Immobili',
  description: 'Scopri il nostro listino immobiliare e trova la casa che più ti piace.',
  openGraph: {
    title: 'Immobili',
		description: 'Scopri il nostro listino immobiliare e trova la casa che più ti piace.',
    url: 'https://finelivingimmobiliare.com/immobili'
  }
}


const POSTS_PER_PAGE = 3;

const PAGINATED_QUERY = (start, end) => `
  *[_type == "listings"] | order(_createdAt desc) [${start}...${end}] {
	_id,
  title,
  excerpt,
  'image': gallery[0].asset -> url,
  description,
  "slug": slug.current,
  "district": district -> {title,"slug": slug.current, "zone": zone -> {title,"slug": slug.current}},
  className,
  code,
  various,
  selling,
  sellPrice,
  renting,
  rentPrice
  }
`

const options = { next: { revalidate: 60 } };

const PropertiesPage = async ({ searchParams }) => {
	const page = searchParams.page ? parseInt(searchParams.page) : 1; // Fallback to page 1

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const properties = await client.fetch(PAGINATED_QUERY(start, end), {},options);
  const totalPosts = await client.fetch('count(*[_type == "listings"])');
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

	return (
		<div className="mx-10 lg:mx-20 mt-20">	
			<h1 className="font-heading">Immobili</h1>
			<div className="max-w-5xl mx-auto pt-10">
				<SearchBar />
			</div>
			<Zones />
			<ul className="flex flex-col gap-8 justify-center items-center mb-32">
        {properties.map((property) => (
							<LatestBox 
							id={property._id}
							title={property.title}
							excerpt={property.excerpt}
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
        ))}
      </ul>

      {/* Pass props to the client component */}
			<div className="flex justify-center gap-3 mt-4">
				{page > 1 && (
					<Button link={`/immobili?page=${page - 1}`} text='Precedente' />

				)}
				{page < totalPages ? (
					<Button link={`/immobili?page=${page + 1}`} text='Successiva' />
				) : page == totalPages ? (null) : (null) }
			</div>
		</div>
	);
};

export default PropertiesPage;