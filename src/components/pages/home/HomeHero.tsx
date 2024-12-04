"use client";
import CldImage from "@/components/ui/CldImage";
import LogosRow from "@/components/ui/LogosRow";

export default function HomeHero() {
  return (
    <section className="section-padding-small relative bg-foreground px-4">
      <div className="text-center mx-auto w-full max-w-[100vw] lg:max-w-4xl bg-background rounded-2xl">
        <div className="py-12 px-5 sm:p-24 flex flex-col items-center gap-8 relative">
          <div className="absolute bottom-0 left-[-48px]">
            <CldImage
              name="hand-left_egznky"
              alt="hand-left decoration"
              size={128}
            />
          </div>
          <div className="absolute bottom-0 right-[-44px]">
            <CldImage
              name="hand-right_azwdjw"
              alt="hand-right decoration"
              size={160}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center relative">
              <div className="">
                <span className="relative">
                  <h1>Your All-In-One</h1>
                  <div className="absolute -rotate-6 top-[-8px]">
                    <CldImage
                      name="cog-icon_xkxrnk"
                      alt="cog decoration"
                      size={28}
                      imageClass=""
                    />
                  </div>
                </span>
                <span className="relative">
                  <h1>Revenue Chasers</h1>
                  <div className="absolute right-[-30px] bottom-[36px] -rotate-6">
                    <CldImage
                      name="dollar-icon_n8be85"
                      alt="hand-right decoration"
                      size={28}
                      imageClass=""
                    />
                  </div>
                </span>
              </div>
            </div>

            <p>
              Ship marketing campaigns to drive revenue.
              <br />
              Leads, pipeline, prospects - you name it, we&apos;ll get it.
            </p>
            <div className="md:max-w-md mx-auto md:w-full py-4">
              <button
                className="main-button full"
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
                Request a revenue audit
              </button>
            </div>
          </div>
        </div>
      </div>

      <LogosRow />
    </section>
  );
}
