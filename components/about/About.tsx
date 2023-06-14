import React from "react";
import { H2 } from "../ui/heading";
import { P } from "../ui/paragraph";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-screen">
      <div className=""></div>
      <div className="">
        <H2 className="mb-4">About </H2>
        <P className="ma max-w-lg text-xl">
          Hello, I am Nate a full-time discord hype moderator! I started
          moderating in 2022 with a 69% hiring rate from well-known projects
          which led me to gather and handle 24+ projects in less than a month.
          If you don&lsquo;t want to waste your budget and time then hiring me
          will be your best decision made.
        </P>
      </div>
    </div>
  );
}

export default About;
