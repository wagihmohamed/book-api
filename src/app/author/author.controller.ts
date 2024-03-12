import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllAuthors = async (req: Request, res: Response) => {
  const authors = await prisma.author.findMany({});
  res.status(200).json(authors);
};

export const authorController = { getAllAuthors };
