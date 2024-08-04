"use strict";
import { Router } from "express";
import StockController from '../controllers/stock.controller.js';

const router = Router();

router.route('/')
   .get(StockController.list)
   .post(StockController.create)

export default router;