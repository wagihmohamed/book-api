import { Router } from "express";
import { booksController } from "./books.controller";

const router = Router();

router.route("/books").get(booksController.getAllBooks);

export default router;
