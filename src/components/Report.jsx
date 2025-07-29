import clsx from "clsx";

export default function Report({
  rating,
  report,
  name,
  email = "",
  className,
}) {
  return (
    <div
      className={clsx(
        className,
        "border border-gray-200 rounded-xl px-7 py-5 max-w-[400px] w-full"
      )}
    >
      <img
        src={`${import.meta.env.BASE_URL}/ratings/rating-${Math.round(
          rating
        )}0.png`}
        className="w-28"
      />
      <div className="flex gap-x-2 items-center md:text-xl font-bold mt-3">
        <h1>{name}</h1>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5"
        >
          <circle cx="12" cy="12" r="12" fill="#4CAF50" />
          <path
            d="M7 12.5L10.5 16L17 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-gray-400">{report}</p>

      {email && <p className="text-gray-500 break-words">{email}</p>}
    </div>
  );
}
