import Header from "../components/layout/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header></Header>
			<hr className="border-[#444040]"></hr>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
