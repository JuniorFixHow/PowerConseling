import { Router } from "express";
import { createAcademy, deleteAcademy, getAcademy, getAllAcademy } from "../controllers/AcademyController.js";

const router = Router();

router.post('/create', createAcademy);
router.delete('/:id', deleteAcademy);
router.get('/:id', getAcademy)
router.get('/', getAllAcademy)

export default router;