export default function BrowseByStyle() {
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[1000px] md:w-full bg-[#F0F0F0] m-3 sm:m-12 md:m-16 p-4 sm:p-6 md:p-16 rounded-lg text-center ">
        <h1 className="font-extrabold text-[32px] md:text-5xl mb-4 md:mb-10">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-rows-4 gap-2  md:grid-cols-3 md:grid-rows-2 md:gap-3 text-left">
          <div className="bg-white h-[170px] sm:h-[209px] md:h-[209px] rounded-lg text-2xl font-semibold md:text-3xl p-[1em] relative cursor-pointer hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-100">
            <p className="absolute z-10 text-1xl font-semibold sm:text-xl lg:text-3xl">
              CASUAL
            </p>
            <img
              alt="A model in casual clothes"
              src={`${import.meta.env.BASE_URL}/casual.png`}
              className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-lg"
            />
          </div>
          <div className="bg-white md:col-span-2 md:h-[209px] rounded-lg text-2xl font-semibold md:text-3xl p-[1em] relative cursor-pointer hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-100">
            <p className="absolute z-10 text-2xl font-semibold sm:text-xl lg:text-3xl">
              Formal
            </p>
            <img
              alt="A model in formal clothes"
              src={`${import.meta.env.BASE_URL}/formal.png`}
              className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-lg"
            />
          </div>
          <div className="bg-white md:col-span-2  md:h-[209px] rounded-lg text-2xl font-semibold md:text-3xl p-[1em] relative cursor-pointer hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-100">
            <p className="absolute z-10 text-2xl font-semibold sm:text-xl lg:text-3xl">
              Party
            </p>
            <img
              alt="A model in party clothes"
              src={`${import.meta.env.BASE_URL}/party.png`}
              className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-lg"
            />
          </div>
          <div className="bg-white md:h-[209px] rounded-lg p-[1em] relative cursor-pointer hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-100">
            <p className="absolute z-10 text-2xl font-semibold sm:text-xl lg:text-3xl">
              Gym
            </p>
            <img
              alt="A model in gym clothes"
              src={`${import.meta.env.BASE_URL}/gym.png`}
              className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// [grid-template-columns:50px_100px_75px]
