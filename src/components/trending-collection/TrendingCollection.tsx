import TrendingCollectionCards from "../trending-collection-cards/TrendingCollectionCards";

function TrendingCollections() {
  return (
    <div className="py-10 px-[30px] lg:py-20 md:px-10 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px] lg:gap-[60px] text-white font-workSans">
          <div>
            <h1 className="text-[28px] lg:text-[38px] font-semibold">
              Trending Collection
            </h1>
            <p className="mt-[10px] text-[16px] lg:text-[22px]">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <TrendingCollectionCards />
        </div>
      </div>
    </div>
  );
}

export default TrendingCollections;
