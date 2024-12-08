import Image from "next/image";
import shopHero from "../../public/assets/shop-hero-2.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[709px] bg-blue-500 text-white">
      {/* Background Image */}
      <Image
        src={shopHero}
        alt="maingirl"
        height={709}
        width={1440}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
        <div className="md:w-1/2 text-white text-center md:text-left md:ml-10">
          <p className="uppercase text-sm tracking-widest mb-7 text-white">
            Summer 2020
          </p>
          <h1 className="text-6xl font-bold my-4">Vita Classic Product</h1>{" "}
          {/* Increased font size */}
          <p className="text-lg my-6">
            We know how large objects will act, <br />
            We know how large objects will act, We know
          </p>
          <div className="w-[295px] h-[52px] flex gap-[34px]">
            <h3 className="w-[77px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] text-white">
              $16.48
            </h3>
            <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] font-semibold bg-[#2DC071] py-[15px] flex gap-[10px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
