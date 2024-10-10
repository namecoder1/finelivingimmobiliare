import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa"

const SubMenu = () => {
	return (
		<div className="flex max-w-full items-center">
			<div className="bg-secondary flex-grow">
				<ul className="flex text-white gap-3 sm:gap-7 p-3 justify-evenly sm:justify-end mr-2">
					<li><a target="_blank" aria-label="Profilo Instagram" href="https://www.instagram.com/fine.living.immobiliare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className="text-[25px]" /></a></li>
					<li><a target="_blank" aria-label="Profilo Facebook" href="https://www.facebook.com/FineLivingImmobiliare"><FaFacebook className="text-[25px]" /></a></li>
					<li><a target="_blank" aria-label="Numero Whatsapp" href="https://wa.me/3478429161"><FaWhatsapp className="text-[25px]" /></a></li>
					<li><a target="_blank" aria-label="Email Aziendale" href="mailto:info@finelivingimmobiliare.com"><FaEnvelope className="text-[25px]" /></a></li>
				</ul>
			</div>
			<div className="bg-primary text-white">
				<a href="tel:3478429161" className="flex items-center gap-2 justify-center p-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>+39 347 842 9161</a>
			</div>
		</div>

	);
};

export default SubMenu;