import SubscriptionTab from "@/components/modules/Subscription/SubscriptionTab";
import PageHeader from "@/components/shared/PageHeader";


const page = () => {
    return (
        <div>
            <PageHeader title="Subscription list"/>
            <SubscriptionTab />
        </div>
    );
};

export default page;