import { Router } from "express";
import { authorController } from "./author.controller";

const router = Router();

router.route("/authors").get(authorController.getAllAuthors);

export default router;
