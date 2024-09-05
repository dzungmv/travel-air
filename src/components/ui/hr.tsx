import { cn } from "@/tools/lib/utils";
import { HTMLAttributes } from "react";

type IProps = HTMLAttributes<HTMLDivElement>;

export default function Hr({ className, ...props }: IProps) {
  return (
    <div className={cn("w-full h-[1px] bg-gray-200", className)} {...props} />
  );
}
