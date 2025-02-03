import { FaLinkedin, FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

import logo from "../../assets/svg/logo.svg";
import message from "../../assets/svg/envelope.svg";

function Footer() {
  return (
    <div className="py-10 px-[30px] md:px-10 lg:px-28 bg-secondaryBgColor">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-5">
            <img src={logo} alt="logo" />
            <p className="text-lightGray text-base font-normal font-workSans">
              NFT marketplace UI created with Anima for Figma
            </p>
            <p className="text-lightGray text-base font-normal font-workSans">
              Join our Community
            </p>
            <div className="flex gap-3 text-lightGray">
              <FaYoutube size={25} />
              <FaDiscord size={25} />
              <FaLinkedin size={25} />
              <FaTwitter size={25} />
            </div>
          </div>

          <div className="flex flex-col lg:mx-auto items-start gap-5">
            <h2 className="font-spaceMono font-bold text-2xl text-white">
              Explore
            </h2>
            <p className="text-lightGray text-base font-normal font-workSans">
              Marketplace
            </p>
            <p className="text-lightGray text-base font-normal font-workSans">
              Rankings
            </p>
            <p className="text-lightGray text-base font-normal font-workSans">
              Connect a wallet
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h2 className="font-spaceMono font-bold text-2xl text-white">
              Join our weekly digest
            </h2>
            <p className="text-lightGray text-base font-normal font-workSans">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="hidden items-center lg:w-full w-fit md:flex bg-white rounded-[20px]">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-5 py-3 border-0 rounded-l-2xl font-workSans placeholder-primaryBgColor"
              />
              <button className="px-8 py-3 bg-purpleColor rounded-[20px] text-white rounded-r-2xl font-workSans">
                Subscribe
              </button>
            </div>

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full block md:hidden px-5 py-4 border-0 rounded-[20px] font-workSans placeholder-primaryBgColor"
            />
            <button className="px-8 py-4 flex items-center justify-center gap-2 md:hidden bg-purpleColor rounded-[20px] text-white w-full rounded-r-2xl font-workSans">
              <img src={message} alt="message" /> Subscribe
            </button>
          </div>
        </div>
        <div>
          <div className="w-full border-t-2 border-white rounded-full mt-6" />
          <div className="mt-4 text-lightGray text-left">
            &copy; NFT Marketplace - Created by Ahtisham ul Haq
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
