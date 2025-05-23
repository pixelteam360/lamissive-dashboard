import SideBar from "@/components/shared/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full md:p-20 p-5">
        <SidebarTrigger />
        <div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
