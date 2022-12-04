import { z } from 'zod';

export const SignupSchema = z.object({
  email: z.string().email().max(120),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
  username: z.string().min(3).max(120),
});

export type SignupData = z.infer<typeof SignupSchema>;
