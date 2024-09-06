import OTPForm from "@/_features/auth/otp-form";
import AuthLabel from "@/components/auth-label";
import Link from "next/link";

type IProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: Record<string, any>;
};

export default function Identify({ searchParams }: IProps) {
  const info = searchParams?.id;

  return (
    <section className="min-h-screen w-full grid place-items-center">
      <section className="md:max-w-[550px] w-full md:border border-gray-200 md:shadow-md md:rounded-lg p-10">
        <AuthLabel
          title="OTP verification"
          description={`We have send code to ${info}`}
        />

        <p className="text-sm text-gray-500 text-center mt-7">
          Enter code here
        </p>

        <OTPForm />

        <p className="mt-6 text-sm text-gray-500">
          Did&apos;t receive code? <Link href="">Resend</Link>
        </p>
      </section>
    </section>
  );
}
