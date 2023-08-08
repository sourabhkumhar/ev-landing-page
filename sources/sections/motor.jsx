import React from "react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import Image from "next/image";
import { motor } from "../assets/svg";

const Motor = () => {
  return (
    <Section>
      <SectionHeading
        text="High Efficient Motor"
        sub="More torque for powerful riding with 22% maximum hill climbing capability."
      />

      <div className="max-w-[800px] mx-auto">
        <Image src={motor} alt="" />
      </div>
    </Section>
  );
};

export default Motor;
