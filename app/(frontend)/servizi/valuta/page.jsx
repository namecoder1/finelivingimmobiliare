import EvaluateForm from "@/components/forms/evaluate-form";

export const metadata = {
	title: 'Valuta il tuo immobile',
  desciption: 'Vuoi sapere quanto vale la tua casa? Affidati alla nostra esperienza, compila il form e aspetta la nostra risposta.',
  openGraph: {
    title: 'Valuta il tuo immobile',
    desciption: 'Vuoi sapere quanto vale la tua casa? Affidati alla nostra esperienza, compila il form e aspetta la nostra risposta.',
    url: 'https://finelivingimmobiliare.com/servizi/valuta'
  }
}

const ValutaPage = () => {
	return (
		<div className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32" aria-labelledby="">
			<h1 className="font-heading mb-3">Valuta il tuo immobile</h1>
			<p>Vuoi sapere quanto vale la tua casa? Affidati alla nostra esperienza, compila il form qua sotto e aspetta la nostra risposta.</p>
			<EvaluateForm />
		</div>
	);
};

export default ValutaPage;