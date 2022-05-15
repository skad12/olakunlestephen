import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
    return (
      <>
        <Head>
          <title>About</title>
          <link rel="icon" href="/briefcase.ico"></link>
        </Head>

        <Navbar />

        <div
          className="min-h-screen p-10 space-y-10 text-gray-200 bg-cover "
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/355853/pexels-photo-355853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          <div className="pt-24">
            <div className="pb-16 text-4xl font-bold lg:text-6xl ">About Me</div>

            <div className="space-y-4 lg:text-2xl md:text-xl">
              <div>
                {" "}
                My name is 
                <span className="font-bold"> Olakunle</span>{" "}
                <span className="font-bold">Stephen</span> I&apos;m a <span className="font-bold">Front-End
                Developer</span> based in Abuja, Nigeria. I&apos;m a passionate
                developer who loves coding, open source, and the web platform.
              </div>
              <div>
                {" "}
                I build and create product that solves real-life problems and
                satisfies my client&apos;s Request. I specialize in using
                Languages Such as <span className="font-bold">HTML5</span>, <span className="font-bold">CSS3</span> and <span className="font-bold">Javascript</span>, And work with
                Frameworks such as <span className="font-bold">Tailwindcss</span>, <span className="font-bold">Alpinejs</span>, <span className="font-bold">Nextjs</span> and <span className="font-bold">WordPress</span>.
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