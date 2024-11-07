import CldImage from "@/components/ui/CldImage";

type ServiceCardProps = {
  heading?: string;
  headingHighlight?: string;
  highlightColor?: string;
  body?: string;
  imageName?: string;
};
export default function ServiceCard(props: ServiceCardProps) {
  const {
    heading = "Add a heading that describes your service",
    headingHighlight = "Add text to highlight",
    highlightColor = "Add a Tailwind color class e.g. text-secondary",
    body = "Add a description of your service that explains the value proposition to your customers",
    imageName,
  } = props;
  return (
    <div className="content-wrapper h-full relative">
      <div className="w-full bg-foreground text-background p-16 rounded-2xl relative h-full">
        <h3 className="capitalize">
          {heading} <span className={highlightColor}>{headingHighlight}</span>
        </h3>
        <p className="max-w-4xl mt-2">{body}</p>
      </div>
      {imageName && (
        <CldImage
          name={imageName}
          alt={imageName}
          size={160}
          imageClass="absolute top-[-10%] right-[-5%] md:top-[-20%] md:right-0"
        />
      )}
    </div>
  );
}
