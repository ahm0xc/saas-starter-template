import React from "react";

const features = [
  {
    heading: "Fast + Modern",
    body: "Stop building from scratch and save time with a component library.",
  },
  {
    heading: "Accessible",
    body: "Build WAI-ARIA compliant applications without needing to be an expert.",
  },
  {
    heading: "Customizable",
    body: "Customize components quickly and easily by creating themes.",
  },
  {
    heading: "Dark mode",
    body: "Switch between light and dark modes with a click or automatically.",
  },
  {
    heading: "Typescript",
    body: "Typescript based to reduce learning curve and save valuable time.",
  },
  {
    heading: "Expert design",
    body: "Build pixel-perfect dashboards designed by world-class designers.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="my-40">
        <div>
          <p className="text-primary font-medium uppercase tracking-wider">
            meet saas
          </p>
          <div className="grid grid-cols-2 gap-36">
            <div>
              <h3 className="mt-6 text-5xl font-semibold leading-[1.25]">
                Simplify the process of building beautiful user interfaces
              </h3>
            </div>
            <div className="text-secondary-600 [&_strong]:text-secondary mt-5 space-y-10 text-lg [&_strong]:ml-1">
              <p>
                Wedges is a professionally designed design system for Figma and
                <strong>an open-source SaaS template</strong> that combines
                Radix UI primitives and Tailwind CSS.
              </p>
              <p>
                Enjoy a growing collection of pre-built, easy-to-use,
                <strong>
                  customizable components that can be copied and pasted into
                  your React projects.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="grid grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div key={`feat-${feat.heading}-${idx}`} className="space-y-4 p-6 rounded-xl hover:bg-secondary-50 duration-200">
              <p className="text-primary">F/{idx + 1}</p>
              <h4 className="text-3xl font-semibold">{feat.heading}</h4>
              <p className="text-lg text-secondary-700">{feat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
