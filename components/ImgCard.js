import Image from "next/image";
import React from "react";

export default function ImgCard({ title, alt, src }) {
  return (
    <div className="flex flex-col gap-4 h-fit">
      <Image alt={alt} height={476} width={392} src={src} />
      <p className="text-h6 text-white-100">{title}</p>
    </div>
  );
}
