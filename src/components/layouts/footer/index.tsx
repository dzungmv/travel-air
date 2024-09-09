import { footerRoutes } from "@/tools/constants/router";
import HeaderLogo from "../header/logo";
import EmailForm from "./email-form";
import Link from "next/link";
import { Fragment } from "react";
import Hr from "@/components/ui/hr";
import { Instagram, Linkedin, LucideFacebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section className="max-w-secondary px-4 mx-auto py-[68px]">
      <footer className="grid md:grid-cols-3 lg:grid-cols-[380px_auto_auto_auto] gap-[70px]">
        <div className=" md:col-span-3 lg:col-auto">
          <HeaderLogo />
          <p className="max-w-[268px] mt-10 my-7 text-gray-700 text-sm">
            Similarly, a loan taken out to buy a car may be secured by the car.
            The duration of the loan.
          </p>

          <EmailForm />
        </div>

        {footerRoutes.map((item) => (
          <div key={item.title}>
            <h6 className="font-medium">{item.title}</h6>
            <div className="space-y-3 grid mt-5">
              {item.routes.map((route, index) => (
                <Fragment key={route.name}>
                  <Link
                    href={route.url}
                    className="text-gray-500 text-sm"
                    key={route.name}
                  >
                    {route.name}
                  </Link>
                  {index !== item.routes.length - 1 && (
                    <Hr className="md:hidden" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </footer>

      <Hr className="my-7 hidden md:block" />

      <section className="flex gap-2 mt-10 md:mt-0 items-center flex-col-reverse md:flex-row justify-between">
        <p className="text-gray-600 text-sm">
          Copyright© 2024 jungjung261. All rights reserved
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-500 mb-2">
          <LucideFacebook size={18} />
          <Linkedin size={18} />
          <Twitter size={18} />
          <Instagram size={18} />
        </div>
      </section>
    </section>
  );
}
