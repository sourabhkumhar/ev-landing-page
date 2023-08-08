import React from "react";
import SectionHeading from "../components/UI/SectionHeading";
import Section from "../components/UI/Section";
import Image from "next/image";
import { scooter02 } from "../assets/svg";
import { MdElectricBike } from "react-icons/md";
import { info } from "../values";

const ProductInfo = () => {
  return (
    <Section id="products">
      <SectionHeading
        text="Product Information"
        sub="Our Scooter has following unique design and technology features:"
      />

      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <Image src={scooter02} alt="Scooter 2" className="max-h-[500px]" />

        <div className="flex flex-col gap-3 p-5">
          {info.map((elem, ind) => {
            return (
              <div key={ind} className="flex items-center gap-3">
                <MdElectricBike size={30} />
                {elem}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ProductInfo;
