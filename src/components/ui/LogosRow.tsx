import { logos } from "@/utils/cloudinary";
import Image from "next/image";
export default function LogosRow() {
  return (
    <section className="">
      <div className="flex items-center justify-center gap-4 section-padding-medium container-global">
        {logos?.map((logo) => (
          <Image
            src={logo.url}
            alt={logo.name}
            key={logo.id}
            width={100}
            height={50}
          />
        ))}
      </div>
    </section>
  );
}
