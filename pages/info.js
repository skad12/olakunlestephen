import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olakunle&apos;s Portfolio</title>
        <link rel="icon" href="/briefcase.ico"></link>
      </Head>

      <div
        className="min-h-screen pt-10 antialiased bg-cover "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')`,
        }}
      >

        <div className="p-4 lg:p-16 lg:pt-12 space-y-10">
          <div>
            <div className="text-xl lg:font-light lg:text-5xl">
            <span className="font-extrabold">O</span>lakunle{" "} Stephen{" "}
            </div>
             
            <div className="text-xs font-semibold ">
              Frontend &amp; Mobile Developer.
              </div>
          </div>

          <div className=" "> 
          
      <ul className="menu  w-56 p-2 rounded-box bg-glass ">

  <li>
    <Link  href="/">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    Home
    </a>
    </Link>
  </li>
  <li>
  <Link  href="/info">
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Info
    </a>
    </Link>
  </li>
  <li>
    <Link href="/proj">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
      Projects
    </a>
    </Link>
  </li>

  <li>
    <Link href="/contact">
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>


      Contact
    </a>
    </Link>
  </li>
</ul>
          </div>
        </div>


        <div className="p-4 lg:pr-10 lg:pb-10 lg:grid lg:grid-cols-3">
            

            <div className="space-y-4 col-end-4 text-sm lg:text-base pb-8">

              <div>
                I&apos;m a <span className="font-bold">Front-End
                Developer</span> based in <span className="font-bold">Abuja, Nigeria.</span> I&apos;m a passionate
                developer who loves coding, open source, and the Web platforms and Mobile Apps.
              </div>
              <div>
                {" "}
                I build and create product that solves real-life problems and
                satisfies my client&apos;s Request. I specialize in using
                Languages Such as <span className="font-bold">HTML5</span>, <span className="font-bold">CSS3</span> and <span className="font-bold">Javascript</span>, And work with
                Frameworks such as <span className="font-bold">Tailwindcss</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">React Native</span> and <span className="font-bold">WordPress</span>.
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