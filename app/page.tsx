import Consequences from "@/components/home/Consequences";
import Requirements from "@/components/home/Requirements";
import EngineYear from "@/components/home/EngineYear";
import Emissions from "@/components/home/Emissions";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import Banner from "@/components/home/Banner";
import Steps from "@/components/home/Steps";
import Faq from "@/components/home/FAQ";
import CallButton from "@/components/common/CallButton";

export const metadata = {
  title: "SecureFence | Vinyl & Privacy Fence Installation in Los Angeles",
  description: "Affordable vinyl, privacy, picket, aluminum, and rolling gate fence installation services in Los Angeles.",
  keywords: [
    "vinyl fence",
    "fencing",
    "fence company near me",
    "aluminium fence",
    "rolling gate",
    "picket fence",
    "privacy fence",
    "pro vinyl fencing",
    "vinyl fence depot",
    "gng",
    "pacific vinyl",
    "k star vinyl",
    "alumission",
    "globusgates"
  ]
};


export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="flex flex-col gap-9 bg-[#FCFCFC] padding-m padding-vertical">
        <Services />
        <Steps />
        <Requirements />
        <EngineYear />
        <Emissions />
        <Pricing />
        <Consequences />
        <Faq />
      </div>
      <CallButton />
    </div>
  );
}
