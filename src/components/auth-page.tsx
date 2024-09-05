import Image from "next/image";
import { logo } from "../../public";
import Link from "next/link";
import SocialLogin from "./social-login";
import Hr from "./ui/hr";
import LoginForm from "@/_features/login/form";

type IProps = {
  type: "login" | "sign-up";
};

export default function AuthPage({ type }: IProps) {
  return (
    <section className="fixed w-full md:max-w-[456px] px-4 md:px-[40px] md:py-[48px] lg:border border-gray-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:shadow-lg md:rounded-xl">
      {type === "login" ? (
        <div className="flex items-center gap-2 justify-center">
          <Image width={0} height={0} alt="Logo" src={logo} />
          <h1 className="text-3xl font-semibold text-center">
            Get&apos;s started.
          </h1>
        </div>
      ) : (
        <h1 className="text-3xl font-semibold text-center">Sign up</h1>
      )}

      <p className="mt-4 text-[15px] text-gray-500 text-center">
        {type === "login" ? (
          <span>Don&apos;t have an account?</span>
        ) : (
          "Already have an account?"
        )}{" "}
        <Link
          className="text-primary hover:underline font-medium"
          href={type === "login" ? "/sign-up" : "/login"}
        >
          {type === "login" ? "Sign up" : "Login"}
        </Link>
      </p>

      <SocialLogin />

      <div className="flex mt-6 items-center gap-1">
        <Hr className="flex-1" />
        <p className="text-sm text-gray-400">Or login with email</p>
        <Hr className="flex-1" />
      </div>

      <LoginForm />
    </section>
  );
}
