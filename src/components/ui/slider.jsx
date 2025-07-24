import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    {
      className,
      onValueChange,
      sliderValue,
      defaultValue,
      range = false,
      ...props
    },
    ref
  ) => {
    const [isActive, setIsActive] = React.useState(false);
    const [centerPoint, setCenterPoint] = React.useState(null);
    const thumbRef = React.useRef();
    const contRef = React.useRef();

    const handleOnValueChange = (value) => {
      if (thumbRef.current) {
        const contCoor = contRef.current.getBoundingClientRect();
        const thumbCoor = thumbRef.current.getBoundingClientRect();

        const thumbCenter = thumbCoor.left + thumbCoor.width / 2;
        const containerLeft = contCoor.left;

        const relativeX = thumbCenter - containerLeft;

        setCenterPoint(relativeX);
      }

      onValueChange?.(value ? value : defaultValue);
    };

    return (
      <div ref={contRef}>
        <SliderPrimitive.Root
          onPointerDown={() => {
            setIsActive(true);
            handleOnValueChange();
          }}
          onPointerUp={() => setIsActive(false)}
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
          onValueChange={handleOnValueChange}
          defaultValue={defaultValue}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            ref={thumbRef}
            className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          />
          {range && (
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          )}
          <div
            className={`w-5 h-5 absolute flex justify-center items-center font-bold`}
            style={{
              left: `${centerPoint}px`,
              top: "12px",
              transform: "translateX(-50%)",
              opacity: `${isActive ? 1 : 0}`,
            }}
          >
            ${sliderValue}
          </div>
        </SliderPrimitive.Root>
      </div>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
