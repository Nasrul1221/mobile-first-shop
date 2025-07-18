import { Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="grid grid-cols-[1fr_10fr_1fr] grid-rows-2">
        <div className=""></div>
        <div className="row-span-2 bg-[#F0F0F0] rounded-tl-2xl rounded-tr-2xl">
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
        <div className="bg-[#F0F0F0]"></div>
        <div className="bg-[#F0F0F0]"></div>
      </div>
      <div className="bg-[#F0F0F0] py-7 px-8 sm:px-14 md:py-10 md:px-[4.3rem] lg:px-28 flex flex-col sm:flex-row sm:gap-x-20">
        <div className="mb-7">
          <h1 className="font-extrabold text-3xl md:text-4xl">SHOP.CO</h1>
          <p className="opacity-60 text-sm mt-2 mb-5 md:mt-5 md:mb-8 sm:max-w-[248px] sm:w-full">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex gap-x-3">
            <div className="border border-gray-300 rounded-full bg-white w-7 h-7 flex justify-center">
              <img src="/logos/x.svg" width="13" alt="X icon" />
            </div>
            <div className="rounded-full bg-black w-7 h-7 flex justify-center">
              <img src="/logos/facebook.svg" width="17" alt="X icon" />
            </div>
            <div className="border border-gray-300 rounded-full bg-white w-7 h-7 flex justify-center">
              <img src="/logos/instagram.svg" width="13" alt="X icon" />
            </div>
            <div className="border border-gray-300 rounded-full bg-white w-7 h-7 flex justify-center">
              <img src="/logos/github.svg" width="13" alt="X icon" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 md:grid-rows-1 md:grid-cols-4 sm:justify-between">
          <div>
            <h2 className="mb-2">COMPANY</h2>
            <div className="opacity-60 flex flex-col gap-y-1">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
          </div>
          <div>
            <h2 className="mb-2">HELP</h2>
            <div className="opacity-60 flex flex-col gap-y-1">
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className="mb-2">FAQ</h2>
            <div className="opacity-60 flex flex-col gap-y-1">
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payment</p>
            </div>
          </div>
          <div>
            <h2 className="mb-2">RESOURCES</h2>
            <div className="opacity-60 flex flex-col gap-y-1">
              <p>Free eBook</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>YouTube Playlist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] h-full px-8 sm:px-14 md:px-[4.3rem] lg:px-28">
        <div className="w-full h-[1px] bg-gray-300 mb-5"></div>

        <div className="text-center sm:text-left pb-20">
          <p>© 2000-2021, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
