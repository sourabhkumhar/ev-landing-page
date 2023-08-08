import Image from "next/image";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import { useState } from "react";
import { diffColors } from "../values";

const Colors = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Section className="pb-10" id="colors">
      <SectionHeading text="Colors" sub="Checkout our products colors." />

      <div className="flex flex-col md:justify-center items-center md:flex-row gap-5 mt-10">
        <Image
          src={diffColors[selected]}
          alt={`Color ${selected}`}
          className="max-w-[400px] w-full"
          width={400}
        />

        <div className="flex flex-wrap h-fit my-auto justify-center gap-5">
          {diffColors.map((elem, ind) => {
            return (
              <div
                key={ind}
                className={`border-4 rounded-lg h-fit ${
                  selected === ind ? "border-[#71abe1]" : "border-transparent"
                }`}
              >
                <Image
                  src={elem}
                  width={100}
                  alt={"Image Color" + ind + 1}
                  onClick={() => selected !== ind && setSelected(ind)}
                  className="cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Colors;
