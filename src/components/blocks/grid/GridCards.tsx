import Image from "next/image";

export default function GridCards() {
  return (
    <section className="section-padding-medium">
      <div className="container-global">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid-card dark bg-background/90 text-foreground p-16 pt-20 relative rounded-xl z-4">
            <Image
              src={
                "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/steps_svp9cj.png"
              }
              alt="growth"
              width={200}
              height={120}
              className="grid-card-image"
            />
            <h4>MiracleMint</h4>
            <span className="text-accent font-semibold">
              From 0 to 15 Employees Within 6 months
            </span>
            <p>
              Powered by Google Ads and Linkedin Outreach, we built out a nimble
              yet effective funnel to start from $0 to $120k/month in
              pipeline... and growing.
            </p>
          </div>
          <div className="grid-card">
            <Image
              src={
                "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/ratings_obuq8u.png"
              }
              alt="growth"
              width={200}
              height={120}
              className="grid-card-image"
            />
            <h4>Mancave Barbershop Australia</h4>
            <span>4 New Retail Stores Within 12 Months</span>
            <p>
              New franchise launches turned company playbook resulting in 4 FT
              barbers, 100+ Google Reviews & $300k/year run rate within 3 months
              across all 4 stores.
            </p>
          </div>
          <div className="grid-card bg-white p-16 pt-20 relative rounded-xl z-4">
            <Image
              src={
                "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/search-traffic_gqtvny.png"
              }
              alt="growth"
              width={200}
              height={120}
              className="grid-card-image"
            />
            <h4>Tutorboss</h4>
            <span>$4.32 leads resulting in a $60K revenue within 30 days</span>
            <p>
              With a combo of Meta Ads and Email Marketing - we shipped landing
              pages, email flows and ad creatives resulting 32 high ticket
              purchases.
            </p>
          </div>
          <div className="grid-card dark bg-background/90 text-foreground p-16 pt-20 relative rounded-xl z-4">
            <Image
              src={
                "https://res.cloudinary.com/dyouwoic6/image/upload/f_auto,q_auto,w_1200/v1728806393/trimmed-marketing/images/calendar_ahb8hh.png"
              }
              alt="growth"
              width={200}
              height={120}
              className="grid-card-image"
            />
            <h4>Mighty Steps</h4>
            <span className="text-accent font-semibold">
              Turning $3000 into $300k/year
            </span>
            <p>
              Mighty Steps exploded NDIS ABA Therapy services going from a
              single provider into 2 FT staff members within 3 months. And a
              physical clinic too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
