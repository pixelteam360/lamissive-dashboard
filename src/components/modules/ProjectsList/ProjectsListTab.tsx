import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const ProjectsListTab = () => {
  return (
    <div>
      <Tabs defaultValue="Ongoing Project" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="Ongoing Project"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Ongoing Project
          </TabsTrigger>
          <TabsTrigger
            value="Completed Project"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Completed Project
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Ongoing Project">
          <ProjectCard />
        </TabsContent>
        <TabsContent value="Completed Project">
          <ProjectCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsListTab;
