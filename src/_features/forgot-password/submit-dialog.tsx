"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ForgotPasswordType } from "./forgot-card";
import { z } from "zod";
import { forgotPasswordSchema } from "@/tools/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type IProps = {
  type: ForgotPasswordType;
};

type Input = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordSubmitDialog({ type }: IProps) {
  const router = useRouter();

  const form = useForm<Input>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: Input) => {
    console.log(values);

    router.push(`/identify?id=${values?.email}`);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full mt-7 bg-primary text-white text-sm h-10 rounded-md font-medium">
        Send password
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Forgot password</DialogTitle>
          <DialogDescription>
            Enter your {type === "email" ? "email address" : "phone number"}{" "}
            below to get verification
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="mt-7 space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email address or phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button>Send</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
