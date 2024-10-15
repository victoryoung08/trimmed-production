"use client";
import { CircleCheck, Cross, XCircle } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CldImage } from "next-cloudinary";
export default function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  const getImages = async () => {
    const images = await fetch("/api/cloudinary", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await images.json();
    console.log(data);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className="section-padding-medium relative">
      <div className="text-center mx-auto max-w-4xl flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1>
            Ship campaigns, <br className="hidden md:block" />
            connect with customers
          </h1>
          <p>Build a pipeline of customers you love to work with.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4>
            Book a{"  "}
            <span className="text-primary text-[36px] font-black tracking-[-0.25rem]">
              {" "}
              Free{" "}
            </span>
            Marketing Audit & Review
          </h4>
          <div>
            <div className="flex items-start justify-center mx-auto gap-2">
              <CircleCheck className="mt-2 flex-shrink" size={16} />
              <p>Review the bottlenecks in your current marketing</p>
            </div>
            <div className="flex items-start justify-center mx-auto gap-2">
              <CircleCheck className="mt-2" size={16} />
              <p>
                Learn what exactly your business needs better leads, more
                customers
              </p>
            </div>

            <div className="flex items-start justify-center mx-auto gap-2">
              <CircleCheck className="mt-2 flex-shrink" size={16} />
              <p>
                Get an on the spot 90-day overview of what your marketing
                initiative should look like
              </p>
            </div>
          </div>
          <div>
            <button className="main-button" onClick={toggleModal}>
              Get a Free Audit
            </button>
          </div>
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
