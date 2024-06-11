import { StarIcon } from "@iconicicons/react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import Review1 from "~/assets/images/reviews/1.png";

const reviewsA = [Review1, Review1, Review1, Review1, Review1, Review1];
const reviewsB = [Review1, Review1, Review1, Review1, Review1, Review1];
const smallReviews = [
  {
    star: 5,
    review: "“This looks truly premium”",
  },
  {
    star: 5,
    review: "“This will save me oodles of time”",
  },
  {
    star: 5,
    review: "“A thorough and polished library”",
  },
];

export default function ReviewMarquee() {
  return (
    <div>
      <Marquee
        gradient
        gradientColor="#5423E7"
        gradientWidth={100}
        pauseOnHover
      >
        {reviewsA.map((img, index) => (
          <Review image={img} key={`review-${index}`} />
        ))}
      </Marquee>
      <Marquee
        gradient
        gradientColor="#5423E7"
        gradientWidth={100}
        pauseOnHover
        className="mt-8"
        direction="right"
      >
        {reviewsB.map((img, index) => (
          <Review image={img} key={`review-${index}`} />
        ))}
      </Marquee>

      <div className="mx-auto mt-28 max-w-5xl">
        <div className="grid grid-cols-3">
          {smallReviews.slice(0, 3).map((review, idx) => {
            return (
              <div
                className="flex flex-col items-center gap-4"
                key={`small-review-${idx}`}
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: review.star }).map(() => (
                    <StarIcon
                      className="fill-wg-yellow text-wg-yellow h-6 w-6"
                      key={`review-star-${review.review}-${idx}`}
                    />
                  ))}
                </div>
                <p className="text-white">“This looks truly premium”</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Review({ image }: { image: StaticImageData }) {
  return (
    <Image
      src={image}
      className="border-surface-100 mx-4 h-auto w-fit rounded-lg border"
      alt=""
    />
  );
}
