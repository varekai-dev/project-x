import "../styles/globals.scss";
import Context from "../components/Context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Context>
			<Component {...pageProps} />
		</Context>
	);
}

export default MyApp;
