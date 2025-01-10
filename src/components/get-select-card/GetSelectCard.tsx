import { GetSelectCardProps } from "../../types/types";

function GetSelectCard({ src, alt, title, description }: GetSelectCardProps) {
  return (
    <div className="bg-[#3B3B3B] flex p-[20px] w-full items-center md:flex-col gap-[20px] text-center rounded-2xl">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px]"
      />
      <div>
        <h1 className="lg:text-[22px] font-workSans text-left md:text-center font-semibold text-white mb-2">
          {title}
        </h1>
        <p className="text-xs md:text-center text-left lg:text-base font-workSans font-normal text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default GetSelectCard;
