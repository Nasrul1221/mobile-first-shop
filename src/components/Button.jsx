import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-[#F0F0F0] px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-150",
      defaultReversed:
        "bg-black text-white border border-black px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-150",
      whiteBordered:
        "bg-white text-black border px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-150",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Button({ children, className, variant, ...props }) {
  return (
    <button className={clsx(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
