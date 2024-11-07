import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export type CldImageProps = {
  name: string;
  alt: string;
  size: number;
  imageClass?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
};
export default function CldImage(props: CldImageProps) {
  const { name, alt, size, objectFit = "contain", imageClass } = props;
  const objFit = objectFit;
  return (
    <Image
      src={`https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={twMerge(imageClass)}
      style={{
        objectFit: objFit,
      }}
    />
  );
}
