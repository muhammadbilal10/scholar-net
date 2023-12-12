import { CommandDemo } from "@/components/Command";
import CourseCard from "@/components/CourseCard";
import Courses from "@/sections/Courses";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import TopCategories from "@/sections/TopCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="my-5 min-h-screen">
        <Hero />
      </section>
      <section id="home" className="my-5 mx-12 min-h-screen">
        <Courses />
      </section>
      <section id="home" className="my-5 mx-12 min-h-screen">
        <TopCategories />
      </section>
      <section id="home" className="my-5 ">
        <Footer />
      </section>
    </main>
  );
}
