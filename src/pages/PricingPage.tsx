import Button from "../components/Button";
import Header from "../components/Header";

const PricingPage = () => {
  return (
    <div>
      <div className=" w-full bg-[#2F1893] bg-opacity-60- bg-no-repeat bg-cover font-dm-sans">
        <div className="h-full bg-pricing-bg  w-full flex flex-col justify-center items-center">
          <div className="mt-[-37px] py-[60px] max-md:w-full max-md:px-7">
            <Header />
          </div>
          <div className="text-white flex flex-col justify-center items-center w-[586px] h-[146px] max-md:w-full">
            <h2 className="text-[42px] leading-[52px] font-semibold max-md:text-[30px]">
              Plans & Pricing
            </h2>
            <p className="text-[22px] text-center mt-6 leading-8 max-md:text-[14px] ">
              Startup Framework is free forever — you only pay for custom domain
              hosting or to export your site.
            </p>
          </div>
          <div className="flex max-md:flex-col max-lg:flex-col mt-20 items-center gap-7">
            <div className="text-white border-1 border border-[#808080] rounded-[10px] max-md:w-[85%] max-md:flex max-md:flex-col max-md:items-center p-20">
              <h6 className="text-[22px] font-medium">Starter</h6>
              <div className="flex mt-1">
                <p className="text-[58px] font-bold">9.99</p>
                <span className="relative top-3 left-1.5">$</span>
              </div>
              <ul className="flex flex-col gap-3 mt-7 pb-10">
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  2 GB of space
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  14 days of backups
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Social integrations
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Client billing
                </li>
                <li className="text-[#adadad] text-[16px]">Remote access</li>
                <li className="text-[#adadad]">Custom domain</li>
                <li className="text-[#adadad]">24 hours support</li>
                <li className="text-[#adadad]">Admin tools</li>
                <li className="text-[#adadad]">Collaboration tools</li>
                <li className="text-[#adadad]">User management</li>
              </ul>
              <Button
                text="Get Started"
                w="230"
                h="60"
                px="0"
                py="0"
                borderpx="1"
                bordercolor="808089"
                hoverBgColor="E93A7D"
              />
            </div>
            <div className="text-white border-1 border border-[#808080] rounded-[10px] max-md:w-[85%] max-md:flex max-md:flex-col max-md:items-center p-20">
              <h6 className="text-[22px] font-medium">Starter</h6>
              <div className="flex mt-1">
                <p className="text-[58px] font-bold">19.99</p>
                <span className="relative top-3 left-1.5">$</span>
              </div>
              <ul className="flex flex-col gap-3 mt-7 pb-10">
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  2 GB of space
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  14 days of backups
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Social integrations
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Client billing
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Remote access
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Custom domain
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  24 hours support
                </li>
                <li className="text-[#adadad]">Admin tools</li>
                <li className="text-[#adadad]">Collaboration tools</li>
                <li className="text-[#adadad]">User management</li>
              </ul>
              <Button
                text="Get Started"
                w="230"
                h="60"
                px="0"
                py="0"
                borderpx="1"
                bordercolor="808089"
                hoverBgColor="E93A7D"
              />
            </div>
            <div className="text-white border-1 border border-[#808080] rounded-[10px] max-md:w-[85%] max-md:mb-10 max-md:flex max-md:flex-col max-md:items-center p-20">
              <h6 className="text-[22px] font-medium">Starter</h6>
              <div className="flex mt-1">
                <p className="text-[58px] font-bold">49.99</p>
                <span className="relative top-3 left-1.5">$</span>
              </div>
              <ul className="flex flex-col gap-3 mt-7 pb-10">
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  2 GB of space
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  14 days of backups
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Social integrations
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Client billing
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Remote access
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Custom domain
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  24 hours support
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Admin tools
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  Collaboration tools
                </li>
                <li className="relative before:content-['✔'] before:text-[#01fc3f] before:absolute before:left-[-24px]">
                  User management
                </li>
              </ul>
              <Button
                text="Get Started"
                w="230"
                h="60"
                px="0"
                py="0"
                borderpx="1"
                bordercolor="808089"
                hoverBgColor="E93A7D"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
