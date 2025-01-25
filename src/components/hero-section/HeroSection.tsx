import { Link } from "react-router-dom";
import roketLaunch from "../../assets/svg/rocket-launch.svg";
import noImage from "../../assets/images/no-image.png";
import { useAppSelector } from "../../hooks/reduxHooks";

function HeroSection() {
  const collections = useAppSelector(
    (state) => state?.collections?.collections
  );

  if (collections && collections.length > 0) {
    return (
      <div className="py-10 px-[30px] md:py-20 md:px-10 lg:px-28">
        <div className="container mx-auto">
          <div className="md:hidden flex flex-col items-center gap-[30px]">
            <div className="space-y-[10px]">
              <h1 className="text-3xl font-semibold font-workSans text-white">
                Discover Digital Art & Collect NFTs
              </h1>
              <p className="font-workSans text-white">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <Link
              to={`/collection/${collections[1].collection}`}
              className="max-w-[315px] max-h-[315px] w-full h-full rounded-[20px] bg-[#3B3B3B]"
            >
              <img
                src={collections[1].image_url || noImage}
                alt=""
                className="max-h-[206px] w-full h-full object-cover rounded-t-[20px]"
              />
              <div className="pt-[20px] px-[20px]">
                <h3 className="text-2xl font-semibold font-workSans text-white">
                  {collections[1].name}
                </h3>
                <div className="flex items-center gap-4 py-4">
                  <img
                    src={collections[1].image_url || noImage}
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="text-white font-workSans capitalize">
                    {collections[1].collection}
                  </p>
                </div>
              </div>
            </Link>
            <div className="py-3 w-full mx-auto text-center">
              <button className="flex w-full max-w-[315px] justify-center items-center text-white font-semibold px-12 gap-3 md:max-w-[224px] h-[60px] bg-[#A259FF] rounded-[20px]">
                <img src={roketLaunch} alt="" /> Get Started
              </button>
            </div>
            <div className="flex gap-[30px] font-spaceMono text-white">
              <div className="flex flex-col rounded-[20px] w-[85px]">
                <span className="font-bold text-[22px]">240k+</span>
                <span className="font-workSans text-[16px]">Total Sale</span>
              </div>
              <div className="flex flex-col rounded-[20px] w-[85px]">
                <span className="font-bold text-[22px]">100k+</span>
                <span className="font-workSans text-[16px]">Auctions</span>
              </div>
              <div className="flex flex-col rounded-[20px] w-[85px]">
                <span className="font-bold text-[22px]">240k+</span>
                <span className="font-workSans text-[16px]">Artists</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-[30px]">
            <div className="flex flex-col gap-5 w-1/2 lg:gap-[30px]">
              <div className="space-y-5">
                <h1 className="font-semibold font-workSans text-[38px] leading-[45px] lg:text-[67px] lg:leading-[73px] text-white">
                  Discover Digital Art & Collect NFTs
                </h1>
                <p className="lg:text-2xl font-workSans text-white">
                  NFT Marketplace UI Created With Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <button className="flex w-full max-w-[315px] justify-center items-center text-white font-semibold px-12 gap-3 md:max-w-[224px] h-[60px] bg-[#A259FF] rounded-[20px]">
                <img src={roketLaunch} alt="" /> Get Started
              </button>
              <div className="flex gap-[30px] font-spaceMono text-white">
                <div className="flex flex-col rounded-[20px] w-[90px] lg:w-[150px] ">
                  <span className="font-bold text-[22px] lg:text-[28px]">
                    240k+
                  </span>
                  <span className="font-workSans text-[16px] lg:text-[24px]   ">
                    Total Sale
                  </span>
                </div>
                <div className="flex flex-col rounded-[20px] w-[90px] lg:w-[150px] ">
                  <span className="font-bold text-[22px] lg:text-[28px]">
                    100k+
                  </span>
                  <span className="font-workSans text-[16px] lg:text-[24px] ">
                    Auctions
                  </span>
                </div>
                <div className="flex flex-col rounded-[20px] w-[90px] lg:w-[150px] ">
                  <span className="font-bold text-[22px] lg:text-[28px]  ">
                    240k+
                  </span>
                  <span className="font-workSans text-[16px] lg:text-[24px] ">
                    Artists
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-1/2">
              <Link
                to={`/collection/${collections[0].collection}`}
                className="w-full h-full rounded-[20px] bg-[#3B3B3B] max-w-[330px] max-h-[330px] lg:max-w-[510px] lg:max-h-[510px]"
              >
                <img
                  src={collections[0].image_url || noImage}
                  className="max-h-[221px] lg:max-h-[401px] w-full h-full object-cover rounded-t-[20px]"
                />
                <div className="pt-[20px] px-[20px] ">
                  <h3 className="text-2xl font-semibold font-workSans text-white">
                    {collections[0].name}
                  </h3>
                  <div className="flex items-center gap-4 py-4">
                    <img
                      src={collections[0].image_url || noImage}
                      className="w-[24px] h-[24px] rounded-full"
                    />
                    <p className="text-white text-base font-workSans font-normal capitalize">
                      {collections[0].collection}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
