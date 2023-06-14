import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { P } from "../ui/paragraph";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {};

function Others({}: Props) {
  return (
    <div className="min-h-screen w-full">
      <Tabs defaultValue="project" className="w-full">
        <TabsList>
          <TabsTrigger value="project">Other Projects</TabsTrigger>
          <TabsTrigger value="password">Proof of work</TabsTrigger>
        </TabsList>
        <TabsContent value="project">
          <div className="p-4 grid  grid-cols-7 w-full gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pj) => (
              <div key={pj} className="w-full">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src="/est.jpeg"
                    fill
                    alt=""
                    className="rounded-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 grid grid-cols-7 w-full gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pj) => (
              <div key={pj} className="w-full">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src="/est.jpeg"
                    fill
                    alt=""
                    className="rounded-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Others;
