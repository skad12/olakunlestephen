import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/briefcase.ico"></link>
      </Head>

      <Navbar />

      <div
        className="antialiased lg:pt-5"
        style={{
          backgroundImage: ` url(' https://images.unsplash.com/photo-1662080504623-15b0749a3e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80 ')`,
        }}
      >
        <div className="grid pt-32 pb-24 pl-16 pr-16 lg:pt-48 lg:grid-cols-2 lg:gap-y-36 gap-y-16">

          {/*  content1  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`/weather/wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            
            <div>
              <Image
                src={`/weather/wapp2.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="grid content-center space-y-5 tracking-wide text-black lg:space-y-10 lg:pt-2">
            <div className="font-bold lg:text-3xl">
              Weather Forecast App
            </div>
            <div className="font-semibold text-white align-baseline lg:text-2xl">
             Weather Forecast Application built with Basic Languages (HTML5, CSS3 and Javascript)
             also with Frameworks such as <a href="https://tailwindcss.com/"  className="text-blue-900">Tailwindcss</a>, <a href="https://daisyui.com/" className="text-blue-900" >Daisyui</a> and <a href="https://nextjs.org/" className="text-blue-900" >Next.js</a>, 
             Used Github as Version Control and Vercel for Deployment. <br/><br/> Click <a href="https://github.com/skad12/weather2" target="_blank" rel="noopener noreferrer" className="text-blue-900" >here</a> for source code.
            </div>
            <div className="">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <a href="https://weather2-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">Test</a></button>
            </div>
          </div>

         {/*  content2  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`/random/random.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            
            <div>
              <Image
                src={`/random/random1.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="grid content-center space-y-5 tracking-wide text-black lg:space-y-10 lg:pt-2">
            <div className="font-bold lg:text-3xl">
              Random Quote Generator 
            </div>
            <div className="font-semibold text-white align-baseline lg:text-2xl">
             Random Quote Generator generates Random Motivational/Inspirational quotes built with Basic Languages (HTML5, CSS3 and Javascript)
             also with Frameworks such as <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-900">Tailwindcss</a>, <a href="https://daisyui.com/" className="text-blue-900" >Daisyui</a> and <a href="https://nextjs.org/" className="text-blue-900" >Next.js</a>, 
             Used Github as Version Control and Vercel for Deployment. <br/><br/> Click <a href="https://github.com/skad12/random" target="_blank" rel="noopener noreferrer" className="text-blue-900" >here</a> for source code.
            </div>
            <div className="">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <a href="https://ranquote.vercel.app/" target="_blank" rel="noopener noreferrer" >Test</a></button>
            </div>
          </div>

          {/*  content3  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`/adoptme/adoptme1.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            
            <div>
              <Image
                src={`/adoptme/adoptme.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="grid content-center space-y-5 tracking-wide text-black lg:space-y-10 lg:pt-2">
            <div className="font-bold lg:text-3xl">
              Adopt a Pet 
            </div>
            <div className="font-semibold text-white align-baseline lg:text-2xl">
             Adopt a Pet is a site built to help search for pet animals of choice by being able 
             to specify it&apos;s breed, gender, color and other further features, built with Basic Languages (HTML5, CSS3 and Javascript)
             also with Frameworks such as <a href="https://tailwindcss.com/" className="text-blue-900">Tailwindcss</a>, <a href="https://daisyui.com/" className="text-blue-900" >Daisyui</a> and <a href="https://nextjs.org/" className="text-blue-900" >Next.js</a>, 
             Used Github as Version Control and Vercel for Deployment. <br/><br/> Click <a href="https://github.com/skad12/adoptme" target="_blank" rel="noopener noreferrer" className="text-blue-900" >here</a> for source code.
            </div>
            <div className="">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href="https://adoptme-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Test</a></button>
            </div>
          </div>

        {/*  content4  */}
          {/* <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`/wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            
            <div>
              <Image
                src={`/wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="grid content-center space-y-5 tracking-wide text-black lg:space-y-10 lg:pt-5">
            <div className="font-bold lg:text-3xl">
              What is Lorem Ipsum?
            </div>
            <div className="font-semibold lg:text-xl">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. 
            </div>
            <div className="">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Test</button>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
}