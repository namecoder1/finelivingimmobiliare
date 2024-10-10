import "@/assets/styles/globals.css";
import Head from "next/head";
import { Montserrat, Krona_One } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', })
const kronaOne = Krona_One({ subsets: ['latin'], weight: '400', display: 'swap', })

export const metadata = {
	title: {
		template: '%s | Fine Living Immobiliare',
		default: 'Fine Living Immobiliare'
	},
	description: 'Fine Living Immobiliare è la scelta migliore per il tuo sogno, la tua nuova casa ti aspetta',
	language: 'it',
	openGraph: {
		title: {
			template: '%s | Fine Living Immobiliare',
			default: 'Fine Living Immobiliare'
		},
		description: 'Fine Living Immobiliare è la scelta migliore per il tuo sogno, la tua nuova casa ti aspetta',
    type: 'website',
    locale: 'it_IT',
    url: 'https://finelivingimmobiliare.com',
    site_name: 'Fine Living Immobiliare',
	},
}

const RootLayout = ({children}) => {
	return (
		<html lang="it">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="icon" href="/icon-512x512.png" />
				<link rel="icon" href="/icon-192x192.png" />
				<link rel="icon" href="/icon.svg" />
			</Head>
			<body className={`${montserrat.className}`}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;