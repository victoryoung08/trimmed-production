"use client";
import { Button } from "./button";

export default function ScrollFormButton({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Button
      size="lg"
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
