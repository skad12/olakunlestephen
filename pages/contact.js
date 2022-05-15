import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/briefcase.ico"></link>
      </Head>

      <Navbar />
      
      <div
        className="min-h-screen pt-10 pl-8 antialiased text-white bg-cover lg:pl-32"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="pt-40 space-y-2">
          <div className="text-2xl font-bold text-gray-200 lg:text-5xl md:text-3xl">Contact</div>
          <div className="tracking-widest text-gray-300 lg:text-2xl md:text-xl">
            Let&apos;s make something together.{" "}
            <span className="lg:text-3xl md:hidden">&#128170;</span>
          </div>
          <div className="pt-6 tracking-widest lg:text-xl ">
            Feel free to send me an email if you&apos;re looking for a front-end
            engineer, <br />
            have a question or just want to say hi!
          </div>
        </div>

        <div>
          <button className="w-32 h-12 text-white bg-blue-500 rounded-lg lg:text-lg mt-14 hover:bg-blue-700">
            <a href="mailto: stephenkunle26@gmail.com">Say hello</a>
          </button>
        </div>
      </div>
    </>
  );
}
