"use client";
import { FormEvent, useState } from "react";
import BusinessStage from "./Forms/BusinessStage";
import ContactForm from "./Forms/ContactForm";
import { useMultistepForm } from "./useMultistepForm";
import GetStarted from "./Forms/GetStarted";
import { Button } from "../button";
import MarketingAreas from "./Forms/MarketingArea";
import { useRouter } from "next/navigation";

type MultistepFormProps = {
  name: string;
  phone: string;
  email: string;
  adBudget?: string;
  businessStage: string;
  marketingAreas: string;
};

export default function MultistepForm() {
  const initialData = {
    name: "",
    phone: "",
    email: "",
    adBudget: "",
    businessStage: "",
    marketingAreas: "",
  };
  const [data, setData] = useState(initialData);
  const [validStep, setValidStep] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { activeStep, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <GetStarted key="get-started" />,
    <BusinessStage
      key="business-stage"
      {...data}
      updateFields={updateFields}
      onValidStep={setValidStep}
    />,
    <MarketingAreas
      key="marketing-areas"
      {...data}
      updateFields={updateFields}
      onValidStep={setValidStep}
    />,
    <ContactForm key="contact-form" {...data} updateFields={updateFields} />,
    // <AddBudget {...data} updateFields={updateFields} />,
  ]);

  function updateFields(fields: Partial<MultistepFormProps>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validStep) {
      return;
    }
    if (!isLastStep) next();
    if (isLastStep) {
      setIsLoading(true);
      try {
        await sendToCRM(data);
        router.push("/thank-you");
      } catch (error) {
        // Handle error (e.g., show error message)
        console.error("Failed to submit form:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function sendToCRM(formData: MultistepFormProps) {
    const res = await fetch("/api/crm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  }
  return (
    <section className="bg-foreground text-background py-12 md:py-20 px-4">
      {/* {JSON.stringify(data)} */}
      <div className="py-12 container-global bg-background text-foreground rounded-2xl">
        {/* <div>{JSON.stringify(data)}</div> */}
        <form action="" onSubmit={onSubmit}>
          <div className="w-full relative flex flex-col items-center justify-between">
            {/* <div className="absolute top-[24px] right-[24px]">
            {currentStepIndex + 1} / {steps.length}
            </div> */}
            <div className="w-full flex items-center justify-center">
              {activeStep}
            </div>
            <div className="flex items-center gap-2 justify-between">
              {!isFirstStep && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={back}
                  disabled={isLoading}
                >
                  Back
                </Button>
              )}
              {!isFirstStep && (
                <Button type="submit" disabled={isLoading}>
                  {isLastStep
                    ? isLoading
                      ? "Submitting..."
                      : "Submit"
                    : "Next"}
                </Button>
              )}
              {isFirstStep && <Button type="submit">Get Started</Button>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
