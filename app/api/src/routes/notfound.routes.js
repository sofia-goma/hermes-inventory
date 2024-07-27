"use strict";
import { Router } from "express";
import NotFoundController from "../controllers/notfound.controller.js";

const router = Router();
router.route('*').all(NotFoundController.notfound);
export default router;
