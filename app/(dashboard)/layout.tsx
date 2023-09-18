import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCOunt = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div
        className="hidden md:flex md:w-72
         h-full md:flex-col md:fixed 
        md:insert-y-0  bg-gray-900"
      >
        <Sidebar apiLimitCount={apiLimitCOunt} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
