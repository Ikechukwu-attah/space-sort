import { servicesData } from "@/DummyData/Data";

const Service = () => {
  return (
    <div className="">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col items-center justify-center gap-2 text-center bg-blue-100 rounded-md p-4 shadow">
                      <h2 className="text-xl font-semibold ">{service.title}</h2>
                      <p className="text-center text-sm">{service.description}</p>
                   {service.data && (
              <p>({service.data.join(', ')})</p>
            )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
