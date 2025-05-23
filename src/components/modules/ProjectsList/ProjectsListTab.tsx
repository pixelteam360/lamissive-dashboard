import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const ProjectsListTab = () => {
  return (
    <div>
      <Tabs defaultValue="myProfile" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="myProfile"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Ongoing Project
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Completed Project
          </TabsTrigger>
        </TabsList>
        <TabsContent value="myProfile">
          <ProjectCard />
        </TabsContent>
        <TabsContent value="password">
          <ProjectCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsListTab;
