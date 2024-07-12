import Link from "next/link";
import { servicesData } from "@/DummyData/Data";

const ServicesOverview = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-white w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-center mb-4">{service.description}</p>

            <Link
              href="/services"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
