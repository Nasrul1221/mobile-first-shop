import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col place-self-center hover:bg-gray-50 transition-colors duration-150 rounded-lg cursor-pointer w-full">
      <Skeleton className="w-full h-[180px] md:h-[295px] rounded-lg " />
      <div className="flex flex-col text-left space-y-2">
        <Skeleton className="w-full h-[10px] mt-2" />
        <div className="flex items-center space-x-2">
          <Skeleton className="w-[87px] h-[10px] sm:w-[95px] md:w-[106px]" />
        </div>
        <strong className="text-xl"></strong>
      </div>
    </div>
  );
}
