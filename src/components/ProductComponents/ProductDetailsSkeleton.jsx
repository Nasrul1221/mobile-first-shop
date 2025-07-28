import { Skeleton } from "../ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <div className="mt-3 w-full">
      <div className="flex flex-col items-center">
        <Skeleton className="rounded-2xl bg-[#F0EEED] max-w-[358px] h-[290px] w-full" />
        <div className="flex gap-5 mt-3 w-full">
          <Skeleton className="max-w-[111px] w-full h-[106px] rounded-2xl" />
          <Skeleton className="max-w-[111px] w-full h-[106px] rounded-2xl" />
          <Skeleton className="max-w-[111px] w-full h-[106px] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
