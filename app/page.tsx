import Consequences from "@/components/home/Consequences";
import Requirements from "@/components/home/Requirements";
import WhoIsExempt from "@/components/home/WhoIsExempt";
// import Compliance from "@/components/home/Compliance";
import EngineYear from "@/components/home/EngineYear";
import Emissions from "@/components/home/Emissions";
import WhoNeeds from "@/components/home/WhoNeeds";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import Summary from "@/components/home/Summary";
import Banner from "@/components/home/Banner";
import Steps from "@/components/home/Steps";
import Faq from "@/components/home/FAQ";
import FenceOverview from "@/components/home/WhyFence";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="flex flex-col gap-9 bg-[#FCFCFC] padding-m padding-vertical">
        <FenceOverview />
        {/* <Compliance /> */}
        <Services />
        <Steps />
        <Requirements />
        <WhoNeeds />
        <EngineYear />
        <Emissions />
        <Pricing />
        <WhoIsExempt />
        <Consequences />
        <Summary />
        <Faq />
      </div>
    </div>
  );
}
