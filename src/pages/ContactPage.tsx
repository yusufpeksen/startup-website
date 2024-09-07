import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const options = ["$500", "$1000", "$1500"];
  const [selectedValue, setSelectedValue] = useState<String>(options[0]);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: String) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div className="h-[770px] w-full bg-[#2F1893] bg-opacity-60- bg-no-repeat bg-cover font-dm-sans">
      <div className=" h-full  bg-contact-bg w-full flex flex-col justify-center items-center font-dm-sans">
        <div className="mt-[-105px] py-[60px]">
          <Header />
        </div>
        <div className="flex gap-4 w-1/2">
          {/* Left - Information Section */}
          <div className="text-white">
            <h2 className="font-bold text-[42px] leading-[52px] mb-6">
              Let's Keep in Touch
            </h2>
            <p className="text-[22px] font-medium leading-8 mb-20">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            <div className="w-1/2 flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    fill="white"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </span>
                +1 555 505 5050
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    fill="white"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </span>
                info@designmodo.com
              </div>
              <div className="flex items-start gap-3">
                <span>
                  <svg
                    fill="white"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
                  </svg>
                </span>
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                230909
              </div>
            </div>
          </div>
          {/* Right - Form section */}
          <div className="w-[470px] h-[550px] bg-[#FFFFFF] rounded-[10px] p-6">
            <div className="flex gap-7 mt-5">
              <div className="flex flex-col item mt-">
                <span className="text-[#1E0E62] text-[12px] font-bold tracking-[2px]">
                  YOUR NAME
                </span>
                <input
                  placeholder="First name"
                  className="rounded-[20px] w-[180px] outline-none border-[2px] border-[#EBEAED] py-2 pl-4 mt-3"
                ></input>
              </div>
              <div>
                <span className="text-[#1E0E62] text-[12px] font-bold tracking-[2px]">
                  BUDGET
                </span>
                {/* SPEACIAL DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={toggleDropDown}
                    className="flex items-center justify-between  mt-3 w-[110px] bg-[#ffffff] border-[2px] border-[#EBEAED] rounded-[20px] py-2 px-4 text-left text-[#1E0E62]"
                  >
                    {selectedValue}
                    <div className="">
                      {isOpen ? (
                        <svg
                          fill="#1E0E62"
                          width={13}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                      ) : (
                        <svg
                          fill="#1E0E62"
                          width={13}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <ul className=" w-full absolute bg-white border border-gray-300 rounded-lg mt-1">
                      {options.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <span className="text-[#1E0E62] text-[12px] font-bold tracking-[2px]">
                INPUT FIELD
              </span>
              <input
                placeholder="name@mail.com"
                className="rounded-[20px] w-full outline-none border-[2px] border-[#EBEAED] py-2 pl-4 mt-3"
              ></input>
            </div>
            <div className="flex flex-col mt-10">
              <span className="text-[#1E0E62] text-[12px] font-bold tracking-[2px]">
                YOUR MESSAGE
              </span>
              <textarea
                placeholder="Message"
                className=" rounded-[10px] w-full outline-none border-[2px] border-[#EBEAED] py-2 pl-4 resize-none mt-3"
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2 items-center ">
                <input type="checkbox" className="accent-[#25DAC5]"></input>
                <p className="text-[14px] text-[#a3a3a3] font-medium">
                  Send me a copy
                </p>
              </div>
              <Button
                bgcolor="25DAC5"
                text="Send"
                w="100"
                h="40"
                hoverBgColor="106b61"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
