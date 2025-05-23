import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobslistCard from "./JobslistCard";

const JobslistsListTab = () => {
  return (
    <div>
      <Tabs defaultValue="myProfile" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="myProfile"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Recent Job
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            All Jobs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="myProfile">
          <JobslistCard />
        </TabsContent>
        <TabsContent value="password">
          <JobslistCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobslistsListTab;
