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
  return (
    <section id="experience" className="">
      <div className="min-h-screen w-full flex items-center">
        <div className="w-full">
          <H2 className="mb-8">Top Pjs</H2>
          <Swiper
            slidesPerView={1.6}
            spaceBetween={8}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              //   1024: {
              //     slidesPerView: 4,
              //     spaceBetween: 50,
              //   },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3, 4].map((pj) => (
              <SwiperSlide key={pj} className="w-full p-6 ">
                <div className="w-full">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src="/est.jpeg"
                      fill
                      alt=""
                      className="rounded-3xl object-cover"
                    />
                  </AspectRatio>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Others /> */}
    </section>
  );
}

export default Projects;
