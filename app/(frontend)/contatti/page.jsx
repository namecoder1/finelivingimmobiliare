import Form from "@/components/Form";
import Map from "@/components/Map";

export const metadata = {
	title: 'Contattaci',
	desciption: 'Se hai delle domande specifiche su un immobile o sei ti serve aiuto in campo immobiliare, affidati a noi e contattaci.',
	openGraph: {
		title: 'Contattaci',
		desciption: 'Se hai delle domande specifiche su un immobile o sei ti serve aiuto in campo immobiliare, affidati a noi e contattaci.',
    url: 'https://finelivingimmobiliare.com/contatti'
	}
}

const ContactPage = () => {
	return (
		<>
			<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">  
				<h3 className="font-text font-bold mb-2 text-sm">HAI DELLE DOMANDE?</h3>
				<h1 className="font-heading mb-5">Contattaci</h1>
				<p>Ci trovi in ufficio dal Lunedì al Venerdì dalle 09:00-12:30 e dalle 14:30-19:00, il Sabato dalle 09:00-12:30.</p>
				<Form name='Pagina Contatto' textarea post={false}>
					<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
						<input required type="text" name="Nome" placeholder="*Nome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Nome" />
						<input type="text" name="Cognome" placeholder="Cognome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Cognome" />
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
						<input required type="email" name="Email" placeholder="*Email" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Email" />
						<input required type="text" name="Telefono" placeholder="*Cellulare" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Telefono" />
					</div>
				</Form>
			</div>
			<Map />
		</>
	);
};

export default ContactPage;

