import noImage from "../../assets/images/no-image.png";
import { Link } from "react-router-dom";
import { NftType } from "../../types/types";

function NFTCards({ item, bgColor }: { item: NftType; bgColor: string }) {
  return (
    <Link
      to={`/nft/${item?.collection}/${item?.contract}/${item?.identifier}`}
      className="flex flex-col items-center md:max-w-[330px] justify-center h-fit"
    >
      <div>
        <img
          className="h-[238px] md:h-[295px] w-full min-w-[315px] md:min-w-[330px] rounded-t-[20px] object-cover"
          src={item?.image_url || noImage}
          alt=""
        />
      </div>

      <div
        className={`${bgColor} text-white h-[164px] md:h-[173px] w-full min-w-[315px] md:w-[330px] max-w-[315px] md:max-w-[330px] rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]`}
      >
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[22px] font-workSans font-semibold leading-[31px]">
              {item?.name}
            </h3>

            <div className="flex gap-[12px]">
              <img
                className="size-[24px] rounded-full"
                src={item?.image_url || noImage}
                alt=""
              />
              <span className="text-[16px] font-spaceMono leading-[22px] capitalize">
                {item.collection}
              </span>
            </div>
          </div>
          <div className="flex justify-between font-spaceMono">
            <div className="flex flex-col gap-[8px]">
              <span className="text-lightTextColor text-[12px] leading-[13px]">
                Price
              </span>
              <span className="text-[12px] md:text-[16px] md:leading-[22px] ">
                1.63 wETH
              </span>
            </div>
            <div className="flex flex-col gap-[8px] text-right">
              <span className="text-lightTextColor text-[12px] leading-[13px] ">
                Higest Bid
              </span>
              <span className="text-[12px] md:text-[16px] leading-[13px] md:leading-[22px] ">
                0.33 ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NFTCards;
