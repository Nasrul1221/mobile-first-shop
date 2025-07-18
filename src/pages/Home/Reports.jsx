import Report from "../../components/Report";

export default function Reports() {
  return (
    <section className="">
      <div className="flex justify-between items-center px-5 sm:px-12 md:px-20 lg:px-32">
        <h1 className="text-[32px] sm:text-4xl md:text-[42px] lg:text-5xl font-extrabold">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-x-5">
          <div className="bg-transparent rounded-full p-2 hover:bg-gray-100 transition-colors duration-150">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4L8 12L16 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="bg-transparent rounded-full p-2 hover:bg-gray-100 transition-colors duration-150">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4L16 12L8 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-3 px-5 sm:px-12 md:px-20 lg:px-32 mt-4 md:mt-7 ">
        <Report
          rating={50}
          name="Sarah M."
          report="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        />
        <Report
          rating={50}
          name="Sarah M."
          report="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          className="hidden sm:block"
        />
        <Report
          rating={50}
          name="Sarah M."
          report="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          className="hidden md:block"
        />
      </div>
    </section>
  );
}
