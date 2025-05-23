import UserListTab from "@/components/modules/Userslist/UserListTab";
import PageHeader from "@/components/shared/PageHeader";


const page = () => {
    return (
        <div>
            <PageHeader title="User list"/>
            <UserListTab />
        </div>
    );
};

export default page;