"use client";
import { Router } from "express";
import UserController from "../controllers/user.controller.js";


const router = Router();
router.route('/')
   .get([authenticateJWT, UserController.list])
   .post(UserController.create)

router.route('/:userId')
   .get([authenticateJWT, UserController.read])
   .put([authenticateJWT, UserController.update])
   .delete([authenticateJWT, UserController.remove])
export default router;