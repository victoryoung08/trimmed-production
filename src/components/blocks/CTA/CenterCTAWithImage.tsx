import { Button } from "@/components/ui/button";
import Image, { ImageProps } from "next/image";

type CenterCTAWithImageProps = {
  heading: string;
  body: string;
  button: {
    text: string;
    action?: () => void;
  };
  image: ImageProps;
};
export default function CenterCTAWithImage(props: CenterCTAWithImageProps) {
  const { heading, body, button, image } = props;
  return (
    <section className="section-padding-large bg-foreground text-background">
      <div className="flex flex-col gap-8">
        <div className="centered-wrapper gap-4 container-global text-center">
          <h2 className="capitalize">{heading}</h2>
          <p>{body}</p>
          <Button className="bg-primary">{button?.text}</Button>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={720}
          height={6400}
          className="w-full max-w-[800px] mx-auto"
        />
      </div>
    </section>
  );
}
