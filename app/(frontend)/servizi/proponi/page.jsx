import Form from "@/components/Form";

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
			<Form name="Pagina Proponi" textarea post={false}>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="text" name="nome" placeholder="*Nome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Nome" />
					<input type="text" name="cognome" placeholder="Cognome" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Cognome" />
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="email" name="Email" placeholder="*Email" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Email" />
					<input required type="text" name="Telefono" placeholder="*Cellulare" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Telefono" />
				</div>
				<div className="flex items-center justify-start w-full">
					<h3 className="font-heading mt-5">Dati Immobile</h3>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="text" name="Comune e Zona" placeholder="*Comune e Zona" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Comune e Zona" />
					<input type="text" name="Tipologia" placeholder="Tipologia" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Tipologia" />
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="text" name="Totale Mq" placeholder="*Totale Mq" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Totale Mq" />
					<input type="text" name="Prezzo" placeholder="*Prezzo" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Prezzo" />
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<select required name="Camere" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Camere" >
						<option defaultValue>1 Camera</option>
						<option>2 Camere</option>
						<option>3 Camere</option>
						<option>4 Camere</option>
						<option>5 Camere</option>
					</select>
					<select required name="Bagni" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Bagni" >
						<option defaultValue>1 Bagno</option>
						<option>2 Bagni</option>
						<option>3 Bagni</option>
					</select>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<select required name="Garage" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Garage" >
						<option defaultValue>Garage Si</option>
						<option>Garage No</option>
					</select>
					<select required name="Locali" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Locali" >
						<option defaultValue>1 Locale</option>
						<option>2 Locali</option>
						<option>3 Locali</option>
						<option>4 Locali</option>
						<option>5 Locali</option>
						<option>6 Locali</option>
						<option>7 Locali</option>
						<option>8 Locali</option>
					</select>    
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<select required name="Classe Energetica" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="ClassNameclassNamee Energetica" >
						<option defaultValue disabled>Seleziona Classe Energetica</option>
						<option>ClassNameclassNamee Energetica A</option>
						<option>ClassNameclassNamee Energetica B</option>
						<option>ClassNameclassNamee Energetica C</option>
						<option>ClassNameclassNamee Energetica D</option>
						<option>ClassNameclassNamee Energetica E</option>
						<option>ClassNameclassNamee Energetica F</option>
						<option>ClassNameclassNamee Energetica G</option>
					</select>  
					<select name="Contratto" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Contratto" >
						<option defaultValue>Contratto: Vendita</option>
						<option >Contratto: Affitto</option>
					</select>
				</div>
			</Form>
		</div>
	);
};

export default ProponiPage;




