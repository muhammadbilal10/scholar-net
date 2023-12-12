import CourseCard from "@/components/CourseCard";
import ML from "@/public/course/ML.png";
import AI from "@/public/course/AI.png";
import CC from "@/public/course/CC.png";
import DB from "@/public/course/DB.png";
import EB from "@/public/course/EB.png";
import OOP from "@/public/course/OOP.png";
import PHP from "@/public/course/PHP.png";
import SE from "@/public/course/SE.png";
import WEB from "@/public/course/WEB.png";

const Courses = () => {
  const courses = [
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructor: "Jose Portilla",
      rating: "4.6",
      price: "12.99",
      image: ML,
    },
    {
      title: "The Data Science Course 2021: Complete Data Science Bootcamp",
      instructor: "365 Careers",
      rating: "4.5",
      price: "12.99",
      image: AI,
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      instructor: "Kirill Eremenko",
      rating: "4.5",
      price: "12.99",
      image: CC,
    },
    {
      title: "The Complete SQL Bootcamp 2021: Go from Zero to Hero",
      instructor: "Jose Portilla",
      rating: "4.6",
      price: "12.99",
      image: DB,
    },
    {
      title: "The Complete 2021 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: "4.7",
      price: "12.99",
      image: EB,
    },
    {
      title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      instructor: "Jose Portilla",
      rating: "4.6",
      price: "12.99",
      image: OOP,
    },
    {
      title: "PHP for Beginners: PHP Crash Course 2021",
      instructor: "Kalob Taulien",
      rating: "4.5",
      price: "12.99",
      image: PHP,
    },
    {
      title: "The Complete JavaScript Course 2021: From Zero to Expert!",
      instructor: "Jonas Schmedtmann",
      rating: "4.6",
      price: "12.99",
      image: SE,
    },
    {
      title: "The Complete 2021 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: "4.7",
      price: "12.99",
      image: WEB,
    },
    {
      title: "The Complete 2021 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: "4.7",
      price: "12.99",
      image: WEB,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Learners are viewing</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-col-2 gap-2">
        {courses.map((course, index) => (
          <CourseCard key={index + 1} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
