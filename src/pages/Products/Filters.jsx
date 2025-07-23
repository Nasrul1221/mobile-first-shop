// Icons
import clsx from "clsx";
import { SlidersVertical } from "lucide-react";

// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const accordionData = [
  {
    label: "T-Shirts",
  },
  {
    label: "Shorts",
  },
  {
    label: "Shirts",
  },
  {
    label: "Hoodie",
  },
  {
    label: "Jeans",
  },
];

export default function Filters({ className, isOpen, handleClose }) {
  const [sliderValue, setSliderValue] = useState(null);
  return (
    <div className="md:w-[295px]">
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-25 md:hidden"></div>
      )}
      <section
        className={clsx(
          className,
          `${
            isOpen ? "translate-y-0" : "translate-y-full"
          } overflow-y-auto max-h-[calc(100vh-9rem) p-4 rounded-t-xl fixed bottom-0 left-0 right-0 top-32 z-50 transform transition-transform duration-300 md:transform-none md:transition-none md:static md:block md:w-full bg-white md:rounded-xl md:border ease-in`
        )}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl">Filters</h1>
          <button className="md:hidden" onClick={handleClose}>
            Close
          </button>
          <SlidersVertical className="hidden md:block opacity-40" />
        </div>

        <Accordion type="single" collapsible>
          {accordionData.map((e, i) => (
            <AccordionItem key={i} value={e.label}>
              <AccordionTrigger className="opacity-60">
                {e.label}
              </AccordionTrigger>
              <AccordionContent>123123123123123123123</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div>
          <Slider
            onValueChange={(value) => setSliderValue(value)}
            value={sliderValue}
            defaultValue={[5]}
          />
        </div>
      </section>
    </div>
  );
}
