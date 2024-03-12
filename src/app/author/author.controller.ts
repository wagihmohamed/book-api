import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllAuthors = async (req: Request, res: Response) => {
  const authors = await prisma.author.findMany({});
  res.status(200).json(authors);
};

const createAuthor = async (req: Request, res: Response) => {
  const { name, nationality, dateOfBirth } = req.body;
  const author = await prisma.author.create({
    data: {
      dateOfBirth,
      name,
      nationality,
    },
  });
  res.status(201).json(author);
};

const deleteAuthor = async (req: Request, res: Response) => {
  const { authorId } = req.params;
  const deletedAuthor = await prisma.author.delete({
    where: {
      id: Number(authorId),
    },
  });
  res.status(200).json(deletedAuthor);
};

const updateAuthor = async (req: Request, res: Response) => {
  const { name, nationality, dateOfBirth, id } = req.body;
  const updatedAuthor = await prisma.author.update({
    where: {
      id,
    },
    data: {
      dateOfBirth,
      name,
    },
  });
  res.status(200).json(updatedAuthor);
};

export const authorController = {
  getAllAuthors,
  createAuthor,
  deleteAuthor,
  updateAuthor,
};
