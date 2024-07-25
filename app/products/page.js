import React from "react";
import About from "@/components/about";
import Range from "@/components/range";

const Index = () => {
  return (
    <div className="container">
      <div className="">
        <div className="flex flex-wrap lg:flex-nowrap  justify-center gap-[25px] pt-[60px] sm:flex-wrap">
          <Range />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Index;
