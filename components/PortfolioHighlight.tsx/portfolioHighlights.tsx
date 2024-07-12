import Link from "next/link";
import Image from "next/image";

const PortfolioHighlights = () => {
  const highlights = [
    {
      src: "https://images.pexels.com/photos/272802/pexels-photo-272802.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/272802/pexels-photo-272802.jpeg?auto=compress&cs=tinysrgb&w=600",
      width: 1200,
      height: 800,
      title: "Image 1 Description",
    },
    {
      src: "https://images.pexels.com/photos/1248582/pexels-photo-1248582.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/1248582/pexels-photo-1248582.jpeg?auto=compress&cs=tinysrgb&w=600",
      width: 1200,
      height: 800,
      title: "Image 2 Description",
    },
    {
      src: "https://images.pexels.com/photos/6296918/pexels-photo-6296918.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/6296918/pexels-photo-6296918.jpeg?auto=compress&cs=tinysrgb&w=600",
      width: 1200,
      height: 800,
      title: "Image 3 Description",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 bg-gray-50 w-full">
      <h2 className="text-2xl font-bold mb-6">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {highlights.map((image, index) => (
          <Link href="/gallery" key={index}>
            <div className="relative h-64 w-full cursor-pointer">
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image.thumbnail}
                  alt={image.title}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  style={{ color: "transparent" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                  {image.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery">
        <div className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300 text-center cursor-pointer">
          View More
        </div>
      </Link>
    </section>
  );
};

export default PortfolioHighlights;
