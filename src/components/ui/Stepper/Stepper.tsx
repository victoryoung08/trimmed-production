"use client";
import React from "react";
import Layout from "./Layout";
import BusinessArt from "./StepContents/BusinessArt";
import MarketingAuditQuote, { FormData } from "./StepContents/MarketingAuditQuote";
import ServiceSelection, { list } from "./StepContents/ServiceSelection";
import AdsCampain from "./StepContents/AdsCampain";
import MarketingOperation from "./StepContents/MarketingOperation";
import FractionalStrategise from "./StepContents/FractionalStrategise";

export interface StepDataTypes {
  businessArtData?: number;
  serviceSelectionName?: number;
  serviceSelectionValue?: string;
  marketingAuditQuoteData?: FormData
}

export default function Stepper() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [serviceDropDown, setServiceDropDown] = React.useState<number | null>(0);
  const [stepData, setStepData] = React.useState<StepDataTypes>({});

  const handleStepData = (key: keyof StepDataTypes, data: unknown) => {

    setStepData((prevData) => {
      const newData = {
        [key]: data,
      };
      return {
        ...prevData,
        ...newData,
      };
    });
  };

  const handleServiceSelection = (selection: number) => {
    setServiceDropDown(selection);
    setStepData((prevData) => ({ ...prevData, serviceSelectionName: selection }));
    setActiveStep((prevStep) => (prevStep + 1 < steps.length ? prevStep + 1 : prevStep));
  };

  const steps = [
    {
      id: 1,
      content: <BusinessArt onNext={(data) => handleStepData('businessArtData', data)} selected={stepData.businessArtData} />
    },
    {
      id: 2,
      content: <ServiceSelection setServiceDropDown={handleServiceSelection} selected={stepData.serviceSelectionName} />
    },
    {
      id: 3,
      content:
        serviceDropDown === 0 ? <AdsCampain onNext={(data) => handleStepData('serviceSelectionValue', data)} selected={stepData.serviceSelectionValue} /> :
          serviceDropDown === 1 ? <MarketingOperation onNext={(data) => handleStepData('serviceSelectionValue', data)} selected={stepData.serviceSelectionValue} /> :
            serviceDropDown === 2 ? <FractionalStrategise onNext={(data) => handleStepData('serviceSelectionValue', data)} selected={stepData.serviceSelectionValue} /> :
              null,
    },
    {
      id: 4,
      content: <MarketingAuditQuote onNext={(data) => handleStepData('marketingAuditQuoteData', data)} selected={stepData.marketingAuditQuoteData || { name: '', phone: '', email: '', website: '' }} />
    }
  ];

  function isAllFilled(data: StepDataTypes | FormData | null | undefined): boolean {
    if (data && typeof data === 'object') {
      return Object.values(data).every(value => {
        return typeof value === 'object' ? isAllFilled(value) : value !== null && value !== undefined && value !== '';
      });
    }
    return false;
  }

  const business = ["New Business", "Growth", "Scale"];

  const handleSubmit = async (data: StepDataTypes) => {
    const { marketingAuditQuoteData } = data;
    if (isAllFilled(data) && isAllFilled(marketingAuditQuoteData)) {
      const formBody = {
        businessName: data?.businessArtData !== undefined && data.businessArtData in business
          ? business[data.businessArtData] : '',
        selectedServiceName: data?.serviceSelectionName !== undefined && data.serviceSelectionName in list ? list[data?.serviceSelectionName] : '',
        selectedServiceValue: data?.serviceSelectionValue ?? '',
        marketingAuditQuoteData: data?.marketingAuditQuoteData || {}
      };

      console.log(formBody);
      // const apiRoute = "";

      // try {
      //   const res = await fetch(`${apiRoute}`, {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formBody),
      //   });
      //   const data = await res.json();
      //   return data;
      // } catch (err) {
      //   console.log(
      //     `Something went wrong with accessing the api route, ${apiRoute}`,
      //     err
      //   );
      // }
    } else {
      console.log("Some data is missing:", data);
    }
  };


  return (
    <Layout
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      totalSteps={steps.length}
      handleSubmit={handleSubmit}
      data={stepData}
    >
      {steps[activeStep].content}
    </Layout>
  );
}
