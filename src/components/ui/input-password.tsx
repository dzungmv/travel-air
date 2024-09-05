"use client";

import { cn } from "@/tools/lib/utils";
import Image from "next/image";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { eyeOff, eyeOn } from "../../../public";

export type InputPasswordProps = InputHTMLAttributes<HTMLInputElement>;

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, ...props }, ref) => {
    const [show, setShow] = useState(false);
    return (
      <div className=" relative">
        <input
          className={cn(
            "h-10 flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-[0.3px] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          type={show ? "text" : "password"}
          ref={ref}
          {...props}
        />

        <Image
          width={0}
          height={0}
          alt=""
          src={show ? eyeOn : eyeOff}
          onClick={() => setShow((prev) => !prev)}
          className="lg:hover:cursor-pointer absolute top-[50%] right-2 translate-y-[-50%]"
        />
      </div>
    );
  }
);

InputPassword.displayName = "Input";

export default InputPassword;
