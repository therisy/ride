import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faSearch,
	faAmbulance,
	faAnchor,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const routers = [
	{ name: "Ana Sayfa", path: "/" },
	{ name: "Taksi Çağır", path: "/" },
	{ name: "Sürücü Ol", path: "/" },
	{ name: "Uygulamamız", path: "/" },
	{ name: "İletişim", path: "/" },
];

function NavbarButton({ children }) {
	return (
		<>
			<span className="flex h-11 justify-center items-center p-2 border-2 border-[#fcee06] hover:duration-300 hover:text-black rounded-2xl text-center w-28 cursor-pointer hover:bg-[#fcee06]">
				{children}
			</span>
		</>
	);
}

function ResponsiveNavbar() {
	return (
		<div className="w-full h-auto p-3 flex-col flex justify-center items-center grid gap-y-6">
			{routers.map((r) => {
				return (
					<Link href={r.path}>
						<h1 className="hover:text-[#fcee06]	text-center text-3xl hover:border-b-2 hover:border-[#fcee06] text-sm cursor-pointer">
							{r.name}
						</h1>
					</Link>
				);
			})}
		</div>
	);
}

function Header() {
	const [responsive, setResponsive] = useState();

	const activeResponsive = () => {
		if (responsive) setResponsive(false);
		else setResponsive(true);
	};

	return (
		<>
			<div className="flex justify-between items-center p-3 px-6">
				<div>
					<img
						className="relative top-0 bottom-0"
						src="https://www.bitaksi.com/wp-content/themes/BiTaksi/img/logo.png"
					></img>
				</div>

				<div className="flex md:hidden justify-center items-center">
					<FontAwesomeIcon
						icon={faBars}
						style={{ fontSize: 33, color: "white" }}
						className="cursor-pointer"
						onClick={activeResponsive}
					/>
				</div>

				<div className="hidden justify-between items-center md:flex">
					<div className="flex items-center gap-x-8">
						{routers.map((r) => {
							return (
								<Link href={r.path}>
									<h1 className="hover:text-[#fcee06]	 hover:border-b-2 hover:border-[#fcee06] text-sm cursor-pointer">
										{r.name}
									</h1>
								</Link>
							);
						})}
					</div>

					<div className="flex items-center pl-20 gap-x-3">
						<NavbarButton>Giriş Yap</NavbarButton>
					</div>
				</div>
			</div>
			<div className="flex-col flex justify-center items-center md:hidden">
				{responsive && <ResponsiveNavbar></ResponsiveNavbar>}
			</div>
		</>
	);
}

export default Header;
