import Community from "./_components/community";
import ExtendedFeatures from "./_components/extended-features";
import Features from "./_components/features";
import FooterCTA from "./_components/footer-cta";
import Hero from "./_components/hero";
import PricingBlock from "./_components/pricing-block";
import PricingIntro from "./_components/pricing-intro";

export default async function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="px-4">
        <Features />
      </div>
      <div>
        <ExtendedFeatures />
      </div>
      <div>
        <PricingIntro />
        <div className="mt-20 scroll-mt-32" id="pricing">
          <PricingBlock />
        </div>
      </div>
      <div className="mb-32 px-4">
        <Community />
      </div>
      <div>
        <FooterCTA />
      </div>
    </div>
  );
}
