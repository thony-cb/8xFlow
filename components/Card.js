import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Card({ title, content }) {
  return (
    <div className="flex bg-black-50  p-[2rem] rounded-[1rem] flex-col max-w-[24.5rem] justify-between  flex-1">
      <h4 className="text-h4 pb-[2rem]">{title}</h4>
      <p className="text-body text-white-125">{content}</p>
      <div className="flex justify-end w-full">
        <ArrowTopRightIcon className="text-green-100 rotate-90 w-7 h-7" />
      </div>
    </div>
  );
}
