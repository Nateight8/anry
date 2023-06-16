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
            Hello, I&rsquo;m a Professional community manager helping DeFi
            projects build thriving communities. Passionate about fostering
            engagement, connecting people, and driving meaningful conversations.
            Let&rsquo;s build together! 🚀 🚀😊
          </P>
        </div>
      </div>
    </section>
  );
}

export default About;
