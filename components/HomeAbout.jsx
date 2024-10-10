import Image from "next/image";
import Foto from '@/assets/images/sabrina-bartolomei.jpeg';
import FotoTonda from '@/assets/images/sabrina-bartolomei-rounded.jpeg'
import Button from "./Button";

const HomeAbout = () => {
	return (
		<div
			className="flex flex-col py-10 xl:py-0 xl:grid xl:grid-cols-2 gap-10 xl:gap-0 my-20 items-center bg-secondary"
		>
			<div className="text-center text-white mx-8">
				<h1 className="text-white text-4xl font-semibold tracking-tight sm:text-3xl">Chi siamo</h1>
				<p className="font-text mt-3 ">
					Buongiorno, mi presento, sono Sabrina Bartolomei, titolare dell’agenzia
					immobiliare Fine Living. Nel 2019 nasce in me la voglia di creare qualcosa
					di mio, un’ agenzia che avesse “un valore aggiunto” rispetto alle solite
					realtà presenti sul mercato e che sapesse coniugare la conoscenza e le
					competenze professionali con la cura del cliente, il rispetto e l’ascolto
					delle sue necessità. Nasce così la Fine Living immobiliare, grazie alla
					mia passione per questo settore ed alle mie competenze tecniche specifiche
					maturate in oltre 10 anni di collaborazione con uno Studio di Ingegneria
					ed in svariati anni di collaborazione all’interno di altre agenzie
					immobiliari del territorio.
				</p>
				<div className="max-w-fit mt-7 mx-auto">
					<Button text="Leggi di Più" link="/about" bgColor="bg-white" bgText="text-black" />
				</div>
			</div>
			<div
				className="flex mx-5 xl:mx-0 items-center justify-end max-w-full my-10 xl:my-0 rounded-[80%] shadow-xl shadow-[#1e1c38] xl:shadow-none"
			>
				<Image
					src={Foto}
					alt="Immagine della Proprietaria Sabrina Bartolomei"
					className={`hidden xl:block `}
				/>
				<Image
					src={FotoTonda}
					alt="Immagine della Proprietaria Sabrina Bartolomei"
					className={`rounded-full block xl:hidden`}
				/>
			</div>
		</div>
	);
};

export default HomeAbout;