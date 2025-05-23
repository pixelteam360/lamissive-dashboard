import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobslistCard from "./JobslistCard";

const JobslistsListTab = () => {
  return (
    <div>
      <Tabs defaultValue="Recent Job" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="Recent Job"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Recent Job
          </TabsTrigger>
          <TabsTrigger
            value="All Jobs"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            All Jobs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Recent Job">
          <JobslistCard />
        </TabsContent>
        <TabsContent value="All Jobs">
          <JobslistCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobslistsListTab;
