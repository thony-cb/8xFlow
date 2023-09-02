import React from "react";
import {
  BEIcon,
  DribbleIcon,
  FacebookIcon,
  InstaIcon,
  TwitterIcon,
} from "../ui/icons";

export default function Footer() {
  return (
    <div className="flex py-[8rem] justify-between w-full ">
      <div className="flex flex-col items-start w-full max-w-sm gap-10 mr-32">
        <h6 className="text-h6">Your Webflow partner</h6>
        <p className="text-base">
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-green-100 rounded-full">
            <DribbleIcon />
          </div>
          <div className="p-2 bg-green-100 rounded-full">
            <InstaIcon />
          </div>
          <div className="p-2 bg-green-100 rounded-full">
            <BEIcon />
          </div>
          <div className="p-2 bg-green-100 rounded-full">
            <TwitterIcon />
          </div>
          <div className="p-2 bg-green-100 rounded-full">
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start w-full max-w-lg gap-5">
            <p className="text-large-base">About us</p>
            <p className="text-base">Team</p>
            <p className="text-base">Mission</p>
            <p className="text-base">Network</p>
          </div>
          <div className="flex flex-col items-start w-full max-w-lg gap-5">
            <p className="text-large-base">About us</p>
            <p className="text-base">Team</p>
            <p className="text-base">Mission</p>
            <p className="text-base">Network</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start w-full max-w-lg gap-5">
            <p className="text-large-base">About us</p>
            <p className="text-base">Team</p>
            <p className="text-base">Mission</p>
            <p className="text-base">Network</p>
          </div>
          <div className="flex flex-col items-start w-full max-w-lg gap-5">
            <p className="text-large-base">About us</p>
            <p className="text-base">Team</p>
            <p className="text-base">Mission</p>
            <p className="text-base">Network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
