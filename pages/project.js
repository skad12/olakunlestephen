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
          backgroundImage: ` url(' https://images.pexels.com/photos/7078034/pexels-photo-7078034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ')`,
        }}
      >
        <div className="grid pt-32 pb-24 pl-16 lg:pt-48 lg:grid-cols-2 lg:gap-y-36 gap-y-16">

          {/*  content1  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
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
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Test</button>
            </div>
          </div>

         {/*  content2  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
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
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Test</button>
            </div>
          </div>

          {/*  content3  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
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
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Test</button>
            </div>
          </div>

        {/*  content4  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
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
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg
             text-sm px-5 py-2.5  hover:animate-bounce text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Test</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}