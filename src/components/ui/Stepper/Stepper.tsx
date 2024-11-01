"use client"
import React from "react";
import Layout from "./Layout";
import BusinessArt from "./StepContents/BusinessArt";
import MarketingAuditQuote from "./StepContents/MarketingAuditQuote";
import ServiceSelection from "./StepContents/ServiceSelection";
import AdsCampain from "./StepContents/AdsCampain";
import MarketingOperation from "./StepContents/MarketingOperation";
import FractionalStrategise from "./StepContents/FractionalStrategise";

export default function Stepper() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [serviceDropDown, setServiceDropDown] = React.useState<number | null>(2);

  const steps = [
    {
      id: 1,
      content: <BusinessArt />
    },
    {
      id: 2,
      content: <ServiceSelection setServiceDropDown={setServiceDropDown} />
    },
    {
      id: 3,
      content:
        serviceDropDown === 0 ? <AdsCampain /> :
          serviceDropDown === 1 ? <MarketingOperation /> :
            serviceDropDown === 2 ? <FractionalStrategise /> :
              null,
    },
    {
      id: 4,
      content: <MarketingAuditQuote />
    }
  ]
  return (
    <Layout
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      totalSteps={steps.length}
    >
      {steps[activeStep].content}
    </Layout>
  );
}
