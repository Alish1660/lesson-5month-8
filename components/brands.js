"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import Brand from "@/public/images/brand1.png";
import Brand2 from "@/public/images/brand2.png";
import Brand3 from "@/public/images/brand3.png";
import Brand4 from "@/public/images/brand4.png";
import Brand5 from "@/public/images/brand5.png";

export default function Home() {
  const logos = [Brand, Brand2, Brand3, Brand4, Brand5];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth;
    let startPosition = 0;

    const animate = () => {
      startPosition += 1;
      if (startPosition >= scrollWidth / 2) {
        startPosition = 0;
      }
      carousel.scrollTo({
        left: startPosition,
        behavior: "smooth",
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-custom-gray pt-[40px] pb-[40px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="card flex items-center max-w-[1240px] w-full h-[154px] bg-white rounded-[8px] ">
            <div className="relative w-full max-w-[1200px] overflow-hidden">
              <div className="flex space-x-4 animate-scroll" ref={carouselRef}>
                {logos.concat(logos).map((logo, index) => (
                  <div key={index} className="flex-none">
                    <Image
                      src={logo}
                      alt={`Logo ${index}`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
