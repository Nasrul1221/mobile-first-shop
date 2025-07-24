// React
import { useState } from "react";

// Shadcn UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icons
import { Check } from "lucide-react";

const colors = [
  {
    color: "#00C12B",
    borderColor: "#009A22",
  },
  {
    color: "#F50606",
    borderColor: "#C00404",
  },
  {
    color: "#F5DD06",
    borderColor: "#C4B102",
  },
  {
    color: "#F57906",
    borderColor: "#C46004",
  },
  {
    color: "#06CAF5",
    borderColor: "#04A0C4",
  },
  {
    color: "#063AF5",
    borderColor: "#042DC4",
  },
  {
    color: "#7D06F5",
    borderColor: "#6404C4",
  },
  {
    color: "#F506A4",
    borderColor: "#C40485",
  },
  {
    color: "#FFFFFF",
    borderColor: "#CCCCCC",
  },
  {
    color: "#000000",
    borderColor: "#000000",
  },
];

export default function Colors() {
  const [activeColor, setActiveColor] = useState("");

  const handleClick = (color) => {
    setActiveColor(color);
  };

  return (
    <Accordion collapsible>
      <AccordionItem value="colors">
        <AccordionTrigger className="text-xl">Colors</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-1">
          {colors.map((color) => (
            <div
              className={`w-[37px] h-[38px] rounded-full border transform flex justify-center items-center`}
              style={{
                background: `${color.color}`,
                borderColor: `${color.borderColor}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = color.borderColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = color.color)
              }
              onClick={() => handleClick(color.color)}
            >
              {activeColor === color.color && (
                <Check
                  className="text-white"
                  style={{ color: `${color.color === "#FFFFFF" && "black"}` }}
                />
              )}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
