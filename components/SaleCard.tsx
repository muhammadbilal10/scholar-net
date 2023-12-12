import Image from "next/image";
import React from "react";

const SaleCard = () => {
  return (
    <div>
      <div className="">
        <p className="absolute md:left-[100px] md:top-[140px] lg:top-[150px] lg:left-[200px] bg-white w-[440px] flex flex-col p-6 z-50">
          <span className="font-bold text-3xl">24-Hour Flash Sale</span>
          <span>Courses as low as $12.99 for one day only. Grab your</span>
        </p>
        <div className="flex">
          <Image
            alt="sale"
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/4346883a-110a-41aa-9de2-197f260fdef1.jpg"
            height={300}
            width={1340}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
