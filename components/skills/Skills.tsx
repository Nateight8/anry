import React from "react";
import { H2 } from "../ui/heading";
import { P, pVariants } from "../ui/paragraph";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row justify-between w-full max-w-4xl">
        <div className="max max-w-md">
          <H2>Skillset</H2>
          <P>
            While being part of the team here are ​some of my skills that you
            might find ​useful! Just dm me about them if you ​want to avail
            some. Thanks!
          </P>
        </div>
        <div className="">
          <ul className="space-y-4">
            <li className={pVariants({ className: "font-heading" })}>
              Discord setup
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Web Design
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Frontend Dev
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Discord bot (discord.js)
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Ama host
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Twitter marketting
            </li>
            <li className={pVariants({ className: "font-heading" })}>
              Telegram marketting (mass DM)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
