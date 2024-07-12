import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-blue-500 w-full text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Ready to Get Started?
      </h2>
      <p className="mb-6 text-center max-w-xl">
        Contact us today to arrange your complimentary consultation and take the
        first step towards a more organized, stress-free life. We look forward
        to helping you create the space you deserve.
      </p>
      <Link href="/contact">
        <div className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg text-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
          Contact Us
        </div>
      </Link>
    </section>
  );
};

export default CallToAction;
