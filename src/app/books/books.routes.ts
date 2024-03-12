import { Router } from "express";
import { booksController } from "./books.controller";

const router = Router();

router.route("/books").get(booksController.getAllBooks);
router.route("/books").post(booksController.createBook);
router.route("/books/:bookId").delete(booksController.deleteBook);

export default router;
