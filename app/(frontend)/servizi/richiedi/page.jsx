import RequestForm from "@/components/forms/request-form";

export const metadata = {
	title: 'Lascia una richiesta',
  desciption: 'Stai cercando casa e non hai trovato la giusta soluzione dentro al nostro sito? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta. Ti ricontatteremo appena l’immobile che cerchi sarà disponibile.',
  openGraph: {
    title: 'Lascia una richiesta',
    desciption: 'Stai cercando casa e non hai trovato la giusta soluzione dentro al nostro sito? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta. Ti ricontatteremo appena l’immobile che cerchi sarà disponibile.',
		url: 'https://finelivingimmobiliare.com/servizi/richiedi'
	}
}

const RichiediPage = () => {
	return (
		<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">
			<h1 className="font-heading mb-3">Lascia una richiesta</h1>
			<p>Stai cercando casa e non hai trovato la giusta soluzione dentro al nostro sito? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta. Ti ricontatteremo appena l’immobile che cerchi sarà disponibile.</p>
			<RequestForm />
		</div>
	);
};

export default RichiediPage;