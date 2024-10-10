import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FrontendLayout = ({children}) => {
	return (
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
	);
};

export default FrontendLayout;