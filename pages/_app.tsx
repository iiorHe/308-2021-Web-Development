import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen shadow-2xl mx-auto place-self-center max-w-7xl">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
