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
