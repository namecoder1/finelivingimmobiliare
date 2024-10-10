'use client'

import { useState } from "react";

const Form = ({
	name,
	children,
	textarea,
	post
}) => {
	let textMessage;
	if (post) {
		textMessage = `Ciao, sono interessato a questo immobile (Cod. Agenzia: ${post}).`;
	} else {
		textMessage = "Buonasera, ...";
	}
	const [value, setValue] = useState(textMessage);
	function handleChange(e) {
			setValue(e.target.value);
	}
	return (
		<form data-netlify="true" netlify-honeypot='true' name={name} method="POST" className=" mt-10 flex flex-col items-center xl:mx-5 gap-10">
			<p className="hidden">
				<label>
					Non cliccare se sei un essere umano: <input name="bot-field" aria-label="Non Cliccare" /> {/* Catch Bots */}
				</label>  
			</p>
			{children}
			{textarea && (
				<textarea name="Messaggio" id="text-message" className="col-span-2 py-2 px-3 rounded-md border-2 border-gray-400 w-full" value={value} onChange={handleChange} />
			)}
			<div className="flex flex-col sm:flex-row items-center gap-10">
				<div className="flex items-start justify-center gap-3">
					<input type="checkbox" name="Informativa" defaultChecked className="checkbox checkbox-secondary" aria-label="Informativa" />
					<p className="text-xs max-w-[250px]">*Compilando e inviando questo modulo di richiesta, autorizzo il trattamento dei miei dati personali ai sensi dell’attuale normativa e confermo di aver preso visione dell’informativa privacy.</p>
				</div>
				<button type="submit" className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white hover:border-secondary flex items-center justify-center font-semibold py-2 px-3 rounded-lg border-2 duration-200">Invia</button>
			</div>
		</form>
	);
};

export default Form;