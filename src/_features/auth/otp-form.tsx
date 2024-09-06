"use client";

import ChangePasswordDialog from "@/components/change-password-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { otpSchema } from "@/tools/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Input = z.infer<typeof otpSchema>;

export default function OTPForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<Input>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (values: Input) => {
    console.log(values);
    setOpen(true);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-4 space-y-7 grid place-items-center"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="gap-2">
                      <InputOTPSlot
                        index={0}
                        noRounded
                        className="border-transparent border-b-primary"
                      />
                      <InputOTPSlot
                        index={1}
                        noRounded
                        className="border-transparent border-b-primary"
                      />
                      <InputOTPSlot
                        noRounded
                        index={2}
                        className="border-transparent border-b-primary"
                      />
                      <InputOTPSlot
                        index={3}
                        noRounded
                        className="border-transparent border-b-primary"
                      />
                      <InputOTPSlot
                        index={4}
                        noRounded
                        className="border-transparent border-b-primary"
                      />
                      <InputOTPSlot
                        index={5}
                        noRounded
                        className="border-transparent border-b-primary"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <ChangePasswordDialog open={open} onClose={setOpen} />
    </>
  );
}
