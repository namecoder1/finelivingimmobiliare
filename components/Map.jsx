const Map = () => {
	return (
		<section id="contactMap" className="my-32 mx-10 lg:mx-20">
			<div className="flex flex-col">
			<h1 className="font-heading mb-5">Vieni a trovarci</h1>
				<div className="flex items-center gap-10 justify-between  flex-col lg:flex-row">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5750.045230207921!2d12.902809176996742!3d43.896798336640416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d19534bd52d59%3A0xe1e11df3e558ee33!2sFine%20Living%20Immobiliare!5e0!3m2!1sit!2sit!4v1720803290733!5m2!1sit!2sit"
						title="Posizione dell'Agenzia Immobiliare Fine Living"
						width="550"
						height="300"
						className="w-full h-[350px] lg:h-[400px] mx-10 lg:mx-0"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
					<div className="grid sm:grid-cols-2 lg:flex lg:flex-col gap-5 lg:gap-10 text-left justify-center items-center">
						<div>
							<p className="text-left">Ci troviamo in <span className="font-bold">Via Giovanni Giolitti 98, a Pesaro</span>.</p>
							<p>Vieni a trovarci in agenzia! <span className="underline underline-offset-2">Si riceve su appuntamento</span></p>
						</div>
						<div className="overflow-x-auto">
							<table className="table">
								<thead>
									<tr>
										<th>Giorni</th>
										<th>Mattina</th>
										<th>Pomeriggio</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Lunedì - Venerdì</td>
										<td>09.30 - 12.30</td>
										<td>16.00 - 19.00</td>
									</tr>
									<tr>
										<td>Sabato</td>
										<td>09.30 - 12.30</td>
										<td>Chiuso</td>
									</tr>
									<tr>
										<td>Domenica</td>
										<td>Chiuso</td>
										<td>Chiuso</td>
									</tr>
								</tbody>
							</table>
						</div>        
					</div>
				</div>
			</div>
		</section>
	);
};

export default Map;