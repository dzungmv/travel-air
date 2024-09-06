import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z.string().min(1, { message: "Please enter password" }),
  remember: z.any(),
});

export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter first name" }),
  lastName: z.string().min(1, { message: "Please enter last name" }),
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .refine(
      (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value
        ),
      "Password must be at least one special character, number and uppercase letter"
    ),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  checked: z.literal<boolean>(true, {
    errorMap: () => ({ message: "Custom message here" }),
  }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, {
    message: "Please enter phone number or email address",
  }),
});

export const otpSchema = z.object({
  otp: z.string().min(1, { message: "Please enter otp" }),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .max(100)
      .refine(
        (value) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          ),
        "Password must be at least one special character, number and uppercase letter"
      ),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: "Please enter old password" }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .max(100)
      .refine(
        (value) =>
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          ),
        "Password must be at least one special character, number and uppercase letter"
      ),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
