import Image from "next/image";
import React from "react";
import saleImage from "../public/background.jpeg";
import SaleCard from "@/components/SaleCard";

const Hero = () => {
  return (
    <div>
      <div className="h-[400px] w-[1340px] bg-orange-600 flex mx-auto justify-center">
        {/* <Image
          src={saleImage}
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        <SaleCard />
      </div>
    </div>
  );
};

export default Hero;
