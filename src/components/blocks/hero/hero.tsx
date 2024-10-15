import ImageBlock from "@/components/ui/imageBlock";
import { CircleCheck } from "lucide-react";
import { ImageProps } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type HeroProps = {
  heading?: string;
  body?: React.ReactNode;
  bullets?: string[];
  button?: {
    link?: string;
    function?: () => void;
    text: string;
    className?: string;
  };
  image?: ImageProps;
  alignment: "left" | "right" | "center";
  textColor?: string;
};

export default function Hero({
  heading,
  body,
  bullets,
  button,
  image,
  alignment,
  textColor,
}: HeroProps) {
  return (
    <section className="section-padding-large">
      <div
        className={twMerge(
          "container-global md:grid  md:gap-24",
          alignment === "left"
            ? "md:grid-cols-2"
            : alignment === "right"
            ? "md:grid-cols-2"
            : alignment === "center"
            ? "grid-cols-1"
            : ""
        )}
      >
        <div
          className={twMerge(
            "flex flex-col gap-y-6",
            alignment === "left"
              ? "items-start text-left order-first "
              : alignment === "right"
              ? "items-start text-left order-last "
              : alignment === "center"
              ? "items-center text-center"
              : "",
            textColor
          )}
        >
          <h1 className="text-balance capitalize">
            {heading || "Hero heading goes here"}
          </h1>
          <p className="max-w-2xl">
            {body || "Body text to complement the heading goes here"}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="flex flex-col gap-2">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CircleCheck
                    strokeWidth={1.6}
                    className="flex-shrink-0 mt-[4px]"
                  />{" "}
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {button && (
            <Link href={button.link || "#"} className="main-button-wrapper">
              <button
                onClick={button.function}
                className={twMerge(
                  "px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold",
                  button.className
                )}
              >
                {button.text}
              </button>
            </Link>
          )}
        </div>
        <ImageBlock image={image ? image : null} />
      </div>
    </section>
  );
}
