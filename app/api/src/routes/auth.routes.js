"use strict";
import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
const router = Router();
router.route('/login')
   .post(AuthController.login);
router.route('/logout')
   .get();
export default router;