import HomeForm from '@/components/forms/home-form'
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
				<HomeForm />
			</div>
			<Map />
		</>
	);
};

export default ContactPage;

