import HomeHero from "@/components/pages/home/HomeHero";

import FeatureRow from "@/components/blocks/feature/FeatureRow";
import ThreeStepFeature from "@/components/blocks/feature/ThreeFeatureIcons";
import GridCards from "@/components/blocks/grid/GridCards";
// import CTALeadQuote from "@/components/blocks/CTA/CTALeadQuote";
import LeadForm from "@/components/ui/LeadForm/LeadForm";
import ServiceCard from "@/components/blocks/feature/ServiceCard/ServiceCard";
import FeatureWithGrid from "@/components/blocks/feature/FeatureWithGrid/FeatureWithGrid";
import Navbar from "@/components/ui/Navbar";
import { getImagesFromFolder } from "@/utils/cloudinary";
import LogosRow from "@/components/ui/LogosRow";

export default async function Home() {
  console.log(await getImagesFromFolder("trimmed-marketing/logos", "logos"));
  return (
    <main className="relative">
      <Navbar />
      <HomeHero />
      <LogosRow />
      <section className="section-padding-medium">
        <div className="container-global grid grid-cols-1 gap-4 h-full auto-rows-fr">
          <ServiceCard
            heading="More leads with"
            headingHighlight="Google & Meta Ads"
            body="Grow your business with a steady pipeline of potential customers -
              not tyre kickers. With laser focused messaging and ad creatives
              that stand out - only speak with the best customers looking to
              buy."
            imageName={"paid-ads-icon_tghnm1"}
          />
          <ServiceCard
            heading="Drive conversion rates"
            headingHighlight="with landing pages"
            highlightColor="text-primary"
            body="Going from 1% to 2% doubles your business. Our clients have gotten 10-20%."
            imageName={"campaigns_bjhisf"}
          />
          <ServiceCard
            heading="Push Growth with"
            headingHighlight="Ads Optimisations and Creatives"
            highlightColor="text-secondary"
            body="Don't overspend on leads, and don't spend on leads that don't convert. Find the perfect balance of cost per lead and lead quality."
            imageName={"lead-magnet-light_dipppx"}
          />
        </div>
      </section>
      <GridCards />
      <FeatureWithGrid
        heading="Your Ad Campaign Lives and Dies by your landing page."
        body="Clicks are easy, but getting qualified customers to raise their hand up - another story. With a true focus on understanding what your customer wants and position your business as the only solution - expect nothing shy of great conversion rates and less prospects who discount."
        imageGrid={[
          {
            name: "tutorboss_yxjdv3",
            alt: "tutorboss landing page",
            size: 600,
            imageClass: "pl-1",
          },
          {
            name: "coldcoast_poxwl5",
            alt: "coldcoast landing page",
            size: 600,
            imageClass: "pl-1",
          },
          {
            name: "coreDNA_on4ze1",
            alt: "coreDNA landing page",
            size: 600,
            imageClass: "pl-1",
          },
          {
            name: "miraclemint_l6sneq",
            alt: "miraclemint landing page",
            size: 600,
            imageClass: "pl-1",
          },
        ]}
      />
      <FeatureRow
        heading="Make Paid Ads Scalable"
        image={{
          fileName: "steps_svp9cj",
          alt: "low-conversion-rate",
          class: "w-[300px]",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p>We put your business in front of people who need your stuff.</p>
        <p>
          Low conversion rates mean your messaging is weak, your business
          isn&apos;t well position and your prospects are choosing your
          competitors.
        </p>
        <p>Let&apos;s fix that.</p>
      </FeatureRow>
      <FeatureRow
        heading="Become a no-brainer for your customers"
        image={{
          fileName: "targeting_edylqi",
          alt: "low-conversion-rate",
          class: "w-[300px]",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p>Attract customers who want to do business with you</p>
        <p>
          With laser focused messaging, we&apos;ll position your business as the
          only and best solution for your customers wants and needs
        </p>
        <p>
          This means no more discounting, no more comparisons and more closes
        </p>
      </FeatureRow>
      <FeatureRow
        heading="Solve your lead issues"
        image={{
          fileName: "search-traffic_gqtvny",
          alt: "low-conversion-rate",
          class: "w-[300px]",
        }}
        button={{
          text: "Get A Free Marketing Audit",
        }}
        alignment="left"
      >
        <p className="text-balance">
          What&apos;s the one thing stopping you from growing your business?
        </p>
        <p>Yep - a consistent flow of leads</p>
        <p>
          Not just emails and phone numbers... but customers who drive revenue.
        </p>
        <p>Build a marketing campaign</p>
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

      <section className="bg-foreground section-padding-small">
        <div className="section-padding-medium container-global bg-background rounded-2xl">
          <div className="centered-wrapper">
            <LeadForm
              heading="Get a Campaign Strategy"
              body="Something to compliment the heading"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
