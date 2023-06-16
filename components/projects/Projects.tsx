"use client";
import React from "react";
import { H2 } from "../ui/heading";
import Others from "./Others";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
type Props = {};
import { Pagination } from "swiper";
import { P } from "../ui/paragraph";

function Projects({}: Props) {
  const projects = [
    {
      id: "sa",
      image: "/1.jpg",
      name: "Anonymous Fox",
      role: "community manager",
    },
    {
      id: "sas",
      image: "/2.jpg",
      name: "Crypto Bulls",
      role: "Collab Manager",
    },
    {
      id: "sass",
      image: "/3.jpg",
      name: "Bulls Time Nft",
      role: "Collab manager",
    },
    {
      id: "ssass",
      image: "/4.jpg",
      name: "Naked Panda",
      role: "community manager",
    },
    {
      id: "ssassq",
      image: "/5.jpg",
      name: "Rocks Hope",
      role: "Chat Engager",
    },
    {
      id: "ssfassq",
      image: "/5.jpg",
      name: "Gmeta",
      role: "community manager",
    },
    {
      id: "sewsassq",
      image: "/5.jpg",
      name: "XOXO",
      role: "community manager",
    },
    {
      id: "sewUsq",
      image: "/5.jpg",
      name: "OXFreelance",
      role: "community moderator",
    },
    {
      id: "sewUsq",
      image: "/5.jpg",
      name: "Kitsune Foxes Squad",
      role: "community manager & Advisor",
    },
  ];

  return (
    <section id="experience" className="my-20">
      <div className="py-10">
        <H2 className=" ">
          <span className="hidden sm:block">Projects</span>
          <span className="block sm:hidden">Pjs</span>
        </H2>
        <P>
          In no particular order, here are some of the projects I&rsquo;ve had
          the privilege to work with:
        </P>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"> */}
      <div className="s space-y-[1px]">
        {projects.map((item) => (
          // <div className="bg-red-100 h-[30vh] relative" key={item.id}>
          //   <Image src={item.image} alt="" fill />
          // </div>
          <div
            className="bg-white/75 hover:bg-white transition-all duration-700 px-2 text-black"
            key={item.id}
          >
            <P className="text-black">{item.role}</P>
            <H2 className="text-2xl hover:cursor-pointer">{item.name}</H2>
            {/* <ImageHover src={item.image} alt="" /> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
