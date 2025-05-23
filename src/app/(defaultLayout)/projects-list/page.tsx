import ProjectsListTab from "@/components/modules/ProjectsList/ProjectsListTab";
import PageHeader from "@/components/shared/PageHeader";


const page = () => {
    return (
        <div>
            <PageHeader title="Project list"/>
            <ProjectsListTab />
        </div>
    );
};

export default page;