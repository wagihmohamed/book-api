import { Router } from "express";
import { authorController } from "./author.controller";

const router = Router();

router.route("/authors").get(authorController.getAllAuthors);
router.route("/authors").post(authorController.createAuthor);
router.route("/authors").patch(authorController.updateAuthor);
router.route("/authors/:authorId").delete(authorController.deleteAuthor);

export default router;
