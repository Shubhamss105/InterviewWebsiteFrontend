import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Company Profiles",
    description:
    "Get to know companies inside and out. We provide detailed profiles of various organizations, including their values, culture, and the industries they operate in. Discover if a company aligns with your career aspirations.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Interview Experiences",
    description:
      "Our website is a treasure trove of authentic interview experiences shared by job applicants like you. Gain a deeper understanding of what it's like to interview with different companies, from startups to multinational corporations.",
    icon: LockClosedIcon,
  },
  {
    name: "Interview Questions",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Search and Filter",
    description:
      "Easily search for interview experiences with specific companies or job positions using our search and filter functions. Find exactly what you're looking for without the hassle.",
    icon: FingerPrintIcon,
  },
];

const About = () => {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div class="w-full lg:w-6/12">
            <h2 class="w-full font-bold lg:text-4xl text-3xl lg:leading-10  leading-9">
              About Our Application
            </h2>
            <p class="font-normal text-base leading-6 text-gray-600  mt-6">
              We believe that sharing interview experiences should be
              accessible, straightforward, and beneficial for everyone involved
              in the hiring process. Whether you're an eager job seeker or a
              forward-thinking employer, InterviewInsights.com provides you with
              the insights you need to make informed decisions.
            </p>
          </div>
          <div class="w-full lg:w-6/12">
            <img
              class="lg:block hidden w-full"
              src="https://static.ambitionbox.com/static/homepage/companies_web.svg"
              alt="people discussing on board"
            />
            <img
              class="lg:hidden sm:block hidden w-full"
              src="https://static.ambitionbox.com/static/homepage/companies_web.svg"
              alt="people discussing on board"
            />
            <img
              class="sm:hidden block w-full"
              src="https://static.ambitionbox.com/static/homepage/companies_web.svg"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        
      </div>
    </div>
  );
};

export default About;
