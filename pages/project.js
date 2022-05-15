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
          backgroundImage: ` url('https://images.pexels.com/photos/7794425/pexels-photo-7794425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="grid pt-32 pb-24 pl-16 lg:pt-48 lg:grid-cols-2 gap-y-36">
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
            <div className="border-2 border-blue-500 rounded-full "></div>
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

          <div className="space-y-6 tracking-wide text-black lg:pt-5">
            <div className="font-bold text-center lg:text-3xl">
              What is Lorem Ipsum?
            </div>
            <div className="font-semibold lg:text-xl">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. 
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          {/* content2 */}

          <div className="space-y-6 tracking-wide text-black lg:pt-5">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. 
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          <div className="w-5/6 rounded-2xl gap-y-2">
            <Image
              src={`/wapp.png`}
              width={600}
              height={300}
              alt=""
              className="w-full h-52 rounded-2xl"
            />
            <div className="border-2 border-blue-500 rounded-full "></div>
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

          {/* content1  */}
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
            <div className="border-2 border-blue-500 rounded-full "></div>
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

          <div className="space-y-6 tracking-wide text-black lg:pt-5">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. 
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          {/* content2  */}

          <div className="space-y-6 tracking-wide text-black lg:pt-5">
            <div className="font-bold text-center lg:text-3xl">
              What is Lorem Ipsum?
            </div>
            <div className="font-semibold lg:text-xl">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
            <div  className="p-3 text-center text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
              <button>
                Test-App
              </button>
            </div>
          </div>

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
            <div className="border-2 border-blue-500 rounded-full "></div>
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
        </div>
      </div>
    </>
  );
}
