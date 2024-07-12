import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-white w-full">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/cover2.png"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-lg mb-4">
              We are passionate about helping you create organized, functional,
              and beautiful spaces. With years of experience in professional
              organizing, we are dedicated to providing top-notch service
              tailored to your needs.
            </p>
            <p className="text-lg mb-4">
              Our mission is to bring clarity and order to your living and
              working environments, enhancing your overall quality of life. We
              believe that a well-organized space leads to a more productive and
              stress-free lifestyle.
            </p>
            <p className="text-lg mb-4">
              We value integrity, attention to detail, and a personalized
              approach. Our team is committed to working closely with you to
              understand your unique needs and deliver solutions that exceed
              your expectations.
            </p>
            <Link
              href="/contact"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
