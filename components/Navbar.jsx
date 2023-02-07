import { react, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import code from "/public/code.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="px-2 pt-5 text-gray-800 bg-transparent">
        <div className="mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link href="/">
              <button className="inline-flex px-4 space-x-2 md:px-0">
                <Image alt="" width={30} height={30} src={code} />
                <span className="ml-2 text-xl italic font-semibold tracking-widest uppercase md:text-2xl">
                  SKAD
                </span>
              </button>
            </Link>

            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link href="./">
                  <button className="font-medium tracking-wide text-gray-800 transition-colors hover:font-bold hover:text-xl durat">
                    Home
                  </button>
                </Link>
              </li>

              <li>
                <Link href="./about">
                  <button className="font-medium tracking-wide text-gray-800 transition-colors hover:font-bold hover:text-xl durat">
                    About
                  </button>
                </Link>
              </li>

              <li>
                <Link href="./projects">
                  <button className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:font-bold hover:text-xl ">
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="./contact">
                  <button className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:font-bold hover:text-xl ">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="flex items-center hidden md:block ">
              <li>
                <Link href="https://wa.me/message/2FCXILQF2S64E1">
                  <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded md:hover:bg-gray-800 md:hover:text-white md:bg-gray-200 md:text-gray-800 s focus:shadow-outline focus:outline-none">
                    Hire Me
                  </button>
                </Link>
              </li>
            </ul>
            <div className="block px-4 lg:hidden">
              <button
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-gray-300 rounded shadow-xl dark:text-white dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <div></div>
                      <div>
                        <button
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600 "
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link href="/">
                            <div
                              onClick={() => setIsMenuOpen(false)}
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                            >
                              Home
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <div
                              onClick={() => setIsMenuOpen(false)}
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                            >
                              About
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/projects">
                            <div
                              onClick={() => setIsMenuOpen(false)}
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                            >
                              Projects
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <div
                              onClick={() => setIsMenuOpen(false)}
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                            >
                              Contact
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
