import { useState } from "react";
import logo from "../../assets/icons/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import userIcon from "../../assets/icons/user-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="lg:h-[100px] h-[54px] w-full text-white px-[30px] md:px-[50px] py-[15px] lg:py-[20px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-[183px] lg:w-[243px]" src={logo} alt="" />
          </Link>

          <div className="hidden lg:flex gap-[10px] font-medium items-center font-workSans">
            <span className="hover:text-purpleColor cursor-pointer pr-[20px]">
              Marketplace
            </span>
            <span className="hover:text-purpleColor cursor-pointer pr-[20px]">
              Rankings
            </span>
            <span className="hover:text-purpleColor cursor-pointer pr-[20px]">
              Connect a wallet
            </span>

            <button className="bg-purpleColor h-[60px] w-[152px] rounded-[20px] py-[19px] px-[30px] flex items-center gap-2">
              <img src={userIcon} alt="" /> Sign Up
            </button>
          </div>

          <div onClick={() => setOpen(!open)} className="lg:hidden">
            {!open ? <HiMenuAlt3 size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>

        <div
          className={
            open
              ? "fixed lg:hidden top-0 left-0 bg-darkBgColor w-[70%] md:w-[45%] h-screen duration-1000 z-20"
              : "fixed lg:hidden top-0 left-[-100%] h-screen bg-darkBgColor w-[70%] duration-1000 z-20"
          }
        >
          <div className="px-4 py-2 font-workSans font-medium">
            <div className="mt-4 md:mt-6">
              <img className="w-[200px]" src={logo} alt="logo" />
            </div>
            <div className="mt-8 md:mt-10 flex flex-col justify-center gap-7 md:gap-9">
              <span className="text-sm md:text-base">Marketplace</span>
              <span className="text-sm md:text-base">Rankings</span>
              <span className="text-sm md:text-base">Connect a wallet</span>
            </div>

            <div className="mt-8 md:mt-10">
              <button className="bg-purpleColor rounded-2xl py-3 px-7 flex items-center gap-2">
                <img src={userIcon} alt="" /> Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
