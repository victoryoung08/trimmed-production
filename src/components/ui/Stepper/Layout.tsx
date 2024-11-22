"use client";
import React, { ReactNode } from "react";
import StepButton from "./StepButton";
import PaginationControls from "./PaginationControls";
import { StepDataTypes } from "./Stepper";

interface HandleSubmitFunction {
    (stepData: StepDataTypes): Promise<void>;
}

interface LayoutProps {
    children: ReactNode;
    activeStep: number;
    setActiveStep: (step: number) => void;
    totalSteps: number;
    handleSubmit: HandleSubmitFunction;
    data:StepDataTypes
}

export default function Layout({
    children,
    activeStep,
    setActiveStep,
    totalSteps,
    data,
    handleSubmit
}: LayoutProps) {

    const handleNext = async (): Promise<void> => {
        if (activeStep === totalSteps - 1) {
            await handleSubmit(data);
        } else if (activeStep < totalSteps - 1) {
            setActiveStep(activeStep + 1);
        }
    };
    const handleBack = (): void => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div className="text-center mx-auto max-w-4xl bg-background">
            <div className="content-wrapper center">
                <div className="flex gap-4 items-center justify-center mb-10">
                    {[...Array(totalSteps)].map((_, index) => (
                        <StepButton
                            key={index}
                            isActive={index === activeStep}
                            onClick={() => setActiveStep(index)}
                        />
                    ))}
                </div>
                <div className="min-h-[180px]">
                    {children}
                </div>
                <PaginationControls
                    activeStep={activeStep}
                    totalSteps={totalSteps}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            </div>
        </div>
    );
}
