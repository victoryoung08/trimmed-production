import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function GridCards() {
  const caseStudies = [
    {
      heading: "MiracleMint",
      highlightSpan: "From 0 to 15 Employees Within 6 months",
      body: "Powered by Google Ads and Linkedin Outreach, we built out a nimble yet effective funnel to start from $0 to $120k/month in pipeline... and growing.",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/steps_svp9cj.png",
      isDark: true,
      mobileIsDark: true,
    },
    {
      heading: "COLDCOAST",
      highlightSpan: "17% conversion rate with $37 for Ducted Aircon Leads",
      body: "For projects quoted between $10k-$20k, we shipped a Google Ads campaign within 30 days to drive B2C pipeline for COLDCOAST",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/v1730837175/trimmed-marketing/images/google-ads_fbwbgz.png",
      isDark: false,
      mobileIsDark: false,
    },
    {
      heading: "Mancave Barbershop Australia",
      highlightSpan: "4 New Retail Stores Within 12 Months",
      body: "New franchise launches turned company playbook resulting in 4 FT barbers, 100+ Google Reviews & $300k/year run rate within 3 months across all 4 stores.",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/ratings_obuq8u.png",
      isDark: false,
      mobileIsDark: true,
    },
    {
      heading: "Tutorboss",
      highlightSpan: "$4.32 leads resulting in a $60K revenue\nwithin 30 days",
      body: "With a combo of Meta Ads and Email Marketing - we shipped landing pages, email flows and ad creatives resulting 32 high ticket purchases.",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/search-traffic_gqtvny.png",
      isDark: true,
      mobileIsDark: false,
    },
    {
      heading: "Mighty Steps",
      highlightSpan: "Turning $3000 into $300k/year",
      body: "Mighty Steps exploded NDIS ABA Therapy services going from a single provider into 2 FT staff members within 3 months. And a physical clinic too.",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/calendar_ahb8hh.png",
      isDark: true,
      mobileIsDark: true,
    },
    {
      heading: "Mighty Steps 1",
      highlightSpan: "Turning $3000 into $300k/year",
      body: "Mighty Steps exploded NDIS ABA Therapy services going from a single provider into 2 FT staff members within 3 months. And a physical clinic too.",
      image:
        "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/calendar_ahb8hh.png",
      isDark: false,
      mobileIsDark: false,
    },
  ];

  return (
    <section className="section-padding-medium">
      <div className="container-global">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.heading}
              className={twMerge(
                `grid-card p-16 pt-20 relative rounded-xl z-4`,
                study.isDark
                  ? "md:bg-foreground md:text-background"
                  : "md:bg-secondary",
                study.mobileIsDark
                  ? "bg-foreground text-background"
                  : "bg-secondary"
              )}
            >
              <Image
                src={study.image}
                alt="growth"
                width={80}
                height={120}
                className="grid-card-image"
              />
              <h4
                className={twMerge(
                  study.isDark ? "md:text-primary" : "md:text-background",
                  study.mobileIsDark ? "text-accent" : "text-background"
                )}
              >
                {study.heading}
              </h4>
              <span
                className={`
                  ${study.isDark ? "md:text-primary" : "md:text-background"}
                  ${study.mobileIsDark ? "text-accent" : "text-background"}
                  font-semibold
                `}
              >
                {study.highlightSpan}
              </span>
              <p>{study.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
