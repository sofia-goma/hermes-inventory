"use strict";
import bcrypt from "bcrypt";
import client from '../client.js';


export default class UserController {
   /**
    * create a new user
    */

   static async create(req, res) {
      const { email, password } = req.body;
      try {
         const hashedPassword = await bcrypt.hash(password, 10);
         await client.user.create({
            data: {
               password: hashedPassword,
               email: email
            }
         });
         res.status(200).json({
            message: 'User created successfully'
         });
      } catch (err) {
         res.status(400).json({
            message: "Bad request",
            error: err.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   /**
    * list all users
    */

   static async list(_, res) {
      try {
         const users = await client.user.findMany({
            select: {
               id: true,
               email: true,
               role: false,
               created: true,
               password: false,
            }
         });
         res.status(200).json(users);
      } catch (err) {
         res.status(400).json({
            message: "Bad request",
            error: err.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   /**
    * read a signle user
    */

   static async read(req, res) {
      try {
         const { userId } = req.params;
         if (!userId) {
            res.sendStatus(404);
            return;
         }

         const user = await client.user.findFirst({
            where: {
               id: userId
            },
            select: {
               id: true,
               email: true,
               password: false,
               role: false,
               created: true
            }
         });
         res.status(200).json(user);
      } catch (err) {
         res.status(400).json({
            message: "Bad request",
            error: err.message
         });
         return;
      } finally {
         await client.$disconnect();
      }
   }

   /**
    * update user information
    */

   static async update(req, res) {
      try {
         const { userId } = req.params;
         const { email, password } = req.body;
         const hashedPassword = await bcrypt.hash(password, 10);
         await client.user.update({
            where: {
               id: userId,
            },
            data: {
               email: email,
               password: hashedPassword
            }
         });
         res.status(200).send('Updated successfully');
      } catch (err) {
         res.status(400).json({
            message: "Bad request",
            error: err.message
         });
         return;
      } finally {
         await client.$disconnect();
      }
   }

   /**
    * remove a user from the account
    */

   static async remove(req, res) {
      try {
         const { userId } = req.params;
         await client.user.delete({
            where: {
               id: userId,
            }
         });
         res.status(200).send('Account deleted successfully');
      } catch (err) {
         res.status(400).json({
            message: "Bad request",
            error: err.message
         });
         return;
      } finally {
         await client.$disconnect();
      }
   }

}