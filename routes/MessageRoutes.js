import { Router } from "express";
import { createMessage, deleteMessage, getMessage, getAllMessage, createAdminMessage } from "../controllers/MessageController.js";

const router = Router();

router.post('/create', createMessage);
router.post('/send', createAdminMessage);
router.delete('/:id', deleteMessage);
router.get('/:id', getMessage)
router.get('/', getAllMessage)

export default router;