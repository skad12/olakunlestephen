import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olakunle&apos;s Portfolio</title>
        <link rel="icon" href="/briefcase.ico"></link>
      </Head>

      <Navbar />

      <div
        className="min-h-screen pt-10 antialiased text-white bg-cover "
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="p-16 pt-24 space-y-10 ">
          <div className="text-4xl font-bold tracking-widest lg:text-5xl">
            <div>
              Hi, I&apos;m{" "} Olakunle{" "} Stephen{" "}
              <span className="lg:text-4xl animate-pulse">&#128075;</span>
            </div>
          </div>
          <div className="space-y-5 text-lg font-semibold lg:text-2xl md:text-xl"> 
            <div>I&apos;m a <span className="font-bold">Front-end Developer</span> based in Nigeria.</div>
            <div>I Code, Write and Build Stuff on the Internet.</div>
          </div>
          <div className="pt-2 space-y-5 text-lg font-semibold lg:text-2xl md:text-xl">
            <div>
              I&apos;m focused on building products with <span className="font-bold">HTML 5</span>, <span className="font-bold">CSS 3</span> and 
              <span className="font-bold"> JavaScript</span>, Specifically with Frameworks like Tailwindcss, <span className="font-bold">Wordpress</span> and <span className="font-bold">Next.js.</span>
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
