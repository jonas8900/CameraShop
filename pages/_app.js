import GlobalStyle from "../styles";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  buttons: true,
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
