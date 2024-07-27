"use strict";
import dotenv from 'dotenv';

dotenv.config();
const mainConfig = {
   port: process.env.PORT, 
   JWT_SECRET: process.env.JWT_SECRET,
}

export default mainConfig;