import { IoSearch } from "react-icons/io5";
import NFTCards from "../../components/nft-cards/NFTCards";
import { useCollection } from "./useCollection";
import Loader from "../../components/loader/Loader";
import { NftType } from "../../types/types";

function Collection() {
  const { nfts, error, loading } = useCollection({ limit: 9 });

  if (loading === "pending") {
    return <Loader />;
  }

  return (
    <div>
      <div className="px-[30px] py-10 text-white md:px-[60px] md:py-[60px] lg:px-28 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px] font-workSans">
              <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[51px] capitalize">
                {nfts[0]?.collection}
              </h1>
              <p className="text-[16px] lg:text-[22px]">
                Browse through more than 50k NFTs on the NFT Marketplace.
              </p>
            </div>
            <div className="flex justify-between h-[60px] border border-secondaryBgColor rounded-[20px] w-full px-[20px]">
              <input
                type="search"
                className="block placeholder:text-[16px] placeholder:font-workSans h-full w-full text-[16px] bg-transparent focus:outline-none"
                placeholder="Search your favourite NFTs"
                required
              />
              <button type="submit" className="h-full text-sm font-medium">
                <IoSearch size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-secondaryBgColor w-full" />

      <div className="pt-[10px] px-[30px] md:px-[60px] lg:px-28 text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-4 gap-4 border-b-[2px] border-lightTextColor">
            <h3 className="font-workSans font-semibold lg:text-[22px] text-base">
              NFTs
            </h3>
            <span className="px-[10px] py-[5px] h-[32px] text-[16px] font-spaceMono hidden md:block border-lightTextColor rounded-[20px]">
              302
            </span>
          </div>
        </div>
      </div>

      {!error ? (
        <div className="bg-secondaryBgColor px-[30px] py-10 md:px-[60px] md:pt-[60px] md:pb-20 lg:px-28">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 justify-items-center">
              {nfts?.map((item: NftType, index: number) => (
                <NFTCards item={item} key={index} bgColor="bg-[#2B2B2B]" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-14 text-white font-semibold">
          <h3>{error}</h3>
        </div>
      )}

      <hr className="border border-primaryBgColor" />
    </div>
  );
}

export default Collection;
