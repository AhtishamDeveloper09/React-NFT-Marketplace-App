import noImage from "../../assets/images/no-image.png";
import AuctionTimer from "../../components/auction-timer/AuctionTimer";
import { useNftDetails } from "./useNftDetails";
import { CiGlobe } from "react-icons/ci";
import Loader from "../../components/loader/Loader";

function NftDetails() {
  const { nft, loading, error, collection } = useNftDetails();

  if (loading == "pending") {
    return <Loader />;
  }

  return (
    <div>
      <img
        src={nft?.display_image_url || noImage}
        className="w-full h-[320px] md:h-[420px] lg:h-[560px] object-contain"
        alt=""
      />

      <div className="px-[30px] py-10 md:px-[60px] lg:px-28">
        <div className="conatiner mx-auto">
          {!error ? (
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-[20px] md:gap-[30px] text-white font-workSans md:w-1/2">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[28px] md:text-[38px] lg:text-[51px] font-semibold">
                    {nft?.name}
                  </h1>
                  <span className="text-lightTextColor font-medium text-[16px] lg:text-[22px]">
                    Minted on {nft?.updated_at?.split("T")[0]}
                  </span>
                </div>

                <div className="block md:hidden">
                  <AuctionTimer placeBidBtn={true} />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <span className="font-spaceMono font-medium text-[16px] text-lightTextColor lg:text-[22px]">
                    Created By
                  </span>
                  <div className="flex items-center gap-[12px]">
                    <img
                      className="size-[24px] rounded-full"
                      src={nft?.image_url || noImage}
                      alt=""
                    />
                    <span className="text-[16px] lg:text-[22px] capitalize">
                      {collection}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <span className="font-spaceMono font-medium text-[16px] text-lightTextColor lg:text-[22px]">
                    Description
                  </span>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[16px] lg:text-[22px]">
                      {nft?.description || "Description not availabe."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <span className="font-spaceMono font-medium text-[16px] text-lightTextColor lg:text-[22px]">
                    Details
                  </span>
                  <div className="flex items-center gap-[10px]">
                    <CiGlobe size={25} color="#858584" />
                    <a
                      href={nft?.opensea_url}
                      target="_blank"
                      className="text-[16px] lg:text-[22px] hover:text-purpleColor"
                    >
                      View on OpenSea
                    </a>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <CiGlobe size={25} color="#858584" />
                    <span className="text-[16px]  lg:text-[22px]">
                      View Orignal
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <span className="font-spaceMono font-mediuem text-[16px] text-lightTextColor lg:text-[22px]">
                    Tags
                  </span>

                  <div className="flex flex-col lg:flex-row gap-[20px]">
                    <div className="py-[12px] px-[30px] bg-secondaryBgColor uppercase font-semibold w-fit rounded-[20px]">
                      Animation
                    </div>
                    <div className="py-[12px] px-[30px] bg-secondaryBgColor uppercase font-semibold w-fit rounded-[20px]">
                      NFT
                    </div>
                    <div className="py-[12px] px-[30px] bg-secondaryBgColor uppercase font-semibold w-fit rounded-[20px]">
                      Illustration
                    </div>
                    <div className="py-[12px] px-[30px] bg-secondaryBgColor uppercase font-semibold w-fit rounded-[20px]">
                      Art
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex justify-end w-1/2">
                <AuctionTimer placeBidBtn={true} />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-14 text-white font-semibold">
              <h3>{error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NftDetails;
