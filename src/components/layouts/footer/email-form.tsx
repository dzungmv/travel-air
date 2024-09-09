"use client";

import { Form, FormField } from "@/components/ui/form";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

export default function EmailForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form className=" rounded-full w-fit px-4 gap-2 pr-1 border border-gray-200 h-[45px] flex items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <input
              className="border-none outline-none flex-1"
              placeholder="Enter your email"
              {...field}
            />
          )}
        />

        <button
          disabled={!form.watch("email")}
          className="hover:cursor-pointer disabled:opacity-50 disabled:hover:cursor-not-allowed lg:hover:opacity-75 w-[33px] h-[33px] text-white grid place-items-center rounded-full bg-primary"
        >
          <Send size={18} />
        </button>
      </form>
    </Form>
  );
}
