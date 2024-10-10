import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png"

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<div className="flex flex-col p-5">
				<div className="flex flex-col items-center justify-center xl:grid xl:grid-cols-2 mx-10">
					<div className="flex flex-col xl:flex-row items-center justify-left gap-5">
						<Link href="/">
							<Image src={logo} alt="Logo Fine Living Immobiliare" width={130} height={130} className="w-auto" />
						</Link>
						<div>
							<ul className="flex flex-col items-center xl:items-start gap-2 text-center lg:text-left">
								<li className="flex items-center justify-center gap-2 text-sm md:text-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg><Link href="tel:3478429161">+39 347 842 9161</Link></li>
								<li className="flex items-center justify-center gap-2 text-sm md:text-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg><Link href="mailto:info@finelivingimmobiliare.com">info@finelivingimmobiliare.com</Link></li>
								<li className="flex md:items-center items-start justify-center gap-2 text-sm md:text-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7z"/></svg><Link target="_blank" href="https://maps.app.goo.gl/25fUn5Gu8eEqh8Vb8">Via G. Giolitti 98, Pesaro (PU), 61122</Link></li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-4 mr-5 mt-5 items-center xl:items-end">
						<ul className="flex gap-8 lg:gap-5 flex-wrap items-center justify-center mt-8 lg:mt-0">
							<li><Link href="/">Home</Link></li>
							<li><Link href="/about">About</Link></li>
							<li><Link href="/immobili">Immobili</Link></li>
							<li><Link href="/servizi/valuta">Valuta</Link></li>
							<li><Link href="/servizi/proponi">Proponi</Link></li>
							<li><Link href="/servizi/richiedi">Richiedi</Link></li>
							<li><Link href="/contatti">Contatti</Link></li>
						</ul>
						<div className="flex flex-col items-center my-5 lg:my-0 lg:items-end order-2 lg:order-none">
							<p>Num REA: PS-196128</p>
							<p>P.IVA: 02617340415</p>
						</div>
						<div className="flex flex-col justify-center items-center lg:flex-row gap-5 my-8 lg:my-0">
							<Link href="/">Privacy & Cookie Policy</Link>
							<Link href="/">Revoca Consensi</Link>
							<Link href="/sitemap">Sitemap</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5 items-center justify-center mt-10 lg:mt-5">
					<div className="flex items-center justify-center gap-5">
						<Link target="_blank" aria-label="Profilo Instagram" href="https://www.instagram.com/fine.living.immobiliare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></Link>
						<Link target="_blank" aria-label="Profilo Facebook" href="https://www.facebook.com/FineLivingImmobiliare"></Link>
						<Link target="_blank" aria-label="Numero Whatsapp" href="https://wa.me/3478429161"></Link>
					</div>
					<p className="text-center">Copyright © {currentYear} Fine Living Immobiliare - Maded by <Link target="_blank" href="https://tob.codes" className="hover:underline underline-offset-2">tobiabartolomei.com</Link></p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;