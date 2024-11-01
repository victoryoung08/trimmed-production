import React from "react";

interface PaginationControlsProps {
    activeStep: number;
    totalSteps: number;
    onNext: () => void;
    onBack: () => void;
}

export default function PaginationControls({
    activeStep,
    totalSteps,
    onNext,
    onBack,
}: PaginationControlsProps) {
    return (
        <div className="flex gap-4 items-center justify-center mt-10">
            {activeStep > 0 && (
                <button
                    className="py-2 px-8 rounded-full bg-white text-black text-sm font-medium"
                    type="button"
                    onClick={onBack}
                >
                    Back
                </button>
            )}
            <button
                className="py-2 px-8 rounded-full bg-primary text-white text-sm font-medium"
                type="button"
                onClick={onNext}
                disabled={activeStep === totalSteps - 1}
            >
                Next
            </button>
        </div>
    );
}
