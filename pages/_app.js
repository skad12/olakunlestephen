import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Olakunle&apos;s Portfolio</title>
        <link rel="icon" href="/code.svg"></link>
      </Head>
      <div
        className="antialiased font-source bg-gray-200 min-h-screen md:grid md:content-between "
        style={{
          backgroundImage: `url('')`,
        }}
      >
        <Navbar />

        <Component {...pageProps} />

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
