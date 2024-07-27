"use strict";
import express from 'express';
import cors from 'cors';
import notFoundRouter from './routes/notfound.routes.js';
import userRouter from './routes/user.routes.js';
import authenticateJWT from './middlewares/authenticateJWT.js';
import authRouter from './routes/auth.routes.js';
import stockRouter from './routes/stock.routes.js';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/api/stocks', authenticateJWT, stockRouter);
app.use('/api/users', userRouter);
app.use('*', notFoundRouter);
export default app;