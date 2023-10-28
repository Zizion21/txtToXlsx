const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Convert .txt to excel file",
            version: "1.0.0"
        },
    },
    apis: [process.cwd() + "/swagger.js"]
}

const swaggerDoc = swaggerJsDoc(swaggerOptions)
module.exports = swaggerUI.setup(swaggerDoc,{})