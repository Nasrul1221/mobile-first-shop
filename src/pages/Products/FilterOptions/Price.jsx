import { useState } from "react";

// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

export default function Price() {
  const [sliderValue, setSliderValue] = useState(null);

  return (
    <Accordion collapsible type="single" defaultValue="slider">
      <AccordionItem value="slider">
        <AccordionTrigger className="text-xl">Price</AccordionTrigger>
        <AccordionContent>
          <Slider
            onValueChange={(value) => setSliderValue(value)}
            sliderValue={sliderValue}
            defaultValue={[5]}
            min={1}
            max={10000}
            step={1}
            className="mt-4"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
