import Features from "./_components/features";
import Hero from "./_components/hero";

export default async function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="px-4">
        <Features />
      </div>
    </div>
  );
}
