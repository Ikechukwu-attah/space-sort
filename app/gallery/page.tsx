"use client";

import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const galleryImages = [
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
  {
    src: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail:
      "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 1200,
    height: 800,
    title: "Image 4 Description",
  },
  {
    src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail:
      "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 1200,
    height: 800,
    title: "Image 5 Description",
  },
  {
    src: "https://images.pexels.com/photos/3263719/pexels-photo-3263719.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail:
      "https://images.pexels.com/photos/3263719/pexels-photo-3263719.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 1200,
    height: 800,
    title: "Image 6 Description",
  },
  {
    src: "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1200",
    thumbnail:
      "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 1200,
    height: 800,
    title: "Image 7 Description",
  },
  {
    src: "https://images.pexels.com/photos/3773579/pexels-photo-3773579.png?auto=compress&cs=tinysrgb&w=1200",
    thumbnail:
      "https://images.pexels.com/photos/3773579/pexels-photo-3773579.png?auto=compress&cs=tinysrgb&w=600",
    width: 1200,
    height: 800,
    title: "Image 8 Description",
  },
];

const PhotoSwipeGallery = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sample</h1>
      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Item
              key={index}
              original={image.src}
              thumbnail={image.thumbnail}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <div ref={ref} onClick={open} className="cursor-pointer">
                  <Image
                    src={image.thumbnail}
                    alt={image.title}
                    width={image.width / 2}
                    height={image.height / 2}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="mt-2 text-center text-sm text-gray-600">
                    {image.title}
                  </div>
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </div>
  );
};

export default PhotoSwipeGallery;
