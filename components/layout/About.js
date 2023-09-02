import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="flex justify-between w-full py-[8rem] items-center">
      <div className="flex items-center justify-center flex-1">
        <Image
          height={375}
          width={563}
          alt="Image"
          src={"/images/co-working.png"}
        />
      </div>
      <div className="flex flex-1 flex-col gap-[3rem] ">
        <h2 className="text-h2">
          Your team of <br /> specialists
        </h2>
        <p className="text-base text-white-125">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="w-fit">
          <Button variant="outline">More about us</Button>
        </div>
      </div>
    </div>
  );
}
