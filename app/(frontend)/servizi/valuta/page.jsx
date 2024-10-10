import Form from "@/components/Form";

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
			<Form name='Pagina Valutazioni' textarea post={false}>
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
	);
};

export default ValutaPage;