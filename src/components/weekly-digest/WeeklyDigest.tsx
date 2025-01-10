import weeklyDigest from "../../assets/images/weekly-digest.png";
import message from "../../assets/svg/envelope.svg";

function WeeklyDigest() {
  return (
    <div className="px-[30px] py-10 md:px-10 md:pb-20 lg:px-28">
      <div className="container mx-auto">
        <div className="md:bg-[#3B3B3B] text-white flex flex-col items-center justify-between md:items-center md:flex-row md:gap-[60px] rounded-[20px] md:px-[40px] md:py-[30px] lg:p-[60px]">
          <div className="w-full">
            <img
              src={weeklyDigest}
              alt="image"
              className="lg:w-[425px] lg:h-[310px] md:w-[300px] md:h-[280px] object-cover rounded-[20px]"
            />
          </div>
          <div className="w-full">
            <h1 className="font-workSans my-2 md:my-0 lg:py-1 text-[28px] font-bold lg:leading-[45px] lg:text-[38px]">
              Join our weekly digest
            </h1>
            <p className="font-workSans my-2 md:my-0 lg:py-6 lg:text-[22px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="hidden lg:flex items-center lg:my-1 lg:w-full bg-white rounded-[20px]">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-5 py-3 border-0 rounded-l-2xl font-workSans placeholder-[#2B2B2B]"
              />
              <button className="px-8 py-3 flex items-center justify-center gap-2 bg-[#A259FF] rounded-[20px] text-white rounded-r-2xl font-workSans">
                <img src={message} alt="message" /> Subscribe
              </button>
            </div>

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full block my-2 lg:hidden md:px-[20px] py-[10px] px-5 mt-5 border-0 rounded-[20px] text-base font-workSans placeholder-[#2B2B2B]"
            />
            <button className="lg:hidden px-8 py-[10px] flex items-center justify-center gap-2 md:px-[20px] bg-[#A259FF] rounded-[20px] text-white w-full rounded-r-2xl font-workSans">
              <img src={message} alt="message" /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyDigest;
