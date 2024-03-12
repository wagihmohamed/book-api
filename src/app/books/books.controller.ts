import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({});
  res.status(200).json(books);
};

const createBook = async (req: Request, res: Response) => {
  const { title, description, pages, createdAt, authorId } = req.body;
  const createdBook = await prisma.book.create({
    data: {
      title,
      description,
      pages,
      createdAt,
      authorId,
    },
    include: {
      author: true,
    },
  });
  return res.status(201).json(createdBook);
};

export const booksController = { getAllBooks, createBook };
