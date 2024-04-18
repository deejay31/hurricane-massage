"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10 bg-violet-200">
      {/**<Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
  </Typography>**/}
      <Typography variant="h3" className="text-center" color="blue-gray">
      Why A Massage?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        We have the expertise and years of experience that enable us to perform massages for our wonderful customers. 
        From refreshing your soul to removing stress from your life, a massage can help you get back on track. 
        Want some more information? Not a problem, 
        we’re here to listen and help out in any way we can, so get in touch.
      </Typography>
      {/**<div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
        </div>**/}
    </section>
  );
}

export default AboutEvent;
