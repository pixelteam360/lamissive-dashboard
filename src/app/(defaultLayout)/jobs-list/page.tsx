
import JobslistsListTab from "@/components/modules/Jobslist/JobListTab";
import PageHeader from "@/components/shared/PageHeader";


const page = () => {
    return (
        <div>
            <PageHeader title="Project list"/>
            <JobslistsListTab />
        </div>
    );
};

export default page;