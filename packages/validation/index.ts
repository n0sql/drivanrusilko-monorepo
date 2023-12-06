import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email is invalid").default(""),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .default(""),
});

const registerSchema = z.object({
  username: z.string().min(2, "username is required").default(""),
  email: z.string().email("Email is invalid").default(""),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .default(""),
  acceptTerms: z
    .boolean()
    .default(false)
    .refine((value:any) => value, {
      message: "You must accept the terms and conditions",
    }),
});

export { registerSchema, loginSchema, z };
