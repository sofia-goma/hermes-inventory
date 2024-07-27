"use client";
import jwt from 'jsonwebtoken';
import mainConfig from '../config/config.js';

// Middleware authentication

export default function authenticateJWT(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];

   if (token == null) {
      res.sendStatus(401);
      return;
   }

   jwt.verify(token, mainConfig.JWT_SECRET, function (err, user){
      if (err) {
         res.sendStatus(403);
         return;
      }
      req.user = user;
      // console.log(req.user);
      next();
   });
}