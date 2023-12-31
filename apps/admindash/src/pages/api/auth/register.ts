import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import { registerSchema } from "validation";
import prisma from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await registerSchema.safeParseAsync(JSON.parse(req.body));
    console.log(JSON.parse(req.body));
    if (!result.success) {
      return res.status(403).json({
        error: result.error.errors[0].message,
      });
    }

    const { username, email, password } = result.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(402).json({
        error: "User already exist with this email",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const isFirstUser = await prisma.serverConfig.count();
    await prisma.$transaction(async (tx) => {
      const { id } = await tx.user.create({
        data: {
          email,
          name: username,
          password: passwordHash,
          role: isFirstUser === 0 ? "ADMIN" : "STAFF"
        },
      });

      await tx.account.create({
        data: {
          userId: id,
          type: "credentials",
          provider: "credentials",
          providerAccountId: id,
        },
      });


    });
      
    return res.status(201).json({
      message: "User created successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "System error. Please contact support",
    });
  }
}