"use client";
import React from "react";
import { Input } from "../input";
import { Button } from "../button";

type LeadFormProps = {
  heading?: string;
  body?: string;
  button?: {
    text: string;
    action?: () => void;
  };
  apiRoute?: string;
};

export default function LeadForm(props: LeadFormProps) {
  const { heading, body, button = { text: "Submit" }, apiRoute } = props;
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
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
      <form
        className="p-8 max-w-md w-full flex flex-col gap-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            type="text"
            placeholder="Enter Your Name"
            className="py-5"
            name="name"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="py-5"
            name="email"
          />
        </div>
        <div>
          <Input
            type="phone"
            placeholder="Enter Your Phone"
            className="py-5"
            name="phone"
          />
        </div>
        <Button className="py-5" type="submit">
          {button.text}
        </Button>
      </form>
    </div>
  );
}
