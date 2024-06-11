import Image from "next/image";
import React from "react";

import Amelie from "~/assets/images/people/amelie.jpg";
import Delba from "~/assets/images/people/delba.jpg";
import Housecor from "~/assets/images/people/housecor.jpeg";
import Paco from "~/assets/images/people/pacocoursey.jpeg";
import Steve from "~/assets/images/people/steve.jpg";
import Steven from "~/assets/images/people/steven-tey.jpg";

const communityComments = [
  {
    image: Amelie,
    comment:
      "I'm moving the Serverless Laravel course to Lemon Squeezy and will host my new course there too. They have completely solved the Google Analytics issue by offering to disable Google Pay for my checkout",
    name: "Amelie",
    info: "@amelieschltr",
  },
  {
    image: Delba,
    comment:
      "It’s refreshing to see Lemon Squeezy focusing solely on digital products. Giving you all the necessary tools you’ll need to start selling your products and subscriptions quickly and easily.",
    name: "Delba",
    info: "@delba_oliveira",
  },
  {
    image: Steven,
    comment:
      "Imagine having a team of designers, developers, email marketers, and tax accountants behind you. That’s how Lemon Squeezy feels, letting you focus on creating your digital products.",
    name: "Steven Tey",
    info: "@steventey",
  },
  {
    image: Steve,
    comment:
      "Lemon Squeezy is the best option for selling digital products. I experienced the way things work, and wow, are you kidding me! Lemon squeezy is gonna change the industry!",
    name: "Steve",
    info: "@Steve8708",
  },
  {
    image: Housecor,
    comment:
      "I’ve never come across a platform that has made it SO easy-peasy to start selling. Lemon Squeezy is full of beautiful surprises, and it’s a genuine joy to use!",
    name: "Cory House",
    info: "@housecor",
  },
  {
    image: Paco,
    comment:
      "It’s so good to have a system focused on digital products, and it took me no time at all to allow customers to buy fonts straight from my website. There’s so much potential. I can’t wait to see what’s next!",
    name: "Paco",
    info: "@pacocoursey",
  },
];

export default function Community() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="my-40">
        <div>
          <p className="text-primary font-medium uppercase tracking-wider">
            COMMUNITY
          </p>
          <div className="grid grid-cols-2 gap-36">
            <div>
              <h3 className="mt-6 text-5xl font-semibold leading-[1.25]">
                You’re in good company
              </h3>
            </div>
            <div className="text-secondary-600 [&_strong]:text-secondary mt-5 space-y-10 text-lg">
              <p>
                SaaST is the heartbeat for your business.{" "}
                <strong>Join thousands of successful startups,</strong> software
                companies, and digital creators using our platform.
              </p>
              <p>
                <strong>Become part of a growing community</strong> of
                innovative thinkers, makers, movers, and shakers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="grid grid-cols-3">
          {communityComments.map((comment, idx) => (
            <div
              key={`comment-${comment.name}-${idx}`}
              className="flex flex-col p-6 even:bg-secondary-50"
            >
              {/* comment */}
              <div>
                <p>{comment.comment}</p>
              </div>
              {/* spacer */}
              <div className="flex-1" />
              {/* info */}
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={comment.image}
                      width={50}
                      height={50}
                      className="h-10 w-10 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] font-medium">{comment.name}</p>
                    <p className="text-sm text-secondary-600">{comment.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
