import React from "react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import { testimonialsList } from "../values";
import Rating from "../components/UI/Rating";
import Image from "next/image";

const Card = ({ data, index }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-between hover:bg-white p-5 hover:shadow-xl border-2 border-gray-400 hover:border-transparent duration-300 max-w-[300px] rounded-md">
      <div>
        <Rating stars={data.rating} />
        <div className="text-sm mt-3 text-center">{data.message}</div>
      </div>

      <div className="flex items-center gap-2">
        <Image src={data.image} alt="" width={50} height={50} />
        <div>
          <div className="text-sm font-bold">{data.name}</div>
          <div className="text-[12px]">{data.designation}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Section className="bg-[#eaeaea] pb-10" id="review">
      <SectionHeading text="Testimonials" />

      <div className="flex justify-center flex-wrap gap-5 mt-5">
        {testimonialsList.map((elem, ind) => {
          return <Card data={elem} key={ind} index={ind} />;
        })}
      </div>
    </Section>
  );
};

export default Testimonials;
