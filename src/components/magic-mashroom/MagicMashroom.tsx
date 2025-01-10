import shroomi from "../../assets/svg/shroomie.svg";
import eyeIcon from "../../assets/svg/eye-icon.svg";
import { useState, useEffect } from "react";
import AuctionTimer from "../auction-timer/AuctionTimer";

const MagicMushroom = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours -= 1;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="relative h-[590px] md:h-[630px] lg:h-[640px] bg-cover bg-center bg-no-repeat bg-mashroom-mobile md:bg-mashroom-desktop">
      <div className="absolute inset-0 bg-gradient-to-t from-[#975DE7] to-transparent">
        <div className="pb-10 pt-[110px] px-[30px] md:pt-[360px] md:pb-[60px] md:px-[40px] lg:px-28">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-[30px]  ">
              <button className="h-[44px] w-[151px] flex justify-center items-center gap-[12px] bg-[#3B3B3B] rounded-[20px]">
                <img src={shroomi} alt="" />
                <span className="text-white font-workSans"> Shroomie</span>
              </button>
              <h1 className="text-[38px] text-white font-workSans lg:text-[51px] lg:leading-[56px] font-semibold leading-[45px]">
                Magic Mashrooms
              </h1>
              <div className="block md:hidden">
                <AuctionTimer />
              </div>
              <button className="bg-white w-full md:w-[198px] h-[60px] rounded-[20px] flex items-center justify-center gap-[12px]">
                <img src={eyeIcon} alt="" />
                <span className="text-[#2B2B2B] font-semibold">See NFT</span>
              </button>
            </div>
            <div className="hidden md:block content-end">
              <AuctionTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicMushroom;
