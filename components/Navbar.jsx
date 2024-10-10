import SubMenu from "./SubMenu";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
	return (
		<nav>
			<SubMenu />
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="Hamburger Menu">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</div>
						<ul 
							tabIndex="0"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
							<li><Link href="/" aria-label="Home">Home</Link></li>
							<li><Link href="/about" aria-label="About">About</Link></li>
							<li><Link href="/immobili" aria-label="Immobili">Immobili</Link></li>
							<li>
								<span className="hover:bg-transparent cursor-text" aria-label="Servizi">Servizi</span>
								<ul className="p-2">
									<li><Link href="/servizi/valuta" aria-label="Valuta Immobile">Valuta Immobile</Link></li>
									<li><Link href="/servizi/proponi" aria-label="Proponi Immobile">Proponi Immobile</Link></li>
									<li><Link href="/servizi/richiedi" aria-label="Richiesta Specifica">Richiesta Specifica</Link></li>
								</ul>
							</li>
							<li><Link href="/contatti" aria-label="Contatti">Contatti</Link></li>
						</ul>
					</div>
					<Link href="/" className="mx-4 text-xl">
						<Image src={logo} alt="Logo Fine Living" width={50} height={50} className="w-auto"  />
					</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-medium">
						<li><Link href="/">Home</Link></li>
						<li><Link href="/about">About</Link></li>
						<li><Link href="/immobili">Immobili</Link></li>
						<li>
							<details>
								<summary>Servizi</summary>
								<ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-fit p-2 shadow ">
									<li><Link href="/servizi/valuta" aria-label="Valuta Immobile">Valuta Immobile</Link></li>
									<li><Link href="/servizi/proponi" aria-label="Proponi Immobile">Proponi Immobile</Link></li>
									<li><Link href="/servizi/richiedi" aria-label="Richiesta Specifica">Richiesta Specifica</Link></li>
								</ul>
							</details>
						</li>
						<li><Link href="/contatti">Contatti</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;