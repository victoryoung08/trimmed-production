import { logos } from "@/utils/cloudinary";
import Image from "next/image";

export default function LogosRow() {
  return (
    <section className="dark bg-background text-foreground overflow-hidden py-12">
      <h5 className="mx-auto text-center">Trusted and Partnered With</h5>
      <div className="mt-10">
        <div className="flex items-center justify-center gap-x-12 gap-y-6 max-w-xl w-full mx-auto flex-wrap">
          {logos?.map((logo) => (
            <Image
              src={logo.url}
              alt={logo.name}
              key={`first-${logo.id}`}
              width={100}
              height={50}
              className="logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
