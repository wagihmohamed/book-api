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

export const authorController = { getAllAuthors, createAuthor };
