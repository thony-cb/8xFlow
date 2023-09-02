import React from "react";

export default function IconCard({ title, content }) {
  return (
    <div className="flex  gap-3 items-start  flex-col max-w-[24.5rem] justify-between  flex-1">
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <g clip-path="url(#clip0_2_171)">
            <path
              d="M36.4653 16.0002C35.4692 7.0002 27.8475 0 18.5823 0C8.64091 0 0.582275 8.05863 0.582275 18C0.582275 27.2652 7.58247 34.887 16.5825 35.883V48H48.5823V16.0002H36.4653ZM16.5825 31.8396C9.80903 30.8652 4.58247 25.0386 4.58247 18C4.58247 10.2792 10.8638 4.0002 18.5823 4.0002C25.6209 4.0002 31.4475 9.22676 32.4219 16.0002H16.5825V31.8396ZM32.4219 19.9998C31.5411 26.1168 26.699 30.9594 20.5821 31.8396V19.9998H32.4219ZM44.5821 43.9998H20.5821V35.883C28.9238 34.959 35.5413 28.3423 36.4653 19.9998H44.5821V43.9998Z"
              fill="#DBF40C"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_171">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(0.582031)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h4 className="text-h4 text-white-100">{title}</h4>
      <p className="text-base text-white-125">{content}</p>
    </div>
  );
}
