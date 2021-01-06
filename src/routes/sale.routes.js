const express = require("express");
const router = express.Router();
const csvController = require("../controllers/sale/csv.controller");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/records", csvController.getRecords);

  app.use("/api/csv", router);
};

module.exports = routes;