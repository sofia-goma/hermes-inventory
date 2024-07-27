"use strict";

export default class NotFoundController {
   static notfound(_, res) {
      res.sendStatus(404);
   }
}