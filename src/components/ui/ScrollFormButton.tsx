"use client";
import { Button } from "./button";

type ScrollFormButtonProps = {
  children: React.ReactElement;
  buttonClass?: string;
};

export default function ScrollFormButton({
  children,
  buttonClass,
}: ScrollFormButtonProps) {
  return (
    <Button
      size="lg"
      className={`${buttonClass} capitalize`}
      onClick={() => {
        const form = document.getElementById("multistepForm");
        if (form) {
          window.scrollTo({
            top: form.offsetTop,
            behavior: "smooth",
          });
        }
      }}
    >
      {children}
    </Button>
  );
}
