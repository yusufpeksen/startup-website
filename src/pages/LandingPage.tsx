import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#2F1893] font-dm-sans">
      <div className="min-h-screen bg-landing-bg w-full bg-no-repeat bg-cover bg-opacity-50">
        <div className="py-[60px] max-md:w-full max-md:px-7">
          <Header />
        </div>
        <div className="mt-12 flex justify-center items-center max-md:mt-8">
          <Carousel />
        </div>
        <div className="flex justify-center items-center mt-20 max-md:mt-10">
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
