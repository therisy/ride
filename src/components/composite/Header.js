import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { routers } from "../../data";
import NavbarButton from "../ui/buttons/NavbarButton";
import Image from "next/image";

function ResponsiveNavbar() {
	return (
		<div className="w-full h-auto p-3 flex-col flex justify-center items-center grid gap-y-6">
			{routers.map((r) => {
				return (
					<Link href={r.path}>
						<h1 className="hover:text-[#fcee06]	text-xl text-center hover:border-b-2 hover:border-[#fcee06] cursor-pointer">
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
			<div className="flex justify-between items-center p-3 px-6 md:!px-16">
				<div>
					<Image width={125} height={43} src="/bitaksi.png" />
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
