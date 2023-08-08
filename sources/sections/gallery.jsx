import React from "react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import { galleryImages } from "../values";
import Image from "next/image";

const Gallery = () => {
  return (
    <Section id="gallery">
      <SectionHeading
        text="Gallery"
        sub="View gallery of our products and make yourself satisfied with our creation."
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10 ">
        {galleryImages.map((elem, ind) => {
          return (
            <Image
              src={elem}
              key={ind}
              alt=""
              className="w-full h-full"
              width={300}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Gallery;
