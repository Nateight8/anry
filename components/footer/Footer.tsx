import React from "react";
import { P } from "../ui/paragraph";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { H2 } from "../ui/heading";

type Props = {};

function Footer({}: Props) {
  return (
    <div className=" w-full">
      <footer className="relative  w-full mx-auto  max-w-screen-2xl p-4 md:px-6 md:py-6 ">
        <div className="h-[50vh] w-full flex items-center justify-center flex-col">
          <H2>Thank You!</H2>
          <P>Appreciate you for stopping by</P>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
