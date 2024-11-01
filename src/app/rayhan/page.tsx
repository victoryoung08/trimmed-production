import Incentives from "@/components/blocks/Incentives/Incentives";
import Stepper from "@/components/ui/Stepper/Stepper";

export default async function Rayhan() {
    return (
        <main>
            <Incentives
                heading="Your All-In-One Revenue Chasers"
                body="Get higher conversion rates, improve your return on ad spend and get connected with prospects you actually want to work with."
                button={{
                    link: "#",
                    text: "Get a free Marketing Audit"
                }}
                image={{
                    src: `${`https://picsum.photos/seed/${Math.floor(
                        Math.random() * 100
                    )}/900/600.webp`}`,
                    alt: "Image place holder"
                }}
            />
            <div className="py-10">
                <Stepper />
            </div>
        </main>
    );
}
