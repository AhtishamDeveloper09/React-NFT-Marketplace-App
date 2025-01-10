import { Link } from "react-router-dom";
import { useTrendingCollections } from "./useTrendingCollections";
import Loader from "../loader/loader";
import noImage from "../../assets/images/no-image.png";
import { CollectionType } from "../../types/types";

function TrendingCollectionCards() {
  const { collections, loading, error } = useTrendingCollections();

  if (loading == "pending") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-14">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">
      {collections?.map((item: CollectionType, index: number) => (
        <Link
          to={`/collection/${item?.collection}`}
          key={index}
          className="md:max-w-[330px] max-w-[315px] flex-col gap-[15px] lg:flex"
        >
          <img
            alt=""
            src={item?.image_url || noImage}
            className="w-full bg-cover size-[315px] md:size-[330px] rounded-[20px]"
          />
          <div className="flex flex-col gap-[10px] mt-2">
            <h3 className="size-[22px] font-semibold w-full">{item?.name}</h3>
            <div className="flex gap-[12px]">
              <img
                alt=""
                src={item?.image_url || noImage}
                className=" size-[24px] rounded-full"
              />
              <p className="text-[16px] capitalize">{item?.collection}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TrendingCollectionCards;
