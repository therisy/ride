import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/globals.css";
import Header from "../src/components/composite/Header";

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
