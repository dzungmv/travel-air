"use client";

import ForgotPasswordCard, {
  ForgotPasswordType,
} from "@/_features/forgot-password/forgot-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [type, setType] = useState<ForgotPasswordType>("email");
  return (
    <section className="grid place-items-center min-h-screen ">
      <section className="md:max-w-[550px] w-full md:border md:border-gray-100 md:rounded-lg md:shadow-md md:py-[47px] px-4 md:px-[40px]">
        <h2 className="text-3xl font-semibold text-center">Forget Password</h2>

        <p className="mt-4 text-gray-500 text-sm text-center">
          Please Select option to send link reset password
        </p>

        <section className="mt-7 space-y-4">
          <ForgotPasswordCard
            active={type === "email"}
            type="email"
            onSelect={() => setType("email")}
          />

          <ForgotPasswordCard
            active={type === "sms"}
            type="sms"
            onSelect={() => setType("sms")}
          />
        </section>

        <Button className="mt-7">Send password</Button>

        <p className="text-sm mt-5 text-end text-gray-500">
          Or back to{" "}
          <Link href="/login" className="font-medium">
            Login
          </Link>
        </p>
      </section>
    </section>
  );
}
