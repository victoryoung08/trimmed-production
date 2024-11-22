import { ReactElement, useState } from "react";
// Custom hook useMultistepForm takes in an array of steps
export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    // Take currentStepIndex (i) and move to the next index position
    setCurrentStepIndex((i) => {
      // Conditional if i is already at the end of steps

      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    // Returns the current step index
    currentStepIndex,
    // Returns the active step based on the current step index
    activeStep: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
