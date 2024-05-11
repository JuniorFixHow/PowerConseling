import { Router } from "express";
import { createMessage, deleteMessage, getMessage, getAllMessage, createAdminMessage, getAllAdminMessage, updateMessage } from "../controllers/MessageController.js";

const router = Router();

router.post('/create', createMessage);
router.post('/send', createAdminMessage);
router.delete('/:id', deleteMessage);
router.put('/:id', updateMessage);
router.get('/:id', getMessage)
router.get('/', getAllAdminMessage)
// router.get('/', getAllMessage)

export default router;