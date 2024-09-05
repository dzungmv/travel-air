import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z.string().min(1, { message: "Please enter password" }),
  remember: z.any(),
});
