import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: string;
  price: string;
  image: StaticImageData;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  price,
  image,
}) => {
  const renderRatingStars = (rating: string) => {
    const stars = [];
    const ratingValue = parseFloat(rating);
    for (let i = 0; i < 5; i++) {
      if (i < ratingValue) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-500">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <Card>
      <CardHeader className={cn("p-0")}>
        <CardTitle>
          <Image src={image} alt="course" height={200} className="w-full" />
        </CardTitle>
        <CardDescription className="pl-2">
          <p className="text-black">{title}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("pl-2")}>
        <p className="text-gray-500">{instructor}</p>
        <p>
          <span className="text-[#4d3105] font-bold font text-base">
            {rating}
          </span>{" "}
          {renderRatingStars(rating)}
          <span className="text-gray-500"> (1,000)</span>
        </p>
        <p className="font-bold">
          ${price}
          <span className="pl-2 text-gray-500 line-through font-light">
            $199.99
          </span>
        </p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default CourseCard;
