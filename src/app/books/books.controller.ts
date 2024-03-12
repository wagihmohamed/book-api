import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });
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
  });
  res.status(201).json(createdBook);
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const deletedBook = await prisma.book.delete({
    where: {
      id: Number(bookId),
    },
  });
  res.status(200).json(deletedBook);
};

export const booksController = { getAllBooks, createBook, deleteBook };
