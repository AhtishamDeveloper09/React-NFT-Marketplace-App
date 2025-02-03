import eyeIcon from "../../assets/svg/eye-icon.svg";
import NFTCards from "../nft-cards/NFTCards";
import { useCollection } from "../../pages/collection/useCollection";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { NftType } from "../../types/types";

function DiscoverMoreNfts() {
  const { nfts, error, loading } = useCollection({ limit: 3 });

  if (loading === "pending") {
    return <Loader />;
  }

  return (
    <div className="px-[30px] pt-10 pb-[60px] md:pb-20 md:px-10 lg:py-20 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px] lg:gap-[60px] text-white font-workSans">
          <div className="md:flex justify-between">
            <div>
              <h1 className="text-[28px] lg:text-[38px] font-semibold">
                Discover More NFTs
              </h1>
              <p className="mt-[10px] text-[16px] lg:text-[22px]">
                Explore new trending NFTs
              </p>
            </div>
            <Link
              to="/collection/azukielementals"
              className="hidden md:block content-end"
            >
              <button className="w-[187px] h-[60px] border-2 border-purpleColor rounded-[20px] flex items-center justify-center gap-[12px]">
                <img src={eyeIcon} alt="" />
                <span className="text-white font-semibold">See All</span>
              </button>
            </Link>
          </div>

          {!error ? (
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 justify-items-center">
              {nfts?.map((item: NftType, index: number) => (
                <NFTCards item={item} key={index} bgColor="bg-[#3B3B3B]" />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-14 text-white font-semibold">
              <h3>{error}</h3>
            </div>
          )}

          <Link to="/collection/azukielementals" className="md:hidden">
            <button className="bg-transparent w-full h-[60px] border-[2px] border-purpleColor rounded-[20px] flex items-center justify-center gap-[12px]">
              <img src={eyeIcon} alt="" />
              <span className="text-white font-semibold">See All</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMoreNfts;
