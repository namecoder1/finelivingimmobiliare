'use client'

import { MdOutlineDoneOutline } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useState } from "react";
import Input from "./Input";

const RequestForm = () => {
	const [status, setStatus] = useState(null);
	const [error, setError] = useState(null);

	const handleFormSubmit = async (event) => {
			event.preventDefault();
			try {
					setStatus('pending');
					setError(null);
					const myForm = event.target;
					const formData = new FormData(myForm);
					const res = await fetch('/__forms.html', {
							method: 'POST',
							headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
							body: new URLSearchParams(formData).toString()
					});
					if (res.status === 200) {
							setStatus('ok');
					} else {
							setStatus('error');
							setError(`${res.status} ${res.statusText}`);
					}
			} catch (e) {
					setStatus('error');
					setError(`${e}`);
			}
	};

	return (
		<form name="Pagina Richieste" onSubmit={handleFormSubmit} netlify className="mt-10 flex flex-col items-center xl:mx-5 gap-10">
			<input type="hidden" name="form-name" value="Pagina Richieste" />
			<div className="flex items-center justify-start w-full">
				<h3 className="font-heading mt-5">Dati Personali</h3>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='text' name='Nome' placeholder="*Nome" />
				<Input type='text' name='Cognome' placeholder="Cognome" />
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='email' name='Email' placeholder="*Email" />
				<Input required type='text' name='Telefono' placeholder="*Cellulare" />
			</div>
			<div className="flex items-center justify-start w-full">
				<h3 className="font-heading mt-5">Dati Immobile</h3>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='text' name='Comune e Zona' placeholder='*Comune e Zona' />
				<Input type='text' name='Tipologia' placeholder='*Tipologia' />
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='text' name='Mq Min' placeholder="*Totale Mq Min." />
				<Input type='text' name='Mq Max' placeholder="*Totale Mq Max." />
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='text' name='Prezzo Min' placeholder="*Prezzo Min." />
				<Input type='text' name='Prezzo Max' placeholder="*Prezzo Max." />
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
				<select required name="Classe Energetica" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Classe Energetica" >
					<option defaultValue disabled>Seleziona Classe Energetica</option>
					<option>Classe Energetica A</option>
					<option>Classe Energetica B</option>
					<option>Classe Energetica C</option>
					<option>Classe Energetica D</option>
					<option>Classe Energetica E</option>
					<option>Classe Energetica F</option>
					<option>Classe Energetica G</option>
				</select>  
				<select name="Contratto" className="select py-2 px-3 rounded-md border-2 border-gray-400 w-full" aria-label="Contratto" >
					<option defaultValue>Contratto: Vendita</option>
					<option>Contratto: Affitto</option>
				</select>
			</div>
			<textarea name="Messaggio" id="text-message" className="col-span-2 py-2 px-3 rounded-md border-2 border-gray-400 w-full" />
			<div className="flex flex-col sm:flex-row items-center gap-10">
				<div className="flex items-start justify-center gap-3">
					<input type="checkbox" name="Informativa" defaultChecked className="checkbox checkbox-secondary" aria-label="Informativa" />
					<p className="text-xs max-w-[250px]">*Compilando e inviando questo modulo di richiesta, autorizzo il trattamento dei miei dati personali ai sensi dell’attuale normativa e confermo di aver preso visione dell’informativa privacy.</p>
				</div>
				<button type="submit" className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white hover:border-secondary flex items-center justify-center font-semibold py-2 px-3 rounded-lg border-2 duration-200">Invia</button>
			</div>			
			{status === 'ok' && (
						<div className="alert alert-success">
								<MdOutlineDoneOutline  />
								Submitted!
						</div>
				)}
				{status === 'error' && (
						<div className="alert alert-error">
								<BiError />
								{error}
						</div>
				)}
			</form>
		);
};

export default RequestForm;
