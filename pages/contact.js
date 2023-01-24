import React from "react";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <div className="px-6 mt-16 lg:grid lg:grid-cols-2 md:pt-0 gap-y-6">
        <div>
          <Form />
        </div>

        <div className="pt-24 pb-24 md:pt-0 md:pb-0">
          <div className="flex font-bold lg:text-2xl ">
            <div>Let&apos;s make something together. </div>
            <div className="h-10 pl-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
            </div>
          </div>

          <div className="text-sm lg:pt-6 lg:text-base ">
            Feel free to send me an email if you&apos;re looking for a front-end
            engineer, <br />
            have a question or just want to say hi!
          </div>

          <button className="inline-flex items-center justify-center h-12 px-6 mt-10 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-gray-800 hover:text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
