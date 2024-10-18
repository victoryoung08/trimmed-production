"use client";
import CldImage from "@/components/ui/CldImage";
import { CircleCheck, XCircle } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
export default function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  // const getImages = async () => {
  //   const images = await fetch("/api/cloudinary", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await images.json();
  //   console.log(data);
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className="section-padding-small relative bg-foreground">
      <div className="text-center mx-auto max-w-4xl bg-background rounded-2xl">
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
              <h1 className="w-fit">Your All-In-One Revenue Chasers</h1>
              <div className="absolute right-[-16px] lg:bottom-[30%] lg:right-[60px] -rotate-6">
                <CldImage
                  name="dollar-icon_n8be85"
                  alt="hand-right decoration"
                  size={28}
                  imageClass=""
                />
              </div>
              <div className="absolute top-0 left-[-4px] lg:top-[-12px] lg:left-[80px] -rotate-6">
                <CldImage
                  name="cog-icon_xkxrnk"
                  alt="cog decoration"
                  size={28}
                  imageClass=""
                />
              </div>
            </div>

            <p>
              Ship marketing campaigns that drive revenue.
              <br />
              Leads, pipeline, prospects - you name it.
            </p>
            <div className="md:max-w-md mx-auto md:w-full py-4">
              <button className="main-button full" onClick={toggleModal}>
                Request a free revenue growth roadmap
              </button>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4">
            <h5 className="leading-tight">
              Request a Free Revenue Growth Roadmap
            </h5>
            <div className="sm:max-w-lg sm:w-full mx-auto">
              <div className="flex items-start justify-start mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p className="text-left">
                  Identify leaky funnels and 22 optimisation points for your
                  marketing campaign
                </p>
              </div>
              <div className="flex items-start justify-start mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p className="text-left">
                  What your next 90 days will look like working together
                </p>
              </div>

              <div className="flex items-start justify-start mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p className="text-left">
                  Chat about quick-wins and building long term channels
                </p>
              </div>
            </div>

          </div> */}
        </div>
      </div>
      {/* Modal */}
      <div
        className={twMerge(
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300",
          showModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-white w-full max-w-lg p-12 relative rounded-lg">
          <div
            className="absolute top-4 right-4 hover:cursor-pointer"
            onClick={toggleModal}
          >
            <XCircle
              size={28}
              strokeWidth="thin"
              className="text-gray-500 hover:text-gray-700"
            />
          </div>
          <form action="" className="flex flex-col gap-4">
            <h4 className="capitalize leading-tight text-center">
              Rolling out a marketing campaign?
            </h4>
            <div className="bullets-wrapper">
              <div className="flex items-start justify-center mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p>
                  Uncover revenue leaks in your marketing campaign (or how to
                  avoid it)
                </p>
              </div>
              <div className="flex items-start justify-center mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p>Review your messaging, funnel and overall strategy</p>
              </div>
              <div className="flex items-start justify-center mx-auto gap-2">
                <CircleCheck className="mt-2 flex-shrink-0" size={16} />
                <p>
                  Discuss how we can work together to build, ship and optimise
                  your marketing
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <input
                className="lead-form-field-input"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="lead-form-field-input"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="lead-form-field-input"
                type="phone"
                placeholder="Phone"
                name="phone"
              />
              <button className="main-button full">
                Get a Free Marketing Audit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
