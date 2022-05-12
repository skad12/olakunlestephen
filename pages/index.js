import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olakunle&apos;s Portfolio</title>
        <link rel="icon" href="/briefcase.png"></link>
      </Head>

      <Navbar />

      <div
        className="min-h-screen pt-10 antialiased text-white bg-cover "
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="p-16 pt-24 space-y-10 ">
          <div className="text-4xl italic tracking-widest ">
            <div>
              <span className="text-8xl">H</span>i, I&apos;m{" "}
              <span className="text-8xl">O</span>lakunle{" "}
              <span className="text-8xl">S</span>tephen{" "}
              <span className="text-7xl animate-pulse">&#128075;</span>
            </div>
          </div>
          <div className="space-y-5 text-2xl font-semibold ">
            <div>I&apos;m a Front-end Developer based in Nigeria.</div>
            <div>I Code, Write and Build Stuff on the Internet.</div>
          </div>
          <div className="pt-10 space-y-5 text-2xl font-semibold">
            <div>
              I&apos;m focused on building products with HTML5, CSS3 and
              JavaScript, Specifically Tailwindcss and Next.js .
            </div>
            <div>
              When I&apos;m not coding, I&apos;m likely at the gym or Playing
              Video Games (COD or PUGB).
            </div>
            <div>
              You can find me on{" "}
              <a
                href="https://github.com/skad12"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              ,{" "}
              <a
                href="https://twitter.com/TheOnlySkad"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
