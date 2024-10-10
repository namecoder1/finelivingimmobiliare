import Form from "@/components/Form";

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
			<Form name='Pagina Richieste' textarea post={false}>
			<div className="flex items-center justify-start w-full">
					<h3 className="font-heading mt-5">Dati Personali</h3>
				</div>
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
					<input type="text" name="Tipologia" placeholder="Tipologia" className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Tipolgia" />
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="text" name="Mq Min" placeholder="*Totale Mq Min." className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Mq Min" />
					<input type="text" name="Mq Max" placeholder="*Totale Mq Max." className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Mq Max" />
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
					<input required type="text" name="Prezzo Min" placeholder="*Prezzo Min." className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Prezzo Min" />
					<input type="text" name="Prezzo Max" placeholder="*Prezzo Max." className="py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Prezzo Max" />
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
					<select required name="ClassNclassNamee Energetica" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="ClassNclassNamee Energetica" >
						<option defaultValue disabled>Seleziona ClassNclassNamee Energetica</option>
						<option>ClassNclassNamee Energetica A</option>
						<option>ClassNclassNamee Energetica B</option>
						<option>ClassNclassNamee Energetica C</option>
						<option>ClassNclassNamee Energetica D</option>
						<option>ClassNclassNamee Energetica E</option>
						<option>ClassNclassNamee Energetica F</option>
						<option>ClassNclassNamee Energetica G</option>
					</select>  
					<select name="Contratto" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Contratto" >
						<option defaultValue>Contratto: Vendita</option>
						<option>Contratto: Affitto</option>
					</select>
				</div>
			</Form>
		</div>
	);
};

export default RichiediPage;