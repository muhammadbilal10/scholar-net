import TopCategoryCard from "@/components/TopCategoryCard";
import { Book } from "lucide-react";

const TopCategories = () => {
  const TopCategories = [
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
      title: "Development",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
      title: "Design",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
      title: "Marketing",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
      title: "IT & Software",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
      title: "Personal Development",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
      title: "Business",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
      title: "Photography",
    },
    {
      icon: "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
      title: "Music",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Top Categories</h1>
      <div className="grid grid-cols-4 gap-4">
        {TopCategories.map((category, index) => (
          <TopCategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
