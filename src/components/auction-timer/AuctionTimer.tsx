import { useEffect, useState } from "react";

function AuctionTimer({ placeBidBtn }: { placeBidBtn?: boolean }) {
  const initialTime = {
    hours: 59,
    minutes: 59,
    seconds: 59,
  };
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>(initialTime);

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
          return initialTime;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, initialTime]);

  return (
    <div className="rounded-[20px] w-full flex flex-col items-center justify-center gap-[30px] md:max-w-[295px] bg-[#3B3B3B]/60 text-white p-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-sm md:text-xs font-normal font-spaceMono text-left">
          Auction ends in:
        </h1>
        <div className="flex gap-[10px] text-3xl md:text-4xl lg:text-[38px] font-spaceMono leading-[45px] font-bold">
          <p className="flex flex-col gap-[5px]">
            {String(timeLeft.hours).padStart(2, "0")}
            <span className="text-xs font-normal">Hours</span>
          </p>
          <span>:</span>
          <p className="flex flex-col gap-[5px]">
            {String(timeLeft.minutes).padStart(2, "0")}
            <span className="text-xs font-normal">Minutes</span>
          </p>
          <span>:</span>
          <p className="flex flex-col gap-[5px]">
            {String(timeLeft.seconds).padStart(2, "0")}
            <span className="text-xs font-normal">Seconds</span>
          </p>
        </div>
      </div>
      {placeBidBtn && (
        <button className="font-semibold w-full font-workSans h-[60px] flex items-center justify-center bg-purpleColor rounded-[20px]">
          Place Bid
        </button>
      )}
    </div>
  );
}

export default AuctionTimer;
