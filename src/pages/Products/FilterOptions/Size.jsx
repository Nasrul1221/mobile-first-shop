// React
import { useState } from "react";

// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Components
import Button from "@/components/Button";

const sizes = [
  {
    size: "XX-Small",
  },
  {
    size: "X-Small",
  },
  {
    size: "Small",
  },
  {
    size: "Medium",
  },
  {
    size: "Large",
  },
  {
    size: "X-Large",
  },
  {
    size: "XX-Large",
  },
  {
    size: "3X-Large",
  },
  {
    size: "4X-Large",
  },
];

export default function Size() {
  const [selectedSize, setSelectedSize] = useState("");

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <Accordion collapsible>
      <AccordionItem>
        <AccordionItem value="sizes">
          <AccordionTrigger className="text-xl">Size</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              // <button
              //   className="bg-[#F0F0F0] px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-150"
              //   style={{
              //     background: size.size === selectedSize && "black",
              //     color: size.size === selectedSize && "white",
              //   }}
              //   onClick={() => handleClick(size.size)}
              // >
              //   {size.size}
              // </button>
              <Button variant="default" onClick={() => handleClick(size.size)}>
                {size.size}
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      </AccordionItem>
    </Accordion>
  );
}
