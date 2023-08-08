import Image from "next/image";
import React from "react";
import Divider from "../components/UI/Divider";
import { scooter01 } from "../assets/svg";
import { keyFeatures } from "../values";
import Section from "../components/UI/Section";

const Front = () => {
  return (
    <Section id="front">
      <div className="flex md:flex-row flex-col-reverse  md:justify-between justify-end">
        <div className="md:pl-10 pl-5 flex flex-col gap-10 pt-10">
          <div className="">
            <div className="lg:text-7xl whitespace-nowrap sm:text-6xl text-5xl tracking-wide font-[300]">
              {"LET'S RIDE"}
            </div>
            <div className="lg:text-7xl whitespace-nowrap sm:text-6xl text-5xl tracking-wide font-[700]">
              THE FUTURE.
            </div>
          </div>

          <Divider maxWidth={200} />

          <span>Simple and sleek design with users in mind.</span>

          <div className="flex items-center gap-3">
            <button className="bg-dark text-white p-3 rounded-md hover:bg-[#2d2d2d] duration-300 min-w-[100px]">
              Buy Now
            </button>
            <button className="bg-dark text-white p-3 rounded-md hover:bg-[#2d2d2d] duration-300 min-w-[100px]">
              Explore
            </button>
          </div>
        </div>

        <div>
          <Image src={scooter01} alt="Scooter 01" className="" />
        </div>
      </div>

      <div className="my-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
        {keyFeatures.map((elem, index) => {
          return (
            <div
              key={index}
              className="w-[150px] h-[100px] drop-shadow-lg duration-300 bg-white flex flex-col items-center justify-center gap-1 rounded-lg hover:scale-110"
            >
              <div className="font-bold text-center flex items-baseline gap-1">
                <span className="text-3xl">{elem.value}</span>
                <span>{elem.units}</span>
              </div>
              <div className="text-[12px]">{elem.label}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Front;
