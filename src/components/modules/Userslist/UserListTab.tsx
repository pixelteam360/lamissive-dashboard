import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserTable from "./UserTable";

const UserListTab = () => {
  return (
    <div>
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Users
          </TabsTrigger>
          <TabsTrigger
            value="company"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Company
          </TabsTrigger>
          <TabsTrigger
            value="worker"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Worker
          </TabsTrigger>
          <TabsTrigger
            value="concierge"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Concierge
          </TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserTable />
        </TabsContent>
        <TabsContent value="company">
          <UserTable />
        </TabsContent>
        <TabsContent value="worker">
          <UserTable />
        </TabsContent>
        <TabsContent value="concierge">
          <UserTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserListTab;
