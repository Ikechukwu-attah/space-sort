import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 text-center p-4">
        The Space Sort, Toronto premier professional organizing service, proudly
        offers in-person organizing solutions throughout the GTA.
      </h1>
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="Example Image"
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
