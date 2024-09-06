import {
  changePasswordSchema,
  resetPasswordSchema,
} from "@/tools/validations/auth";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import InputPassword from "./ui/input-password";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type IProps = {
  isAuth?: boolean;
  open?: boolean;
  onClose?: Dispatch<SetStateAction<boolean>>;
  triggerName?: string;
  buttonStyles?: string;
};

type ResetInput = z.infer<typeof resetPasswordSchema>;
type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordDialog({
  isAuth = false,
  open,
  buttonStyles,
  triggerName,
  onClose,
}: IProps) {
  const router = useRouter();

  const form = useForm<ChangePasswordInput | ResetInput>({
    resolver: zodResolver(isAuth ? changePasswordSchema : resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      oldPassword: "",
    },
  });

  const onSubmit = (values: ResetInput) => {
    console.log(values);
    toast.success(`${isAuth ? "Changed" : "Reset"} password successfully!`);
    router.push("/login");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {isAuth ? (
        <DialogTrigger className={buttonStyles}>{triggerName}</DialogTrigger>
      ) : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isAuth ? "Change password" : "Reset password"}
          </DialogTitle>
          <DialogDescription>
            Enter your new password below to reset
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {isAuth && (
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old password</FormLabel>
                    <FormControl>
                      <InputPassword placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="*******" {...field} />
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
                  <FormLabel>Confirm new password</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="*******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="!mt-7">Change</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
