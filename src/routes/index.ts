import { Router } from "express";
import booksRoutes from "../app/books/books.routes";

const router = Router();

router.use("/", booksRoutes);

export default router;
