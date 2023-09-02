import React from "react";
import ImgCard from "../ImgCard";

export default function Projects() {
  return (
    <div className="py-[8rem] w-full gap-[3rem] flex flex-col justify-between items-center">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-h2">Latest Projects</h2>
        <p className="px-[1.6rem] py-[2.5rem] flex items-center justify-center">
          Sell all projects
        </p>
      </div>
      <div className="w-full justify-center items-center h-full flex gap-[3rem]">
        <ImgCard
          src={"/images/car.png"}
          alt={"Image"}
          title={"Automotive UI Design"}
        />
        <ImgCard
          src={"/images/google-home.png"}
          alt={"Image"}
          title={"Automotive UI Design"}
        />
        <ImgCard
          src={"/images/car.png"}
          alt={"Image"}
          title={"Automotive UI Design"}
        />
      </div>
    </div>
  );
}
