import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/briefcase.png"></link>
      </Head>

      <Navbar />
      
      <div
        className="min-h-screen pt-10 pl-32 antialiased text-white bg-cover"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="pt-40 space-y-2">
          <div className="text-5xl font-bold text-gray-200">Contact</div>
          <div className="text-2xl tracking-widest text-gray-300">
            Let&apos;s make something together.{" "}
            <span className="text-3xl">&#128170;</span>
          </div>
          <div className="pt-6 text-xl tracking-widest ">
            Feel free to send me an email if you&apos;re looking for a front end
            engineer, <br />
            have a question or just want to say hi!
          </div>
        </div>

        <div>
          <button className="w-32 h-12 text-lg text-white bg-blue-500 rounded-lg mt-14 hover:bg-blue-700">
            <a href="mailto: stephenkunle26@gmail.com">Say hello</a>
          </button>
        </div>
      </div>
    </>
  );
}
