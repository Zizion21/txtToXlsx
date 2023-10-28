const express = require("express");
const multer = require("multer");
const convertTxtToExcel = require("./xlsx");
const app = express();
const upload = multer({dest: 'uploads/'});
const swaggerUI = require("swagger-ui-express")
const swagger = require("./swagger.config");
require("dotenv").config()

app.use("/api-docs", swaggerUI.serve, swagger);
app.post("/upload", upload.single("file"), convertTxtToExcel);

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running. ${process.env.BASE_URL}:${process.env.PORT}/api-docs`);
})