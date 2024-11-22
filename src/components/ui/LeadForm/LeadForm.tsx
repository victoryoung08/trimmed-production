"use client";
import React from "react";
import { Input } from "../input";

import Image from "next/image";

type LeadFormProps = {
  heading?: string;
  body?: string;
  button?: {
    text: string;
    action?: () => void;
  };
  apiRoute?: string;
  bullets?: string[];
};

export default function LeadForm(props: LeadFormProps) {
  const {
    heading,
    body,
    button = { text: "Submit" },
    apiRoute,
    bullets,
  } = props;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formBody = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    if (apiRoute) {
      try {
        const res = await fetch(`${apiRoute}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formBody),
        });
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(
          `Something went wrong with accessing the api route, ${apiRoute}`,
          err
        );
      }
    } else {
      console.log("No api route provided");
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="content-wrapper center">
        <h3 className="mb-4">{heading}</h3>
        <div className="flex flex-col gap-2 text-left mx-auto max-w-[80%">
          <p className="">{body}</p>
          {bullets?.map((bullet) => (
            <div className="flex items-start gap-2" key={bullet}>
              <Image
                src="/icon-lightning.png"
                alt="lightning icon"
                width={10}
                height={10}
                className="rotate-2 mt-[6px]"
              />
              <p>{bullet}</p>
            </div>
          ))}
        </div>
      </div>
      <form
        className="max-w-md w-full flex flex-col gap-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="" className="input-label">
            What&apos;s your name?
          </label>
          <Input
            type="text"
            // placeholder="Enter Your Name"
            className="py-5 input-field"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="" className="input-label">
            What&apos;s your work email address?
          </label>

          <Input
            type="email"
            // placeholder="Enter Your Email"
            className="py-5 input-field"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="" className="input-label">
            What&apos;s your best contact number?
          </label>
          <Input
            type="phone"
            // placeholder="Enter Your Phone"
            className="py-5 input-field"
            name="phone"
          />
        </div>
        <div className="md:max-w-md mx-auto md:w-full py-4">
          <button className="main-button full" type="submit">
            {button.text}
          </button>
        </div>
      </form>
    </div>
  );
}
