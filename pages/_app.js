import "../styles/globals.css";
import Nav from "../components/Nav";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Nav />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
