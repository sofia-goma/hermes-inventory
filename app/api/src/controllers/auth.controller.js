"use client";
import client from "../client.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mainConfig from '../config/config.js';

export default class AuthController {

   /**
    * login 
    */

   static async login(req, res) {
      try {
         const { email, password } = req.body;
         const user = await client.user.findUnique({
            where: {
               email: email
            }
         });
         if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id, role: user.role }, mainConfig.JWT_SECRET);
            res.status(200).send(token);
         } else {
            res.status(401).send("Invalid credentials");
            return;
         }
      } catch (err) {
         res.status(400).json({
            err: err.message,
         });
      } finally {
         await client.$disconnect();
      }
   }

   /**
    * logout 
    */

   static async logout(_, res) {
      res.send('logout');
   }
}