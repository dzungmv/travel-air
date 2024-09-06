"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import InputPassword from "@/components/ui/input-password";
import { signUpSchema } from "@/tools/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Inputs = z.infer<typeof signUpSchema>;

export default function SignupForm() {
  const router = useRouter();

  const form = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      checked: false,
    },
  });

  const watchChecked = form.watch("checked");

  const onSubmit = (values: Inputs) => {
    console.log("Sign up", values);
    toast.success("Sign up successfully!");
    router.replace("/");
  };

  return (
    <Form {...form}>
      <form className=" space-y-4 mt-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="airtravel@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <InputPassword placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <section className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <FormField
              control={form.control}
              name="checked"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[14px] h-[14px] border border-gray-200 hover:cursor-pointer"
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <p className="text-sm text-gray-600 -mt-1">
              By clicking sign up , you agree to our{" "}
              <Link href="">Term of Service</Link> and{" "}
              <Link href="">Privacy Policy</Link>
            </p>
          </div>
        </section>

        <Button disabled={!watchChecked} className="!mt-7">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
