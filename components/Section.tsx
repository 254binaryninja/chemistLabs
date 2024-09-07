'use client'

import React from "react";
import Lottie from "lottie-react";
import Animation from "../public/animations/Glass_laptop.json";
import Image from "next/image";
const Section = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row gap-10 mx-40 max-sm:mx-8 p-8 max-sm:flex-wrap">
        <p className="text-white font-bold text-3xl mx-6 max-sm:text-xl max-sm:flex-wrap">
          View our vast products collections from websites to apps to RESTFUL
          APIs and scalable backends
        </p>
        <div className="p-5">
          <Image
           src="/images/IMG_2.png"
           alt="Laptop connected to server"
           width={500}
           height={500}
          />
        </div>
      </div>
      <div className="flex-center mx-32 max-sm:mx-5">
        <h1 className="text-white font-bold text-2xl">Find what suits your business</h1>
        <div className=" p-5 max-sm:hidden">
          <Lottie animationData={Animation} size={500}/>
        </div>
      </div>
    </div>
  );
};

export default Section;
