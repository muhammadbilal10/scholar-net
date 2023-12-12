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
  icon: string;
  title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title }) => {
  return (
    <div className="lg:w-[280px] md:w-[200px]">
      <Card className={cn("bg-transparent")}>
        <CardHeader className={cn("p-0")}>
          <CardTitle>
            <Image src={icon} alt="course" width={300} height={300} />
          </CardTitle>
        </CardHeader>
      </Card>
      <h1 className="text-xl font-bold py-4">{title}</h1>
    </div>
  );
};

export default CourseCard;
