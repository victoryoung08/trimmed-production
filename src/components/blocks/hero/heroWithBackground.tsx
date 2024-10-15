import { CircleCheck } from "lucide-react";
import { ImageProps } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type HeroWithBackgroundProps = {
  heading: string;
  body: string;
  bullets?: string[];
  button: {
    link?: string;
    function?: () => void;
    text: string;
    className?: string;
  };
  image?: ImageProps;
  alignment: "left" | "right" | "center";
  textColor?: string;
};

export default function HeroWithBackground({
  heading,
  body,
  bullets,
  button,
  alignment,
  textColor,
}: HeroWithBackgroundProps) {
  const backgroundImage =
    "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const textColorClass = textColor;
  return (
    <section
      className="section-padding-medium"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <div
        className={twMerge(
          "container-global mx-auto px-4 py-20 md:grid  md:gap-12",
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
            "flex flex-col gap-y-6 text-white",
            alignment === "left"
              ? "items-start text-left order-first"
              : alignment === "right"
              ? "items-start text-left order-last"
              : alignment === "center"
              ? "items-center text-center"
              : "",
            textColorClass
          )}
        >
          <h1 className={twMerge()}>{heading || "Hero heading goes here"}</h1>
          <p className={twMerge()}>
            {body || "Body text to complement the heading goes here"}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className={twMerge("flex flex-col gap-2")}>
              {bullets.map((bullet, index) => (
                <li key={index} className={twMerge("flex items-start gap-2")}>
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
      </div>
    </section>
  );
}
