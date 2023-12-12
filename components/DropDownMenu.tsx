import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  const categories = [
    {
      id: 1,
      name: "Development",
      submenus: [
        "Web Development",
        "Mobile Development",
        "Game Development",
        "Database",
        "Testing",
        "Software Engineering",
        "Development Tools",
      ],
    },
    {
      id: 2,
      name: "Business",
      submenus: [
        "Finance",
        "Entrepreneurship",
        "Communications",
        "Management",
        "Sales",
        "Strategy",
        "Operations",
        "Project Management",
        "Business Law",
        "Data & Analytics",
        "Home Business",
        "Human Resources",
        "Industry",
        "Media",
        "Real Estate",
        "Other",
      ],
    },
    {
      id: 3,
      name: "Finance & Accounting",
      submenus: [
        "Accounting & Bookkeeping",
        "Compliance",
        "Cryptocurrency & Blockchain",
        "Economics",
        "Finance",
        "Finance Cert & Exam Prep",
        "Financial Modeling & Analysis",
        "Investing & Trading",
        "Money Management Tools",
        "Taxes",
        "Other Finance & Economics",
      ],
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Catergories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {categories.map((category) => (
            <DropdownMenuSub key={category.id}>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>{category.name}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {category.submenus.map((submenu, index) => (
                    <DropdownMenuItem key={index + 1}>
                      {/* <Mail className="mr-2 h-4 w-4" /> */}
                      <span>{submenu}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
