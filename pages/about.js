import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
    return (
      <>
        <Head>
          <title>About</title>
          <link rel="icon" href="/briefcase.png"></link>
        </Head>

        <Navbar />

        <div
          className="min-h-screen p-10 space-y-10 text-gray-200 bg-cover "
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/355853/pexels-photo-355853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          <div className="pt-24">
            <div className="pb-16 text-6xl italic font-bold ">About Me</div>

            <div className="space-y-4 text-2xl">
              <div>
                {" "}
                My name is <span className="text-6xl">O</span>
                <span className="text-4xl">lakunle</span>{" "}
                <span className="text-6xl">S</span>
                <span className="text-4xl">tephen</span> I&apos;m a Front-End
                Developer based in Abuja, Nigeria. I&apos;m a passionate
                developer who loves coding, open source, and the web platform
                &heart;.
              </div>
              <div>
                {" "}
                I build and create product that solves real-life problems and
                satisfies my client&apos;s Request. I specialize in using
                Languages Such as HTML5, CSS3 and Javascript, And work with
                Frameworks such as Tailwindcss, Alpinejs, Nextjs and WordPress.
                Aside from my job, I like to create and contribute to open
                source projects.
              </div>
              <div>
                {" "}
                That helps me to learn a ton of new stuff, grow as a developer
                and support other open source projects. In my free time you can
                find me playing Video Games, at the gym or on tech meetups
                and conferences around Abuja
              </div>
            </div>
          </div>
        </div>
      </>
    );
}