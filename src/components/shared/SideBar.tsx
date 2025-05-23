"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assets/images/logo.png";
import {
  SquareUser,
  Settings,
  ClipboardMinus,
  LayoutDashboardIcon,
  Contact,
  CircleDollarSign,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Projects List",
    url: "/projects-list",
    icon: ClipboardMinus,
  },
  {
    title: "Jobs List",
    url: "/jobs-list",
    icon: Contact,
  },
  {
    title: "User List",
    url: "/user-list",
    icon: SquareUser,
  },
  {
    title: "Subscription",
    url: "/subscription",
    icon: CircleDollarSign,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,
  },
];

const SideBar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLolgout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
  return (
    <Sidebar>
      <SidebarContent className="!bg-primary text-white">
        <SidebarGroup />
        <SidebarGroupLabel className="mb-20 mt-8 mx-auto">
          <Image src={logo} alt="logo" width={500} height={600} className="w-32" />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 space-y-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-[15px] font-bold px-4 py-6 ${
                    pathName === `${item.url}`
                      ? "bg-white text-primary rounded-lg"
                      : "text-white"
                  }`}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="!bg-primary text-white">
        <button
          onClick={handleLolgout}
          className="py-3 border border-red-400 rounded-lg font-medium text-base"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
