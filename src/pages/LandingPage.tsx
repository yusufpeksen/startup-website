import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="h-[750px] w-full  bg-[#2F1893] font-dm-sans">
      <div className=" h-full bg-landing-bg w-full bg-no-repeat bg-cover bg-opacity-50">
        <div className="py-[40px]">
          <Header />
        </div>
        <div className="mt-12 flex justify-center items-center">
          <Carousel />
        </div>
        <div className="flex justify-center items-center mt-20">
          <Button
            bgcolor="482BE7"
            text="Create an Account"
            w="190"
            h="50"
            hoverBgColor="5a3be0"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
