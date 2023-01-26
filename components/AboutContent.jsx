import Image from "next/image";
import React from "react";
import profile from "/public/profile.jpeg";
import Link from "next/link";
import freecode from "/public/freecode.svg";

const AboutContent = () => {
  return (
    <>
      <div className="pt-52 md:pt-none px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-4xl font-bold">Intro</p>
                <p className="text-gray-700">
                  I&apos;m a{" "}
                  <span className="font-bold">Front-End Developer</span> based
                  in <span className="font-bold">Abuja, Nigeria.</span> I&apos;m
                  a passionate developer who loves coding, open source, and the
                  Web platforms and Mobile Apps. I build and create product that
                  solves real-life problems and satisfies my client&apos;s
                  Request. I specialize in using Languages Such as{" "}
                  <span className="font-bold">HTML5</span>,{" "}
                  <span className="font-bold">CSS3</span> and{" "}
                  <span className="font-bold">Javascript</span>, And work with
                  Frameworks such as{" "}
                  <span className="font-bold">Tailwindcss</span>,{" "}
                  <span className="font-bold">Next.js</span>,{" "}
                  <span className="font-bold">React Native</span> and{" "}
                  <span className="font-bold">WordPress</span>. Aside from my
                  job, I like to create and contribute to open source projects.
                  That helps me to learn a ton of new stuff, grow as a developer
                  and support other open source projects. In my free time you
                  can find me playing Video Games, at the gym or on tech meetups
                  and conferences around Abuja.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Education & Academics</p>
                <p className="text-gray-700">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest.
                  Michael Knight a young loner.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <Image
                      src={freecode}
                      width={50}
                      height={50}
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">FreeCodeCamp.Org </p>
                <p className="text-gray-700">
                  Tell them I hate them. Is the Space Pope reptilian!? Tell her
                  she looks thin. Hello, little man. I will destroy you!
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Udemy.com</p>
                <p className="text-gray-700">
                  If one examines precultural libertarianism, one is faced with
                  a choice: either accept rationalism or conclude that context
                  is a product.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <Link href="resume.pdf" download>
                  <button className="h-12 px-6 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                    Download CV
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex order-first">
            <Image
              className="inset-0 object-cover object-bottom w-full rounded-3xl shadow-lg h-96 lg:absolute lg:h-full"
              src={profile}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
