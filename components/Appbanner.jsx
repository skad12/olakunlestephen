import React from "react";
import StacksIcon from "../components/StacksIcon";
import Image from "next/image";
import profile from "/public/profile.jpeg";

const Appbanner = () => {
  return (
    <>
      <div className="antialiased lg:flex lg:justify-around lg:px-24  ">
        <div className="lg:space-y-5 space-y-2 pt-20 items-center px-8  ">
          <div className="text-3xl font-light lg:text-5xl">
            Olakunle Stephen{" "}
          </div>

          <div className="text-xl font-semibold ">Frontend Developer.</div>
          <StacksIcon />
        </div>

        <div className="flex pt-12 px-24 pb-44 ">
          <Image
            src={profile}
            width={200}
            height={200}
            alt=""
            className="rounded-full shadow-lg grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Appbanner;
