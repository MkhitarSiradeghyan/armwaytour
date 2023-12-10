import "../styles/globals.sass";
import { store } from "./../src/store/store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>ArmWay Tour</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
