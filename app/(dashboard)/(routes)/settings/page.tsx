import { Heading } from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings2 } from "lucide-react";

const Settings = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings2}
        iconColor="text-gray-800"
        bgColor="bg-gray-800/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Premium Plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default Settings;
