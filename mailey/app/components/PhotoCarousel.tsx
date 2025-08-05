import React from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/carousel/senior1.jpg", alt: "Portfolio image 1" },
  { src: "/carousel/editorial1.jpg", alt: "Portfolio image 2" },
  { src: "/carousel/lifestyle1.jpg", alt: "Portfolio image 3" },
  { src: "/carousel/senior2.jpg", alt: "Portfolio image 4" },
  { src: "/carousel/editorial2.jpg", alt: "Portfolio image 5" },
  { src: "/carousel/lifestyle2.jpg", alt: "Portfolio image 6" },
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
