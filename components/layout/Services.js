import React from "react";
import Card from "../Card";

export default function Services() {
  return (
    <div className="flex flex-col w-full gap-[3rem] py-[8rem] items-center">
      <h2 className="text-h2">Our services</h2>
      <div className="flex items-center justify-center gap-[1.5rem] w-full">
        <Card
          title={"Discover"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing  eros elementum tristique."
          }
        />
        <Card
          title={"Design"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing  eros elementum tristique."
          }
        />
        <Card
          title={"Develop"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing  eros elementum tristique."
          }
        />
      </div>
    </div>
  );
}
