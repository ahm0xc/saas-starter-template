import React from "react";

export default function PricingIntro() {
  return (
    <section className="mx-auto my-40 w-full max-w-6xl">
      <div>
        <p className="font-medium uppercase tracking-wider text-primary">
          Pricing
        </p>
        <div className="grid grid-cols-2 gap-36">
          <div>
            <h3 className="mt-6 text-5xl font-semibold leading-[1.25]">
              Simple pricing with no hidden fees.
            </h3>
          </div>
          <div className="mt-5 space-y-10 text-lg text-secondary-600 [&_strong]:text-secondary">
            <p>
              Whether you&apos;re just starting out or selling like hotcakes,{" "}
              <strong>we&apos;ve got your back.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
