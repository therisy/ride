import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function HeroInput({ name, id, placeholder, type = "text" }) {
	return (
		<input
			className="p-2"
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
		></input>
	);
}

function HeroButton({ children, type }) {
	return (
		<>
			{type == "success" && (
				<span className="flex w-full justify-center items-center text-white p-2 hover:duration-200 hover:bg-green-600 bg-green-500 rounded-2xl text-center w-28 cursor-pointer text-xl">
					{children}
				</span>
			)}
			{!type && (
				<span className="flex justify-center items-center text-white p-2 hover:duration-200 hover:bg-orange-600 bg-orange-500 rounded-2xl text-center w-28 cursor-pointer text-xl">
					{children}
				</span>
			)}
		</>
	);
}

function HeroCard({ children }) {
	return (
		<>
			<div className="rounded-xl w-auto h-auto p-10 bg-[#444343] text-black px-8">
				{children}
			</div>
		</>
	);
}

export default function Hero() {
	const [selected, setSelected] = useState("");

	return (
		<div>
			<div className="flex justify-between items-center mt-20 p-3 px-16">
				<div className="flex-col text-2xl grid gap-y-3">
					<h1 className="text-4xl">
						<span className="border-b-4 border-[#FFFF00]">
							Taksi
						</span>{" "}
						mi Arıyorsun? <br></br>Hemen kaydol ve taksini çağır.
					</h1>
					<HeroButton>Giriş Yap</HeroButton>
					<div className="flex items-center gap-x-6">
						<img
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={180}
							src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
						></img>
						<img
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={180}
							src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
						></img>
						<img
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={180}
							src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
						></img>
					</div>
				</div>
				<HeroCard>
					<div>
						<div className="flex-col flex justify-center items-center grid gap-y-6">
							<h1 className="text-2xl text-white font-bold mb-3">
								Kayıt Ol
							</h1>
							<HeroInput
								name="name"
								id="name"
								placeholder="İsim Soyisim"
							></HeroInput>
							<HeroInput
								type={"email"}
								name="email"
								id="email"
								placeholder="Email"
							></HeroInput>
							<div className="flex items-center">
								<ReactFlagsSelect
									fullWidth={false}
									showSelectedLabel={false}
									placeholder={"Ülke"}
									onSelect={(code) => setSelected(code)}
									selected={selected}
									className="bg-white h-10"
								/>
								<HeroInput
									name="phone"
									id="phone"
									placeholder="Telefon"
								></HeroInput>
							</div>
							<HeroInput
								type={"password"}
								name="password"
								id="password"
								placeholder="Şifre"
							></HeroInput>
							<HeroButton type="success">Onayla</HeroButton>
						</div>
					</div>
				</HeroCard>
			</div>
		</div>
	);
}
