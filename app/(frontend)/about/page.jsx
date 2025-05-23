import Image from "next/image";
import Button from "@/components/Button";
import sabrinaBartolomei from "@/assets/images/sabrina-bartolomei.jpeg"
import fotoAgenzia from "@/assets/images/foto-agenzia.jpeg"

export const metadata = {
	title: 'About',
	description: 'Ad oggi la nostra squadra è composta da 4 persone, tutte preparate professionalmente, attive su tutto il territorio della Provincia di Pesaro ed Urbino',
	openGraph: {
		title: 'About',
		description: 'Ad oggi la nostra squadra è composta da 4 persone, tutte preparate professionalmente, attive su tutto il territorio della Provincia di Pesaro ed Urbino',
		url: 'https://finelivingimmobiliare.com/about'
	}
}

const AboutPage = () => {
	return (
		<div className="mb-32 mt-20 flex flex-col mx-10 lg:mx-20 lg:px-15 gap-20">
			<div className="flex flex-col items-start justify-center gap-5 mb-32">
				<h1 className="font-heading mb-20 lg:mb-10">About</h1>
				<div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 gap-10">
					<div className="flex flex-col text-left items-center lg:justify-center order-1">
						<div className="leading-7 text-base ">
							<h3 className="mb-16 text-left text-3xl font-heading">Sabrina Bartolomei</h3>
							<p>          
								Mi presento, sono Sabrina Bartolomei, titolare dell’agenzia
								immobiliare Fine Living. <br/> Nel 2019 nasce in me la voglia di creare
								qualcosa di mio, un’ agenzia che avesse <em>“un valore aggiunto”</em> rispetto
								alle solite realtà presenti sul mercato e che sapesse coniugare la
								conoscenza e le competenze professionali con la cura del cliente, il
								rispetto e l’ascolto delle sue necessità.</p>
								<br/>
								<p>Nasce così la Fine Living immobiliare, grazie alla mia <strong> passione per
									questo settore</strong> ed alle mie <strong> competenze tecniche specifiche</strong> maturate in
									oltre 10 anni di collaborazione con uno Studio di Ingegneria ed in
									svariati anni di collaborazione all’interno di altre agenzie
									immobiliari del territorio.</p>
						</div>
					</div>
					<div>
						<figure>
							<div className="aspect-h-7 aspect-w-12 lg:aspect-none">
								<Image className="rounded-lg object-cover object-center shadow-lg" src={sabrinaBartolomei} alt="Foto della titolare Sabrina Bartolomei" width="1184" height="776" />
							</div>
							<figcaption className="mt-3 flex text-sm text-gray-500">
								<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fillRule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
								</svg>
								<span className="ml-2">La titolare Sabrina Bartolomei</span>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
   
			<div>
				<div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 gap-10">
					<div className="flex flex-col text-left items-center lg:justify-center order-1">
						<div className="leading-7 text-base ">
							<h3 className="mb-10 text-left font-heading">Chi siamo</h3>
							<p>
								Avere la possibilità di soddisfare i desideri dei nostri clienti è per
								noi l’<span className="underline underline-offset-2 font-semibold"> obiettivo primario</span> e per questo motivo abbiamo nel corso del tempo
								ampliato i nostri servizi avvalendoci della preziosa collaborazione
								dello <a href="https://studiorivoli.it/" target="_blank" className="underline underline-offset-2 hover:text-primary duration-150">Studio Tecnico di Ingegneria Rivoli</a> che ci supporta e coadiuva per
								tutte le esigenze urbanistiche e catastali degli immobili, per la
								redazione degli Attestati di Prestazione energetiche, delle
								dichiarazioni di conformità urbanistiche e catastali, nonché di quelle
								di rispondenza degli impianti elettrici, idrici e del gas. Offriamo
								inoltre un’assistenza personalizzata nella scelta del mutuo attraverso
								una collaborazione proficua e durevole con nota società di consulenza
								finanziaria ed una consulenza legale attraverso collaborazione con un
								affermato studio legale.
							</p>
						</div>
					</div>
					<div className="order-2">
						<figure>
							<div className="aspect-h-7 aspect-w-12 lg:aspect-none">
								<Image className="rounded-lg object-cover shadow-lg h-[400px]" src={fotoAgenzia} alt="Foto dell'Agenzia Fine Living Immobiliare" width="1184" height="500" />
							</div>
							<figcaption className="mt-3 flex text-sm text-gray-500">
								<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fillRule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
								</svg>
								<span className="ml-2">L'Agenzia in Via G. Giolitti 98, Pesaro</span>
							</figcaption>
						</figure>
					</div>
				</div>
				<div className="text-base">
					<p className="text-base my-10 leading-7">
						Ad oggi la nostra squadra è composta da 4 persone, tutte preparate
						professionalmente, attive su <strong>tutto il territorio della Provincia di
						Pesaro ed Urbino</strong>, professionisti capaci di offrire alla propria
						clientela un servizio immobiliare a 360°, partendo da una valutazione
						commerciale precisa e accurata degli immobili, passando per una
						conoscenza costantemente aggiornata del marketing pubblicitario e
						della comunicazione, senza dimenticare i fondamentali aspetti tecnici
						e legali che contraddistinguono le compravendite e le locazioni
						immobiliari.
					</p>
					<div>
						<p className="leading-7 mt-10">
							Contattaci senza indugio e ti accoglieremo con la cordialità e la professionalità che da sempre ci contraddistingue.
						</p>
						<div className="flex mt-5">
							<Button text='Contattaci' link='/contatti' />
						</div>
				</div>
			</div>
  </div>
</div>
	);
};

export default AboutPage;