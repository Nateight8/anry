import React from "react";
import { H2 } from "../ui/heading";
import { P } from "../ui/paragraph";

type Props = {};

function About({}: Props) {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full grid grid-cols-2 gap-4 ">
        <div className="hidden md:block"></div>
        <div className="col col-span-full md:col-span-1 md:col-start-2">
          <H2 className="mb-4">About </H2>
          <P className="ma max-w-lg text-xl">
            Hello, I am a full-time discord hype moderator! I started moderating
            in 2022 with a 69% hiring rate from well-known projects which led me
            to gather and handle 24+ projects in less than a month. If you
            don&lsquo;t want to waste your budget and time then hiring me will
            be your best decision made.
          </P>
        </div>
      </div>
    </section>
  );
}

export default About;
