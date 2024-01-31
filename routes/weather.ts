import { Router } from "express";
import { deleteCard, fetchCards, saveCard } from "../controllers/weather";

const router = Router();

router.route("/").get(fetchCards).post(saveCard);
router.route("/:city").delete(deleteCard);

export { router };
