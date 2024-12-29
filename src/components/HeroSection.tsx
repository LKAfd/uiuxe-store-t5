import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/hero.jpg";

const Herosection = () => {
  return (
    <div className="relative w-full h-[300px] bg-blue-500 text-white sm:h-[400px] md:h-[500px] lg:h-[716px]">
      {/* Background Image */}
      <Image
        src={heroImage} // Corrected image path (ensure the image is inside the 'public' folder)
        alt="maingirl"
        height={716}
        width={1440}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
        <div className="md:w-1/2 text-white text-center md:text-left md:ml-10">
          <p className="uppercase text-sm tracking-widest mb-7 text-white">
            Summer 2020
          </p>
          <h1 className="text-6xl font-bold my-4">New Collection</h1>{" "}
          {/* Increased font size */}
          <p className="text-lg my-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-9 py-5 rounded-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
