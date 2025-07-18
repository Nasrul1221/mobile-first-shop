import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="grid grid-cols-[1fr_10fr_1fr] grid-rows-2">
        <div className=""></div>
        <div className="row-span-2 bg-gray-300 rounded-tl-2xl rounded-tr-2xl">
          <div className="bg-black rounded-2xl py-7 px-5 md:py-10 md:px-14 leading-tight flex flex-col items-center md:flex-row md:justify-between">
            <h1 className="text-white font-extrabold text-[32px] sm:text-4xl md:text-[40px] mb-4 max-w-[551px] w-full">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <div className="flex flex-col gap-y-2 max-w-[349px] w-full">
              <div className="py-2 px-4 rounded-full bg-white flex items-center gap-x-2">
                <Mail className="text-gray-300 w-5" />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="outline-none w-full"
                />
              </div>
              <button className="text-black px-6 py-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-150 w-full">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="bg-gray-300"></div>
        <div className="bg-gray-300"></div>
      </div>
      <div className="bg-gray-300 h-[500px]">123</div>
    </footer>
  );
}
