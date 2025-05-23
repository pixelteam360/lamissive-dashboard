import OverView from "@/components/modules/Dashboard/OverView";
import TopWarkerTable from "@/components/modules/Dashboard/TopWarkerTable";
import PageHeader from "@/components/shared/PageHeader";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <PageHeader title="Overview" />
      <OverView />
      <h1 className="md:text-[32px] text-2xl font-bold mb-6 mt-9">
        Top Worker List
      </h1>
      <TopWarkerTable />
    </div>
  );
};

export default CommonLayoutHomePage;
