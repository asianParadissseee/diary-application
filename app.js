import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import router from "./routes/index.js";
import {swaggerDefinition} from "./docs/swaggerDef.js";
import {errorMiddleware} from "./middleware/error.middleware.js";
const app = express()
const port = 3000

const swaggerDocs = {
    ...swaggerDefinition,
    paths: {
        // остальные роуты
    }
}

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: "http://localhost:" + port,
}))
app.use("/api", router)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(errorMiddleware)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
            console.log(`Swagger documentation http://localhost:${port}/swagger`)
        })
    }catch (e) {
        console.log(e)
        throw new Error(`Произошла ошибка ${e}`);
    }
}

start()
