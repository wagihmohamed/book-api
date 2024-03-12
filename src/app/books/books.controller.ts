import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({});
  console.log({ books });

  res.status(200).json(books);
};

export const booksController = { getAllBooks };
