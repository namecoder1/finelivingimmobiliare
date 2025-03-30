import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

const PrivacyPolicyPage = () => {
	return (
		<section className="flex flex-col mx-10 lg:mx-20 mt-20 mb-32"> 
			<h1 className="font-heading mb-5">Revoca consensi</h1>
			<div>
				<p>Gentile utente, puoi richiedere la revoca di uno o più consensi privacy tra quelli sotto indicati, inviando una mail al seguente
				indirizzo: <Link href='mailto:info@finelivingimmobiliare.com' className="underline underline-offset-2">info@finelivingimmobiliare.com</Link> e riportando una o più opzioni che si desiderano revocare.</p>
				<ul className="list-disc list-inside space-y-1 mt-2 mb-6">
					<li>Revoca Comunicazioni a mezzo mail</li>
					<li>Revoca Comunicazioni marketing terze parti a mezzo mail</li>
					<li>Revoca cookie di profilazione marketing di terze parti</li>
					<li>Revoca cookie di profilazione</li>
				</ul>
				<p>Una volta ricevuta la richiesta, la stessa verrà elaborata generalmente nell&apos;arco di 48 ore.</p>
			</div>
			<div className="mt-10 mb-6">
				<h2 className="font-bold text-xl">Come disabilitare i cookie mediante configurazione del browser</h2>
				<div className="mt-5">
					<h3 className="font-bold text-lg">Chrome</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il browser Chrome</li>
						<li>Fare clic sul menu <TiThMenu className="inline mb-1 bg-gray-200 border border-gray-300 p-1 mx-0.5" size={20} /> presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione</li>
						<li>Fare clic su <span className="font-bold">Impostazioni</span></li>
						<li>Fare clic su <span className="font-bold">Mostra impostazioni avanzate</span></li>
						<li>Nella sezione "Privacy" fare clic su bottone "Impostazioni contenuti"</li>
						<li>Nella sezione "Cookie" è possibile modificare le seguenti impostazioni relative ai cookie:</li>
						<ul className="list-disc list-inside space-y-1 mt-2 mb-6 ml-5">
							<li>Consentire il salvataggio dei dati in locale</li>
							<li>Modificare i dati locali solo fino alla chiusura del browser</li>
							<li>Impedire ai siti di impostare i cookie</li>
							<li>Bloccare i cookie di terze parti e i dati dei siti</li>
							<li>Gestire le eccezioni per alcuni siti internet</li>
							<li>Eliminazione di uno o tutti i cookie</li>
						</ul>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='https://support.google.com/accounts/answer/61416?hl=en' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
				<div className="mt-10">
					<h3 className="font-bold text-lg">Mozilla Firefox</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il browser Mozilla Firefox</li>
						<li>Fare clic sul menu <TiThMenu className="inline mb-1 mx-0.5" size={20} /> presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione</li>
						<li>Selezionare <span className="font-bold">Opzioni</span></li>
						<li>Seleziona il pannello <span className="font-bold">Privacy</span></li>
						<li>Fare clic su <span className="font-bold">Mostra impostazioni avanzate</span></li>
						<li>Nella sezione "Privacy" fare clic sul bottone <span className="font-bold">Impostazioni contenuti</span></li>
						<li>Nella sezione "<span className="font-bold">Traccciamento</span>" è possibile modificare le seguenti impostazioni relative ai cookie:</li>
						<ul className="list-disc list-inside space-y-1 mt-2 mb-6 ml-5">
							<li>Richiedi ai siti di non effettuare alcun tracciamento</li>
							<li>Comunica ai siti la disponibilità ad essere tracciato</li>
							<li>Non comunicare alcuna preferenza relativa al tracciamento dei dati personali</li>
						</ul>
						<li>Dalla sezione "<span className="font-bold">Cronologia</span>" è possibile:</li>
						<ul className="list-disc list-inside space-y-1 mt-2 mb-6 ml-5">
							<li>Abilitando "Utilizza impostazioni personalizzate" selezionare di accettare i cookie di terze parti (sempre, dai siti più visitati o mai) e di conservarli per un periodo determinato (fino alla loro scadenza, alla chiusura di Firefox o di chiedere ogni volta)</li>
							<li>Rimuovere i singoli cookie immagazzinati</li>
						</ul>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
				<div className="mt-10">
					<h3 className="font-bold text-lg">Internet Explorer / Edge</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il Browser Internet Explorer/Edge</li>
						<li>Fare click sul pulsante <span className="font-bold">Strumenti</span> e scegliere <span className="font-bold">Opzioni Internet</span></li>
						<li>Fare click sulla scheda <span className="font-bold">Privacy</span> e nella sezione Impostazioni modificare il dispositivo di scorrimento in funzione dell&apos;azione desiderata per i cookie:</li>
						<ul className="list-disc list-inside space-y-1 mt-2 mb-6 ml-5">
							<li>Bloccare tutti i cookie</li>
							<li>Consentire tutti i cookie</li>
							<li>Selezione dei siti da cui ottenere cookie: spostare il cursore in una posizione intermedia in modo da non bloccare o consentire tutti i cookie, premere quindi su Siti, nella casella Indirizzo Sito Web inserire un sito internet e quindi premere su Blocca o Consenti</li>
						</ul>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
				<div className="mt-10">
					<h3 className="font-bold text-lg">Safari 6</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il browser Safari</li>
						<li>Fare click su <span className="font-bold">Safari</span>, selezionare <span className="font-bold">Preferenze</span> e premere su <span className="font-bold">Privacy</span></li>
						<li>Nella sezione <span className="italic">Blocca Cookie</span> specificare come Safari deve accettare i cookie dai siti internet.</li>
						<li>Per visionare quali siti hanno immagazzinato i cookie cliccare su <span className="font-bold">Dettagli</span></li>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='https://support.apple.com/kb/PH17191?locale=it_IT&viewlocale=it_IT' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
				<div className="mt-10">
					<h3 className="font-bold text-lg">Safari iOS (dispositivi mobile)</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il browser Safari</li>
						<li>Tocca su <span className="font-bold">Impostazioni</span> e poi <span className="font-bold">Safari</span></li>
						<li>Tocca su <span className="font-bold">Blocca cookie</span> e scegli tra le varie opzioni: "Mai", "Di terze parti e inserzionisti" o "Sempre"</li>
						<li>Per cancellare tutti i cookie immagazzinati da Safari, tocca su <span className="font-bold">Impostazioni</span>, poi su <span className="font-bold">Safari</span> e infine su <span className="font-bold">Cancella Cookie e dati</span></li>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='http://support.apple.com/kb/HT1677?utm_source=Agillic%20Dialogue' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
				<div className="mt-10">
					<h3 className="font-bold text-lg">Opera</h3>
					<ul className="list-decimal list-inside space-y-1 mt-2 mb-6 ml-5">
						<li>Eseguire il browser Opera</li>
						<li>Fare click su <span className="font-bold">Preferenze</span> poi su <span className="font-bold">Avanzate</span> e infine su <span className="font-bold">Cookie</span></li>
						<li>Selezionare una delle seguenti opzioni:</li>
						<ul className="list-disc list-inside space-y-1 mt-2 mb-6 ml-5">
							<li>Accetta tutti i cookie</li>
							<li>Accetta i cookie solo dal sito che si visita: i cookie di terze parti e che vengono inviati da un dominio diverso da quello che si sta visitando verranno rifiutati</li>
							<li>Non accettare mai i cookie: tutti i cookie non verranno mai salvati</li>
						</ul>
					</ul>
					<p>Per maggiori informazioni visita la <Link href='https://help.opera.com/en/latest/web-preferences/#cookies' target="_blank" className="underline underline-offset-2">pagina dedicata</Link></p>
				</div>
			</div>
			<div className="border-t border-gray-200 pt-6">
				<p className="text-sm">Questa pagina è visibile, mediante link in calce in tutte le pagine del Sito ai sensi dell&apos;art. 13 GDPR e in ossequio alle
					modalità semplificate per l&apos;informativa e l&apos;acquisizione del consenso per l&apos;uso dei cookie pubblicata sulla Gazzetta Ufficiale
					n.126 del 3 giugno 2014 e relativo registro dei provvedimenti n.229 dell&apos;8 maggio 2014.
				</p>
			</div>
		</section>
	);
};

export default PrivacyPolicyPage;