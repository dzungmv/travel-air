import { cn } from "@/tools/lib/utils";
import { X } from "lucide-react";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

type IProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    size?: number;
    open: boolean;
    onClose: () => void;
    header: ReactNode;
  };

export default function Drawer({
  size = 100,
  open,
  onClose,
  children,
  header,
  ...props
}: IProps) {
  return (
    <section
      className={cn(
        "fixed p-4 top-0 bottom-0 left-0 bg-white transition-all duration-300 ease-in-out",
        open ? "translate-x-0" : "translate-x-[-100%]"
      )}
      style={{
        width: `${size}%`,
      }}
      {...props}
    >
      <section className="flex items-center justify-between">
        {header}
        <X onClick={onClose} />
      </section>
      {children}
    </section>
  );
}
