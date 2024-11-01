"use client";
import React, { ReactNode } from "react";
import StepButton from "./StepButton";
import PaginationControls from "./PaginationControls";

interface LayoutProps {
    children: ReactNode;
    activeStep: number;
    setActiveStep: (step: number) => void;
    totalSteps: number;
}

export default function Layout({
    children,
    activeStep,
    setActiveStep,
    totalSteps,
}: LayoutProps) {

    const handleNext = (): void => {
        if (activeStep < totalSteps - 1) {
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

                {children}
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
