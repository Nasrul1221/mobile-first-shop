// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const styles = [
  {
    style: "Casual",
  },
  {
    style: "Formal",
  },
  {
    style: "Party",
  },
  {
    style: "Gym",
  },
];

export default function DressStyle() {
  return (
    <Accordion collapsible>
      <AccordionItem value="dressStyle">
        <AccordionTrigger className="text-xl">Dress Style</AccordionTrigger>
        <AccordionContent>
          <Accordion collapsible type="single">
            {styles.map((style) => (
              <AccordionItem value={style.style}>
                <AccordionTrigger className="opacity-60">
                  {style.style}
                </AccordionTrigger>
                <AccordionContent>123123123</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
