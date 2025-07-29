import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Report from "@/components/Report";

// Icons
import { SlidersVertical } from "lucide-react";

// Components
import Button from "@/components/Button";

// Shadcn UI
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export default function RatingReviews() {
  const { products } = useContext(FilteredProducts);
  const { productID } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productID)
  );
  const [position, setPosition] = useState("latest");

  return (
    <div className="mt-3 w-full flex flex-col items-center">
      <div className="flex justify-between mb-3 w-full">
        <h1 className="text-xl font-bold flex items-center gap-2">
          All Reviews{" "}
          <span className="text-sm opacity-60 font-light">
            ({product.reviews.length})
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <button className="bg-[#F0F0F0] rounded-full p-2">
            <SlidersVertical />
          </button>
          {/* <div className="hidden relative px-5 sm:flex after:content-[''] after:w-2 after:h-2 after:border after:border-black after:border-l-transparent after:border-t-transparent after:rotate-[45deg] after:absolute after:right-0 after:top-1">
            Latest
          </div> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="font-medium">
                {position.charAt(0).toUpperCase() +
                  position.slice(1, position.length)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="latest">
                  Latest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">
                  Newest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="highest">
                  Highest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lowest">
                  Lowest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="defaultReversed">Write a review</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 items-center w-full">
        {product.reviews.map((review) => (
          <Report
            key={review.reviewerEmail}
            rating={review.rating}
            report={review.comment}
            name={review.reviewerName}
            email={review.reviewerEmail}
          />
        ))}
      </div>

      <Button variant="whiteBordered" className="mt-5 py-3 px-8">
        Load More Reviews
      </Button>
    </div>
  );
}

// flex flex-col items-center w-full mt-3 gap-3 md:flex-row
