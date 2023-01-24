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
        className="bg-cover min-h-screen lg:grid lg:grid-rows antialiased font-source"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')`,
        }}
      >
        <div className="grid content-start">
          <Navbar />
        </div>
        <Component {...pageProps} />
        <div className="grid content-end">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
