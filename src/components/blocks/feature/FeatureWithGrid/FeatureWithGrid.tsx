import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CldImage, { CldImageProps } from "@/components/ui/CldImage";

type FeatureWithGridProps = {
  heading?: string;
  body?: string;
  button?: {
    text: string;
    link?: string;
  };
  imageGrid?: CldImageProps[];
  id?: string;
};
export default function FeatureWithGrid(props: FeatureWithGridProps) {
  const {
    heading = "Default Heading",
    body = "Default body text goes here",
    button = {
      text: "Click Here",
      link: "#",
    },
    imageGrid,
    id,
  } = props;
  return (
    <section
      className="section-padding-large dark bg-background text-foreground"
      id={id}
    >
      <div className="flex flex-col gap-8">
        <div className="centered-wrapper gap-4 container-global text-center">
          <h2 className="capitalize">{heading}</h2>
          <p>{body}</p>
          <Button>{button?.text}</Button>
        </div>
        <Carousel
          className="w-full mx-auto"
          opts={{ startIndex: 1, loop: true }}
        >
          <CarouselContent className="-ml-1">
            {imageGrid?.map((image) => (
              <CarouselItem
                key={image.alt}
                className="relative h-fit basis-[40%]"
              >
                <CldImage
                  name={image.name}
                  alt={image.alt}
                  imageClass={image.imageClass}
                  size={image.size}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
