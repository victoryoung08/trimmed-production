import Hero from "@/components/blocks/hero/hero";
import HomeHero from "@/components/pages/home/HomeHero";
import { CircleCheck } from "lucide-react";
import cloudinary from "../utils/cloudinary";
import Image from "next/image";
import { cloudinary_urls as images } from "../utils/cloudinary";
import FeatureRow from "@/components/blocks/feature/FeatureRow";
import ThreeStepFeature from "@/components/blocks/feature/ThreeFeatureIcons";
import GridCards from "@/components/blocks/grid/GridCards";

export default async function Home() {
  // const { resources: images } = await cloudinary.search
  //   .expression("folder=trimmed-marketing/images")
  //   .execute();
  // const urls = images.map((image: any) => {
  //   return { name: image.filename, id: image.asset_id, url: image.secure_url };
  // });
  // console.log(urls);

  return (
    <main>
      <HomeHero />
      <FeatureRow
        heading="Low Conversion Rates Suck"
        image={{
          fileName: "magnet_bzhzsj",
          alt: "low-conversion-rate",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p>
          It&apos;s a deal breaker. Campaign buster. Soul-crushing stat that
          makes you second guess everything.
          <br />
          What if I told you those sky high conversion rates weren&apos;t only
          for those screenshots you see all over social?
        </p>
        <p>
          Low conversion rates mean your messaging is weak, your business
          isn&apos;t well position and your prospects are choosing your
          competitors.
        </p>
        <p>Let&apos;s fix that.</p>
      </FeatureRow>
      <FeatureRow
        heading="Let's not confuse prospects"
        image={{
          fileName: "targeting_edylqi",
          alt: "low-conversion-rate",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p>
          "So what exactly do you do?"{" "}
          <span className="font-semibold">- yikes</span>
        </p>
        <p>A common symptom to misguided, misdirected and misaligned message</p>
        <p>
          We&apos;ll take what you do, and put it in front of your customers in
          a way they actually understand.
        </p>
        <p>
          People like you and I only buy from the best. Let&apos;s communicate
          this.
        </p>
      </FeatureRow>
      <FeatureRow
        heading="You get the customers - we'll build the pipeline"
        image={{
          fileName: "funnel_nk02me",
          alt: "low-conversion-rate",
          class: "md:max-w-[300px]",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p>
          "So what exactly do you do?"{" "}
          <span className="font-semibold">- yikes</span>
        </p>
        <p>A common symptom to misguided, misdirected and misaligned message</p>
        <p>
          We&apos;ll take what you do, and put it in front of your customers in
          a way they actually understand.
        </p>
        <p>
          People like you and I only buy from the best. Let&apos;s communicate
          this.
        </p>
      </FeatureRow>
      <ThreeStepFeature
        heading="How we power ROAS"
        body="We keep things simple and focus on 3 core drivers of success for all campaigns"
        steps={[
          {
            step: "1",
            heading: "Laser Focused Messaging",
            body: "Speak to the heart and soul of your customers. What keeps them up at night, what drives them to buy - we research all this.",
            image: {
              fileName: "heart-target_pbkbvk",
              alt: "heart-target_pbkbvk",
            },
          },
          {
            step: "2",
            heading: "Build",
            body: "Turn messaging into a landing page that makes your customers question how do you know them so well?",
            image: {
              fileName: "puzzle_tdalkn",
              alt: "build-landing-pages-icon",
            },
          },
          {
            step: "3",
            heading: "Turbocharge With ads",
            body: "Grow your business with a consistent cost per lead. Tracking & creatives included.",
            image: {
              fileName: "search_uwccfk",
              alt: "paid-ads-icon",
            },
          },
        ]}
      />
      <GridCards />
    </main>
  );
}
