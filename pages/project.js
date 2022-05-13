import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="../briefcase.png"></link>
      </Head>

      <Navbar />

      <div
        className="pt-10 antialiased"
        style={{
          backgroundImage: ` url('https://images.pexels.com/photos/7794425/pexels-photo-7794425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="grid grid-cols-2 pt-48 pb-24 pl-16 gap-y-36">
          {/*  content1  */}
          <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`../wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            <div className="border-2 border-blue-500 rounded-full "></div>
            <div>
              <Image
                src={`../wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="pt-10 space-y-6 tracking-wide text-black">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy <br />
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          {/* content2 */}

          <div className="pt-10 space-y-6 tracking-wide text-black">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          <div className="w-5/6 rounded-2xl gap-y-2">
            <Image
              src={`../wapp.png`}
              width={600}
              height={300}
              alt=""
              className="w-full h-52 rounded-2xl"
            />
            <div className="border-2 border-blue-500 rounded-full "></div>
            <div>
              <Image
                src={`../wapp.png`}
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
                src={`../wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            <div className="border-2 border-blue-500 rounded-full "></div>
            <div>
              <Image
                src={`../wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
          </div>

          <div className="pt-10 space-y-6 tracking-wide text-black">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          {/* content2  */}

          <div className="pt-10 space-y-6 tracking-wide text-black">
            <div className="text-3xl font-bold text-center">
              What is Lorem Ipsum?
            </div>
            <div className="text-xl font-semibold ">
              this is a paragraphLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
            <div>
              <button className="p-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-700 hover:animate-bounce">
                Test-App
              </button>
            </div>
          </div>

          <div className="w-5/6 rounded-2xl gap-y-2">
            <div>
              <Image
                src={`../wapp.png`}
                width={600}
                height={300}
                alt=""
                className="w-full h-52 rounded-2xl"
              />
            </div>
            <div className="border-2 border-blue-500 rounded-full "></div>
            <div>
              <Image
                src={`../wapp.png`}
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
