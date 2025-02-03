import { CategoryCardsData } from "../../constants/categoryCardsData";

function BrowseCategories() {
  return (
    <div className="py-10 px-[30px] lg:py-20 md:px-10 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:gap-[60px] font-workSans">
          <h1 className="text-white font-semibold text-[28px] lg:text-[38px]">
            Browse Categories
          </h1>
          <div className="grid justify-center grid-cols-2 gap-5 md:gap-[30px] md:grid-cols-4">
            {CategoryCardsData.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[147px] h-[209px] md:max-w-[150px] lg:max-w-[240px] lg:h-[316px] rounded-t-[20px]"
              >
                <div className="max-h-[142px] lg:max-h-[240px] h-full w-full rounded-t-[20px]">
                  <img
                    src={card?.img}
                    alt={card?.altText}
                    className="h-full w-full object-cover rounded-t-[20px]"
                  />
                </div>
                <div className="h-[67px] w-full md:h-[76px] bg-secondaryBgColor rounded-b-[20px] ">
                  <p className="w-full font-semibold sm:text-[16px] text-sm px-[10px] py-5 lg:pb-[30px] md:px-5 lg:text-[22px] text-white">
                    {card?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
