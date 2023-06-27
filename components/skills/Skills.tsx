import React from "react";
import { H2 } from "../ui/heading";
import { P, pVariants } from "../ui/paragraph";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center"
    >
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
            {[
              "Web Design",
              "Frontend Dev",
              "Discord Dev(discord.js)",
              "Ama Host",
              "Twitter Marketing",
              "Telegram Marketing",
              "Content creation",
            ].map((item) => (
              <li
                key={item}
                className={pVariants({
                  className:
                    "font-heading hover:text-slate-100 transition-all duration-750 hover:cursor-pointer text-slate-100/75 ",
                })}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
