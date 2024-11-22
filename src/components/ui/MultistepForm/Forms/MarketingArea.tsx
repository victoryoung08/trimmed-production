import React from "react";
import { twMerge } from "tailwind-merge";
import FormWrapper from "../FormWrapper";
import { CircleCheck } from "lucide-react";

type MarketingAreasData = {
  marketingAreas: string;
};

type MarketingAreasProps = MarketingAreasData & {
  updateFields: (fields: MarketingAreasData) => void;
  onValidStep?: (isValid: boolean) => void;
};

export default function MarketingAreas({
  marketingAreas,
  updateFields,
}: // onValidStep,
MarketingAreasProps) {
  function handleChange(value: string) {
    updateFields({ marketingAreas: value });
  }

  const fields = [
    {
      value: "ppc",
      heading: "Paid Ads",
      body: "You're looking to run paid ads to generate leads for your business. Landing page, ad creative or Google/Meta Ads management.",
    },
    {
      value: "marketing-ops",
      heading: "Marketing Operations",
      body: "You're looking for someone or a team to implement, build and rollout marketing campaigns. Think building funnels, setting up email flows and running your daily marketing operations",
    },
    {
      value: "marketing-strategy",
      heading: "Marketing Strategy",
      body: "You're looking for help with knowing what to do while you focus on other areas of the business.",
    },
  ];

  return (
    <FormWrapper title="What area of marketing do you need help with?">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 ">
        {fields.map((field) => (
          <label className="w-full" key={field.value}>
            <input
              type="radio"
              value={field.value}
              name="marketingAreas"
              onChange={(e) => handleChange(e.target.value)}
              className="hidden"
            />
            <div
              className={twMerge(
                "multistep-card_wrapper h-full",
                marketingAreas === field.value && "highlight"
              )}
            >
              <h5 className="text-[24px]">{field.heading}</h5>
              <p className="text-[16px] text-pretty">{field.body}</p>
              <CircleCheck
                size={24}
                fill="#222222"
                stroke="hsl(var(--background))"
                className={`${
                  marketingAreas === field.value
                    ? "absolute top-[12px] right-[12px]"
                    : "hidden"
                }`}
              />
            </div>
          </label>
        ))}
      </div>
    </FormWrapper>
  );
}
