"use strict";
import app from "./server.js";
import mainConfig from "./config/config.js";

app.listen(mainConfig.port, function () {
   console.log('SERVER RUNNING');
});