import HomeHero from "@/components/pages/home/HomeHero";

import FeatureRow from "@/components/blocks/feature/FeatureRow";
import ThreeStepFeature from "@/components/blocks/feature/ThreeFeatureIcons";
import GridCards from "@/components/blocks/grid/GridCards";
import ServiceCard from "@/components/blocks/feature/ServiceCard/ServiceCard";
import MultistepForm from "@/components/ui/MultistepForm/MultistepForm";
import CenterCTAWithImage from "@/components/blocks/CTA/CenterCTAWithImage";

export default function Home() {
  return (
    <main className="relative">
      <HomeHero />
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
      <CenterCTAWithImage
        heading="Get your business in front of the right leads"
        body="Clicks are easy, but getting qualified customers to raise their hand up - another story. With a true focus on understanding what your customer wants and position your business as the only solution - expect nothing shy of great conversion rates and less prospects who discount."
        button={{
          text: "Get a free revenue audit",
        }}
        image={{
          src: "/landing-page-wrapper.png",
          alt: "landing page images",
        }}
      />
      <GridCards />

      <FeatureRow
        heading="Craft a mind-reading offer your prospects love"
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
        <p>Think about it from your customers view.</p>
        <p>
          Why the bloody hell should they give you their contact details - no
          one wants to be sold to.
        </p>
        <p>
          That&apos;s why we turn what you do into what your customers need to
          sign up to.
          <br /> All with laser focused messaging, industry research and
          copywriting that hits home.
        </p>
      </FeatureRow>
      <FeatureRow
        heading="Go from idea to leads with campaigns built within 3 weeks"
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
        <p>You&apos;re running a business. You&apos;re serving customers</p>
        <p>
          Why are you watching a tutorial on how to edit your Wordpress page?
        </p>
        <p>
          Give us 45 minutes of your time and we&apos;ll build you everything
          you need to roll out an ad campaign within 3 weeks.
        </p>
        <p>Landing pages, tracking, ad creative - the works.</p>
      </FeatureRow>
      <FeatureRow
        heading="Grow with a consistent flow and cost of leads"
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
          Your business has ups and downs. Customer queries, operational
          backlogs... but at least you won&apos;t experience this with leads.
        </p>
        <p>Grow and build your business with a steady cost per lead.</p>
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
      <MultistepForm />
    </main>
  );
}
