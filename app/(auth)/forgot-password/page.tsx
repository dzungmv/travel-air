"use client";

import ForgotPasswordCard, {
  ForgotPasswordType,
} from "@/_features/forgot-password/forgot-card";
import ForgotPasswordSubmitDialog from "@/_features/forgot-password/submit-dialog";
import AuthLabel from "@/components/auth-label";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [type, setType] = useState<ForgotPasswordType>("email");

  return (
    <section className="grid place-items-center min-h-screen ">
      <section className="md:max-w-[550px] w-full md:border md:border-gray-100 md:rounded-lg md:shadow-md md:py-[47px] px-4 md:px-[40px]">
        <AuthLabel
          title="Forget Password"
          description="Please Select option to send link reset password"
        />

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

        <ForgotPasswordSubmitDialog type={type} />

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
