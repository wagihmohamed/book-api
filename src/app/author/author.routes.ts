import { Router } from "express";
import { authorController } from "./author.controller";

const router = Router();

router.route("/authors").get(authorController.getAllAuthors);
router.route("/authors").post(authorController.createAuthor);

export default router;
