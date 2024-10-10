import Button from "@/components/Button";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[90vh] mx-3">
			<h1 className="font-bold text-3xl mb-1">Errore 404</h1>
			<p className="mb-4 text-center">La pagina che stai cercando non esiste o potrebbe essere stata rimossa.</p>
			<Button link='/' text='Torna alla Home' />
		</div>
	);
};

export default NotFoundPage;