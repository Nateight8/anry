import React from "react";
import { P } from "../ui/paragraph";
import { Button } from "../ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6 relative h-screen flex items-center ">
      <div className=" max-w-prose">
        <h1 className=" text-7xl sm:text-5xl md:text-7xl font-heading mb-3 ">
          Anger coin
        </h1>
        <P>
          Angry is a character who always upholds justiceand ensures that Riley
          always gets justice in everything. Now in crypto market binance is
          down he is mad that BSC is down. Anger comes to normalize bsc market
        </P>
        <div className="grid grid-cols-2 gap-4 max-w-sm w-full mt-6">
          <Button className="w-full">Buy Now</Button>
          <Button variant="ghost" className="w-full">
            Chart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
