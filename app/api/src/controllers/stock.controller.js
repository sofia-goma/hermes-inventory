"use client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class StockController {
   /**
    * list all stock available
    */
   static async list(_, res) {
      try {
         const stocks = await prisma.stock.findMany();
         res.status(200).json(stocks);
      } catch (error) {
         res.status(404).json({
            message: 'Bad request',
            error: error.message,
         });
      } finally {
         prisma.$disconnect();
      }
   }

   /**
    * create a new stock
    */
   static async create(req, res) {
      const { product, category, deliveryDate, price, detail } = req.body;
      try {
         await prisma.stock.create({
            data: {
               product,
               category,
               deliveryDate,
               price,
               detail,
            }
         });
         res.send("Stock created successfully")
      } catch (error) {
         res.status(404).json({
            message: 'Bad request',
            error: error.message,
         });
      } finally {
         await prisma.$disconnect();
      }
   }

   /**
    * read a specific stock
    */
   static async read(req, res) {
      const { id } = req.params;
      try {
         const stock = await prisma.stock.findFirst({
            where: {
               id: id,
            }
         });
         res.json(stock);
      } catch (error) {
         res.status(404).json({
            message: 'Bad request',
            error: error.message,
         });
      }
   }

   /**
    * update a specific stock
    */
   static async update(req, res) {
      const { id } = req.params;
      const { product, category, deliveryDate, price, detail } = req.body;
      try {
         const updatedStock = await prisma.stock.update({
            where: {
               id: id,
            },
            data: {
               product: product,
               category: category,
               deliveryDate: deliveryDate,
               price: price,
               detail: detail,
            }
         });
         res.send('Updated stock successfully');
      } catch (error) {
         res.status(404).json({
            message: 'Bad request',
            error: error.message,
         })
      } finally {
         prisma.$disconnect();
      }
   }

   /**
    * remove a stock by id
    */
   static async remove(req, res) {
      const { id } = req.params;
      try {
         await prisma.stock.delete({
            where: { id },
         });
         res.send('Stock removed successfully');
      } catch (error) {
         res.status(404).json({
            message: 'Bad request',
            error: error.message,
         });
      } finally {
         await prisma.$disconnect();
      }
   }

   /**
    * read stock by its user id
    */
   static async readList(req, res) {
      const { userId } = req.params;
      try {
         const stocks = await prisma.stock.findMany({
            where: { userId },
         });
         console.log(stocks);
         return stocks;
      } catch (error) {
         console.error("Error reading stock list by user ID:", error);
         throw error;
      }
   }
}
