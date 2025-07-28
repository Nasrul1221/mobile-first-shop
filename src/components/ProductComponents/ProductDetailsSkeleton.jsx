import { Skeleton } from "../ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <div className="mt-3 w-full">
      <div className="flex flex-col items-center md:flex-row">
        <Skeleton className="rounded-2xl max-w-[358px] w-full h-[290px] md:max-w-[444px] md:h-[530px] md:order-2" />
        <div className="grid gap-2 grid-cols-3 mt-3 md:mt-0 md:mr-3 md:order-1 md:grid-rows-3 md:grid-cols-1">
          <Skeleton className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-2xl cursor-pointer " />
          <Skeleton className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-2xl cursor-pointer " />
          <Skeleton className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-2xl cursor-pointer " />
        </div>
      </div>
    </div>
  );
}
