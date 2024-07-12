import { testimonialData } from "@/DummyData/Data";
import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-8 bg-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6">
        What Our Clients Say
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonialData.map(({ id, name, image, review, rating }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center gap-4 relative bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <Image
                src={image}
                alt={`Image of ${name}`}
                className="rounded-full"
                width={80}
                height={80}
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <span className="italic">{review}</span>
              <h1 className="font-bold">{name}</h1>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < rating ? "#F7B731" : "#E0E0E0"}
                    size={15}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center absolute top-0 left-4 h-8 w-8 bg-orange-400 rounded-full">
              <FaQuoteRight color="#fff" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
