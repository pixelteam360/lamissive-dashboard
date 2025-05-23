import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionTable from "./SubscriptionTable";

const SubscriptionTab = () => {
  return (
    <div>
      <Tabs defaultValue="Subscription" className="w-full">
        <TabsList className="bg-transparent md:mb-8 mb-4 md:gap-5 gap-2">
          <TabsTrigger
            value="Subscription"
            className="data-[state=active]:bg-transparent  data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Subscription
          </TabsTrigger>
          <TabsTrigger
            value="Job Fee"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Job Fee
          </TabsTrigger>
          <TabsTrigger
            value="Project Fee"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:rounded-none"
          >
            Project Fee
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Subscription">
          <SubscriptionTable />
        </TabsContent>
        <TabsContent value="Job Fee">
          <SubscriptionTable />
        </TabsContent>
        <TabsContent value="Project Fee">
          <SubscriptionTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubscriptionTab;
