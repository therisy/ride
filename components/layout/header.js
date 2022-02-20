import Link from "next/link";

function NavbarButton({ children }) {
	return (
		<>
			<span className="flex h-11 justify-center items-center p-2 border-2 border-[#fcee06] hover:duration-300 hover:text-black rounded-2xl text-center w-28 cursor-pointer hover:bg-[#fcee06]">
				{children}
			</span>
		</>
	);
}

function Header() {
	const routers = [
		{ name: "Ana Sayfa", path: "/" },
		{ name: "Taksi Çağır", path: "/" },
		{ name: "Sürücü Ol", path: "/" },
		{ name: "Uygulamamız", path: "/" },
		{ name: "İletişim", path: "/" },
	];

	return (
		<div className="flex justify-between items-center p-3 px-6">
			<div>
				<img src="https://www.bitaksi.com/wp-content/themes/BiTaksi/img/logo.png"></img>
			</div>

			<div className="flex justify-between items-center">
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
	);
}

export default Header;
