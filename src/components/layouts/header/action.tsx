import { Button } from "@/components/ui/button";
import { cn } from "@/tools/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

type IProps = HTMLAttributes<HTMLDivElement>;

export default function HeaderAction({ className, ...props }: IProps) {
  return (
    <section
      className={cn("flex items-center gap-2 max-w-fit", className)}
      {...props}
    >
      <Link href="/sign-up" replace passHref>
        <Button variant="outline" size="sm">
          Signup
        </Button>
      </Link>
      <Link href="/login" replace passHref>
        <Button size="sm">Login</Button>
      </Link>
    </section>
  );
}
