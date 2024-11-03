import Image, { ImageProps } from "next/image";
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
};

export default function Incentives({
  heading,
  body,
  button,
  image,
}: HeroProps) {
  return (
    <section className="section-padding-large xl:px-0">
      <div className="flex flex-col gap-y-6 xl:flex-row xl:items-center xl:px-0 px-12">
        <div className="flex flex-col gap-y-6">
          <div className="xl:relative xl:right-[-120px]">
            <h1 className="text-balance capitalize">
              {heading || "Hero heading goes here"}
            </h1>
            <p className="max-w-[454px] text-lg py-5">
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
        </div>
        <div className="md:max-w-[766px] w-full md:min-h-[550px] flex items-center rounded-lg xl:rounded-none xl:rounded-s-[96px] bg-white" >
          {image && (
            <div className="relative w-[527px] h-[229px] mx-auto">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          {!image && (
            <div className="relative w-[527px] h-[229px] mx-auto">
              <Image
                src={`https://picsum.photos/seed/${Math.floor(
                  Math.random() * 100
                )}/900/600.webp`}
                alt="placeholder"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
