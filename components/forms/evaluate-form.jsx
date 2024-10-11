'use client'

import { MdOutlineDoneOutline } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useState } from "react";
import Input from "./Input";

const EvaluateForm = () => {
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
		<form name="Pagina Valutazioni" onSubmit={handleFormSubmit} netlify className="mt-10 flex flex-col items-center xl:mx-5 gap-10">
			<input type="hidden" name="form-name" value="Pagina Valutazioni" />
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type='text' name='Nome' placeholder='*Nome' /> 
				<Input type='text' name='Cognome' placeholder='Cognome' /> 
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
				<Input required type="email" name="Email" placeholder="*Email" />
				<Input required type="text" name="Telefono" placeholder="*Cellulare" />
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

export default EvaluateForm;

