require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");

const express = require("express");
const { use } = require("express/lib/application");
const routes = require("./routes");

migrationsRun();

const AppError = require("./utils/AppError")

const app = express();
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
    if( error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
} )

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});