import React from "react";
import Image from "next/image";

const Grid2 = () => {
  return (
    <>
      <div className="px-4 py-5 pt-40 mx-auto md:pt-none sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full"
              width={500}
              height={500}
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <div
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </div>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <div
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Visit the East
              </div>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
              width={500}
              height={500}
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <div
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </div>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <div
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Simple is better
              </div>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
              width={500}
              height={500}
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <div
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </div>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <div
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Film It!
              </div>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid2;
