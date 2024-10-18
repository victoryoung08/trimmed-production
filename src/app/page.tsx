import HomeHero from "@/components/pages/home/HomeHero";

import FeatureRow from "@/components/blocks/feature/FeatureRow";
import ThreeStepFeature from "@/components/blocks/feature/ThreeFeatureIcons";
import GridCards from "@/components/blocks/grid/GridCards";
import CTALeadQuote from "@/components/blocks/CTA/CTALeadQuote";

export default async function Home() {
  return (
    <main>
      <HomeHero />
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
        heading="Let's not confuse prospects"
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
        <p>
          &quot;So what exactly do you do?&quot;
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
        heading="Better Clicks, Better Conversions"
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
          Create sticky ads that get the right people who want to buy to your
          funnel. <br /> Anyone can push clicks. We drive customers.
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
      <CTALeadQuote />
    </main>
  );
}
