import { TbMessageQuestion } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import Button from "./Button";

const Services = () => {
	return (
		<div id="services" className="py-16 sm:py-20">
			<div className="mx-auto max-w-7xl px-6 ">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="text-white text-4xl font-semibold tracking-tight sm:text-3xl">I nostri Servizi</h1>
					<p className="mt-3 leading-8 text-white">Consulenza completa per le tue necessità.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
					<dl className="lg:grid flex justify-center items-center flex-wrap lg:grid-rows-1 gap-16 lg:grid-cols-3">
						<div className="flex flex-col items-center justify-center">
							<dt className="text-base font-semibold leading-7 text-white flex flex-col items-center justify-center">
								<TbMessageQuestion className="text-[150px]" />
								<h2 className="mt-8">Lascia una richiesta</h2>
							</dt>
							<dd className="mt-1 flex flex-auto flex-col text-base leading-7">
								<div className=" mt-4">
									<Button link="/servizi/richiedi" text="Scrivici" bgColor="bg-white" bgText="text-black" />
								</div>
							</dd>
						</div>
						<div className="flex flex-col items-center justify-center">
							<dt className="text-base font-semibold leading-7 text-white flex flex-col items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path fill="currentColor" d="m13.95 20.4l5.95-1.85q-.125-.225-.362-.387T19 18h-5.05q-.675 0-1.075-.05t-.825-.2l-1.425-.475q-.4-.125-.575-.5T10 16t.488-.588t.762-.062l1.05.35q.425.125.963.2t1.462.1H15q0-.275-.162-.525t-.388-.325L8.6 13H7v5.5zm-.525 1.95L7 20.55q-.2.65-.788 1.05T5 22H3q-.825 0-1.412-.587T1 20v-7q0-.825.588-1.412T3 11h5.6q.175 0 .35.038t.325.087L15.15 13.3q.825.3 1.338 1.05T17 16h2q1.25 0 2.125.825T22 19q0 .55-.288.863t-.887.512l-6.25 1.95q-.275.1-.575.1t-.575-.075M3 20h2v-7H3zM14 1.95q.3 0 .588.087t.562.288l5 3.575q.4.275.625.7t.225.925V13q0 .425-.288.713T20 14t-.712-.288T19 13V7.5L14 4L9 7.5V8q0 .425-.288.713T8 9t-.712-.288T7 8v-.475q0-.5.225-.925t.625-.7l5-3.575q.275-.2.563-.288T14 1.95M13 8q.2 0 .35-.15t.15-.35t-.15-.35T13 7t-.35.15t-.15.35t.15.35T13 8m2 0q.2 0 .35-.15t.15-.35t-.15-.35T15 7t-.35.15t-.15.35t.15.35T15 8m-2 2q.2 0 .35-.15t.15-.35t-.15-.35T13 9t-.35.15t-.15.35t.15.35t.35.15m2 0q.2 0 .35-.15t.15-.35t-.15-.35T15 9t-.35.15t-.15.35t.15.35t.35.15"/></svg>
								<h2 className="mt-8">Proponi il tuo Immobile</h2>
							</dt>
							<dd className="mt-1 flex flex-auto flex-col text-base leading-7">
								<div className=" mt-4">
								<Button link="/servizi/richiedi" text="Scrivici" bgColor="bg-white" bgText="text-black" />
								</div>
							</dd>
						</div>
						<div className="flex flex-col items-center justify-center">
							<dt className="text-base font-semibold leading-7 text-white flex flex-col items-center justify-center">
								<TbMoneybag className="text-[150px]" />
								<h2 className="mt-8">Valuta il tuo Immobile</h2>
							</dt>
							<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
								<div className=" mt-4">
								<Button link="/servizi/richiedi" text="Scrivici" bgColor="bg-white" bgText="text-black" />
								</div>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Services;