import Hr from "@/components/ui/hr";
import { headerRouter } from "@/tools/constants/router";
import { cn } from "@/tools/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, HTMLAttributes } from "react";

type IProps = HTMLAttributes<HTMLDivElement>;

export default function HeaderNav({ className, ...props }: IProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-7", className)} {...props}>
      {headerRouter.map((route) => (
        <Fragment key={route.name}>
          <Link
            className={cn(
              "font-medium text-[15px]",
              route.url === pathname ? "text-primary" : "text-gray-700"
            )}
            href={route.url}
          >
            {route.name}
          </Link>
          <Hr className="lg:hidden" />
        </Fragment>
      ))}
    </nav>
  );
}
