import React from "react";
import IconCard from "../IconCard";
import { Button } from "../ui/button";

export default function WhyUs() {
  return (
    <div className="py-[8rem] flex gap-[4rem] flex-col justify-center  items-center w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-h2 ">
          Why you should <br /> work with us
        </h2>
        <p className="max-w-md text-base text-white-125">
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </p>
      </div>
      <div className="flex gap-[7.5rem] items-center h-fit">
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
      </div>
      <div className="flex gap-[7.5rem] items-center h-fit">
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
        <IconCard
          title={"Euismod Consectetur"}
          content={
            "Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          }
        />
      </div>
      <div className="flex w-fit">
        <Button>Let's get in touch</Button>
      </div>
    </div>
  );
}
