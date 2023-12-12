import { CourseForm } from "@/components/AddCourseForm";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RegisterCourseForm } from "@/components/RegisterCourseForm";

const page = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Register Course</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterCourseForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
