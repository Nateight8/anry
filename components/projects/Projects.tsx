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
function Projects({}: Props) {
  const projects = [
    {
      id: "sa",
      image: "/1.jpg",
    },
    {
      id: "sas",
      image: "/2.jpg",
    },
    {
      id: "sass",
      image: "/3.jpg",
    },
    {
      id: "ssass",
      image: "/4.jpg",
    },
    {
      id: "ssassq",
      image: "/5.jpg",
    },
  ];

  return (
    <section id="experience" className="my-20">
      <H2 className="mb-3 ">
        <span className="hidden sm:block">Projects</span>
        <span className="block sm:hidden">Pjs</span>
      </H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {projects.map((item) => (
          <div className="bg-red-100 h-[30vh] relative" key={item.id}>
            <Image src={item.image} alt="" fill />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
