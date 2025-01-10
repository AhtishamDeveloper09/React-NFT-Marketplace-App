import wallet from "../../assets/images/wallet.png";
import collection from "../../assets/images/collection.png";
import earning from "../../assets/images/earning.png";
import GetSelectCard from "../get-select-card/GetSelectCard";

function HowItWorks() {
  return (
    <div className="py-10 px-[30px] lg:py-20 md:px-10 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px] lg:gap-[60px]">
          <div className="font-workSans text-white">
            <h1 className="text-[28px] lg:text-[38px] font-semibold">
              How It Works
            </h1>
            <p className="mt-[10px] text-[16px] lg:text-[22px] capitalize">
              Find out how to get started
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[20px] md:gap-[30px]">
            <GetSelectCard
              src={wallet}
              alt="Wallet"
              title="Setup Your wallet"
              description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
            <GetSelectCard
              src={collection}
              alt="Collection"
              title="Create Collection"
              description="Upload your work and setup your collection. Add a description, social links and floor price."
            />
            <GetSelectCard
              src={earning}
              alt="Earning"
              title="Start Earning"
              description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
