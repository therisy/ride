import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Input from "../src/components/ui/input/index";
import Button from "../src/components/ui/buttons/index";
import RegisterCard from "../src/components/ui/cards/RegisterCard";
import Image from "next/image";

export default function Home() {
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
					<Button className={"hover:bg-orange-600 bg-orange-500"}>
						Giriş Yap
					</Button>
					<div className="flex items-center gap-x-6">
						<Image
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={185}
							height={80}
							src="/googleplay.svg"
						/>
						<Image
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={185}
							height={80}
							src="/appstore.svg"
						/>
						<Image
							className="cursor-pointer hover:translate-y-4 hover:duration-1000"
							width={185}
							height={80}
							src="/huawei-app.svg"
						/>
					</div>
				</div>
				<RegisterCard>
					<div>
						<div className="flex-col flex justify-center items-center grid gap-y-6">
							<h1 className="text-2xl text-white font-bold mb-3">
								Kayıt Ol
							</h1>
							<Input
								name="name"
								id="name"
								placeholder="İsim Soyisim"
							></Input>
							<Input
								type={"email"}
								name="email"
								id="email"
								placeholder="Email"
							></Input>
							<div className="flex items-center">
								<ReactFlagsSelect
									fullWidth={false}
									showSelectedLabel={false}
									placeholder={"Ülke"}
									onSelect={(code) => setSelected(code)}
									selected={selected}
									className="bg-white h-10"
								/>
								<Input
									name="phone"
									id="phone"
									placeholder="Telefon"
								></Input>
							</div>
							<Input
								type={"password"}
								name="password"
								id="password"
								placeholder="Şifre"
							></Input>
							<Button
								className={
									"hover:bg-green-600 bg-green-500 !w-full"
								}
							>
								Onayla
							</Button>
						</div>
					</div>
				</RegisterCard>
			</div>
		</div>
	);
}
