import Image from "next/image";
import heroImg from "@/assets/images/heroImg.jpg"
import ZoneSearch from "@/components/ZoneSearch";
import Services from "@/components/Services";
import Latest from "@/components/Latest";
import HomeAbout from "@/components/HomeAbout";
import Map from "@/components/Map";

export const metadata = {
	title: 'Home'
}

const HomePage = () => {
	return (
		<>
			<section id="hero">
				<div className="bg-gray-900">
					<div className="relative isolate overflow-hidden pt-4">
						<Image
							src={heroImg}
							priority
							alt="Immagine di copertina"
							quality="low"
							format='avif'
							className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
						/>
						<div className="mx-auto max-w-3xl py-32 sm:py-40 lg:py-56">
							<div className="text-center pb-14">
								<h1
									className="text-3xl font-bold mx-3 leading-normal text-white sm:text-4xl sm:leading-[1.2]"
								>
									La scelta migliore per il tuo sogno:
								</h1>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<p className="text-2xl font-krona text-white font-semibold">
										la tua nuova casa ti aspetta
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ZoneSearch />
			<Services />
			<Latest />
			<HomeAbout />
			<Map />
		</>
	);
};

export default HomePage;