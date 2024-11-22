import React from "react";
import { twMerge } from "tailwind-merge";
import FormWrapper from "../FormWrapper";
import { CircleCheck } from "lucide-react";

type UserBusinessData = {
  businessStage: string;
};

type BusinessStageProps = UserBusinessData & {
  updateFields: (fields: UserBusinessData) => void;
  onValidStep?: (isValid: boolean) => void;
};

export default function BusinessStage({
  businessStage,
  updateFields,
  onValidStep,
}: BusinessStageProps) {
  React.useEffect(() => {
    onValidStep?.(businessStage !== "");
  }, [businessStage, onValidStep]); // Run once on mount
  const handleChange = (value: string) => {
    updateFields({ businessStage: value });
    onValidStep?.(value !== "");
  };
  return (
    <FormWrapper title="Which stage is your business?">
      <div className="grid grid-cols-1 gap-4  md:grid-cols-3 md:gap-4">
        <label className="w-full">
          <input
            type="radio"
            value="starting"
            name="businessStage"
            onChange={(e) => handleChange(e.target.value)}
            className="hidden"
          />
          <div
            className={twMerge(
              "multistep-card_wrapper",
              businessStage === "starting" && "highlight"
            )}
          >
            <h5>Starting</h5>
            <p className="text-[16px] text-foreground/80">
              You&apos;ve just started your business and want to launch a
              campaign to drive initial growth.
            </p>
            <CircleCheck
              size={24}
              fill="#222222"
              stroke="hsl(var(--background))"
              className={`${
                businessStage === "starting"
                  ? "absolute top-[12px] right-[12px]"
                  : "hidden"
              }`}
            />
          </div>
        </label>
        <label className="">
          <input
            type="radio"
            value="growth"
            name="businessStage"
            onChange={(e) => handleChange(e.target.value)}
            className="hidden"
          />
          <div
            className={twMerge(
              "multistep-card_wrapper",
              businessStage === "growth" && "highlight"
            )}
          >
            <h5>Growth</h5>
            <p className="text-[16px] text-foreground/80">
              You&apos;re looking for more leads & sales to grow your team to
              grow out a specific service/s
            </p>
            <CircleCheck
              size={24}
              fill="#222222"
              stroke="hsl(var(--background))"
              className={`${
                businessStage === "growth"
                  ? "absolute top-[12px] right-[12px]"
                  : "hidden"
              }`}
            />
          </div>
        </label>
        <label className="">
          <input
            type="radio"
            value="Scale"
            name="businessStage"
            onChange={(e) => handleChange(e.target.value)}
            className="hidden"
          />
          <div
            className={twMerge(
              "multistep-card_wrapper",
              businessStage === "Scale" && "highlight"
            )}
          >
            <h5>Scale</h5>
            <p className="text-[16px] text-foreground/80">
              You&apos;re looking to grow multiple services for your company and
              launch multiple locations
            </p>
            <CircleCheck
              size={24}
              fill="#222222"
              stroke="hsl(var(--background))"
              className={`${
                businessStage === "Scale"
                  ? "absolute top-[12px] right-[12px]"
                  : "hidden"
              }`}
            />
          </div>
        </label>
      </div>
    </FormWrapper>
  );
}
