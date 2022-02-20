import Head from "next/head";
import Hero from "../components/home/hero";

export default function Home() {
	return (
		<div className="grid gap-y-12">
			<Head>
				<title>YollaBiTaksi</title>
				<meta
					name="description"
					content="hızlı ve güvenilir şekilde taksi çağırma"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero></Hero>
		</div>
	);
}
