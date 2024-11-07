import { logos } from "@/utils/cloudinary";
import Image from "next/image";
export default async function LogosRow() {
  return (
    <section className="dark bg-background text-foreground overflow-hidden">
      <h5 className="mx-auto text-center">Trusted and Partnered With</h5>
      <div className="logos-scroll">
        <div className="logos-container">
          {/* First set of logos */}
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
          {/* Duplicate set of logos for seamless scrolling */}
          {logos?.map((logo) => (
            <Image
              src={logo.url}
              alt={logo.name}
              key={`second-${logo.id}`}
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
