import About from "@/components/About/about";
import CallToAction from "@/components/CallToAction/callToAction";
import PortfolioHighlights from "@/components/PortfolioHighlight.tsx/portfolioHighlights";
import ServicesOverview from "@/components/Services/serviceOverview";
import Testimonial from "@/components/Testimonial/testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row h-[100vh] bg-blue-100">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 text-left p-4">
            {`The Space Sort, Toronto's premier professional organizing service,
          proudly offers in-person organizing solutions throughout the GTA.`}
          </h1>
          <Link href="/contact">
            <div className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300 text-center cursor-pointer">
              Contact Us
            </div>
          </Link>
        </div>

        <div className="relative h-full w-full md:w-1/2">
          <Image
            src="https://www5.lunapic.com/editor/working/172066042755601566?11626473280"
            alt="Transparent Example Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <About />
      <Testimonial />
      <ServicesOverview />
      <PortfolioHighlights />
      <CallToAction />
    </main>
  );
}
