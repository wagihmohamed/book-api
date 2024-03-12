import { Router } from "express";
import booksRoutes from "../app/books/books.routes";
import authorsRoutes from "../app/author/author.routes";

const router = Router();

router.use("/", booksRoutes);
router.use("/", authorsRoutes);

export default router;
