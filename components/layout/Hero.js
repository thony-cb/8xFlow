import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between gap-[1.5rem] items-center py-[8rem]">
      <p className="text-base text-green-100">Webflow Agency</p>
      <h1 className="text-display">Your Webflow partner</h1>
      <p className="max-w-lg text-base leading-snug text-center text-white-125 ">
        We design and develop handcrafted websites for amazing companies who
        want to win the digital game. <br /> [
        <span className="text-xs italic">
          Tailwind speed run re-build 45 mins
        </span>
        ]
      </p>
      <div className="flex w-fit">
        <Button>Let's get in touch</Button>
      </div>
    </div>
  );
}
