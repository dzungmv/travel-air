import Hr from "@/components/ui/hr";
import { Bell, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Drawer from "../../ui/drawer";
import HeaderAction from "./action";
import HeaderLogo from "./logo";
import HeaderNav from "./nav";

export default function PersonalNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex items-center gap-4 text-[15px]">
        <Link href="" className="text-gray-700 font-medium hidden lg:block">
          USD
        </Link>
        <Link href="" className="text-gray-700 font-medium hidden lg:block">
          FAQ
        </Link>
        <Bell size={18} className="text-gray-700" />
        <div className="w-[1px] h-5 bg-gray-400 hidden lg:block" />
        <HeaderAction className="hidden lg:flex" />
        <Menu className="lg:hidden" onClick={() => setOpen(true)} />
      </section>

      <Drawer
        open={open}
        header={<HeaderLogo />}
        onClose={() => setOpen(false)}
      >
        <HeaderAction className="my-7" />

        <HeaderNav className="flex-col items-start gap-2 mt-5 mb-2" />

        <section className="grid gap-2 mb-5">
          <Link href="" className="text-gray-700 text-[15px] font-medium">
            USD
          </Link>
          <Hr />
          <Link href="" className="text-gray-700 font-medium text-[15px]">
            FAQ
          </Link>
        </section>
      </Drawer>
    </>
  );
}
