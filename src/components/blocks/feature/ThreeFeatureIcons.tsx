import Image from "next/image";

type ThreeStepFeatureProps = {
  heading: string;
  body: string;
  steps?: {
    step: string;
    heading: string;
    body: string;
    image?: {
      fileName: string;
      alt: string;
    };
  }[];
};

export default function ThreeStepFeature(props: ThreeStepFeatureProps) {
  const { heading, body, steps } = props;
  return (
    <section className="">
      <section className="section-padding-medium dark bg-background text-foreground">
        <div className="container-global">
          <div className="flex flex-col items-center gap-4">
            <h3>{heading}</h3>
            <p>{body}</p>
          </div>
          {steps && (
            <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <div
                  key={step.heading}
                  className="flex flex-col gap-2 px-4 items-center text-center"
                >
                  {/* <div className="px-4 py-1 border-[0.2px] w-fit rounded-xl border-foreground">
                    Step {step.step}
                  </div> */}
                  <div className="relative w-[80px] aspect-square">
                    <Image
                      src={`https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/${step?.image?.fileName}.png`}
                      alt={step?.image?.alt || ""}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <h5 className="capitalize">{step.heading}</h5>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
