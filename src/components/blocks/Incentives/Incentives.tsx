import ImageBlock from "@/components/ui/imageBlock";
import { ImageProps } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type HeroProps = {
  heading?: string;
  body?: React.ReactNode;
  button?: {
    link?: string;
    function?: () => void;
    text: string;
    className?: string;
  };
  image?: ImageProps;
  alignment?: "left" | "right";
  textColor?: string;
};

export default function Incentives({
  heading,
  body,
  button,
  image,
  alignment="left",
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
