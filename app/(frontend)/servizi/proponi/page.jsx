import ProposalForm from "@/components/forms/proposal-form";

export const metadata = {
	title: 'Proponi il tuo immobile',
  desciption: 'Vuoi vendere sul mercato immobiliare la tua casa? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta.',
  openGraph: {
    title: 'Proponi il tuo immobile',
    desciption: 'Vuoi vendere sul mercato immobiliare la tua casa? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta.',
    url: 'https://finelivingimmobiliare.com/servizi/proponi'
  }
}

const ProponiPage = () => {
	return (
		<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32">
			<h1 className="font-heading mb-3">Proponi il tuo immobile</h1>
			<p>Vuoi vendere sul mercato immobiliare la tua casa? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta.</p>
			<ProposalForm />
		</div>
	);
};

export default ProponiPage;




