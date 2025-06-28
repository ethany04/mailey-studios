import React from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/about/senior1.jpg", alt: "Portfolio image 1" },
  { src: "/about/editorial1.jpg", alt: "Portfolio image 2" },
  { src: "/about/lifestyle1.jpg", alt: "Portfolio image 3" },
  { src: "/about/senior2.jpg", alt: "Portfolio image 4" },
  { src: "/about/editorial2.jpg", alt: "Portfolio image 5" },
  { src: "/about/lifestyle2.jpg", alt: "Portfolio image 6" },
];

const PhotoCarousel = () => {
  return (
    <>
      {/* Gallery Carousel Section */}
      <section className="relative z-10 w-full h-96 overflow-hidden">
        {/* Scrolling Images */}
        <div className="absolute inset-0 flex">
          <div className="flex scroll-animation">
            {/* Duplicate the images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div key={index} className="relative h-96 w-80 flex-shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoCarousel;
