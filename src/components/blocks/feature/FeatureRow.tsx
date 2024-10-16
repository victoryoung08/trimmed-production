import Image from "next/image";
import { twMerge } from "tailwind-merge";

type FeatureRowProps = {
  heading: string;
  button?: {
    text: string;
    action?: () => void;
  };
  image: {
    fileName: string;
    alt: string;
    class?: string;
  };
  alignment?: "left" | "right";
  children?: React.ReactNode;
};

export default function FeatureRow(props: FeatureRowProps) {
  const { heading, button, image, children, alignment } = props;
  return (
    <section className="section-padding-medium container-global">
      <div className=" flex flex-col md:flex-row md:gap-12">
        <div
          className={twMerge(
            "flex flex-col gap-8 w-full justify-center",
            alignment === "left" && "order-last md:order-first",
            alignment === "right" && "order-last md:order-last"
          )}
        >
          <h2 className="text-balance">{heading}</h2>
          {children}
          {button && (
            <button className="main-button dark w-full md:w-fit">
              {button.text}
            </button>
          )}
        </div>
        <div className="w-full max-w-[80%] mx-auto md:max-w-[480px] aspect-square flex items-center justify-center">
          <div className="relative :w-full h-fit flex items-center justify-center">
            <Image
              src={`https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/${image.fileName}.png`}
              alt={image.alt}
              width={600}
              height={600}
              className={twMerge("max-w-[300px] md:max-w-[400px]", image.class)}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
