import Header from "@/components/Header/header";
import HowItWorks from "@/components/Services/howItWorks";
import Service from "@/components/Services/services";

const Services = () => {
  return (
    <div className="flex flex-col gap-4 w-full  h-full p-4">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{`Whether an apartment, loft, condo, or house, there's always space & a solution to be found.`}</h1>
        <p className="text-sm md:text-base italic mt-2">Note: not limited to the following areas</p>
      </div>

      <Service />
      <HowItWorks />
    </div>
  );
};

export default Services;


