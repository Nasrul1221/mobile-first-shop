// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function Clothes() {
  return (
    <Accordion type="single" collapsible>
      {accordionData.map((e, i) => (
        <AccordionItem key={i} value={e.label}>
          <AccordionTrigger className="opacity-60">{e.label}</AccordionTrigger>
          <AccordionContent>123123123123123123123</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
