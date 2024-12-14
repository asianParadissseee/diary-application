import express from 'express';
import cors from 'cors';
import router from "./routes/index.js";
const app = express()
const port = 3000
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: "http://localhost:" + port,
}))
app.use("/api", router)


const start = async () => {
    try {
        app.listen(port, () => console.log(`Example app listening on port ${port}`))
    }catch (e) {
        console.log(e)
        throw new Error(`Произошла ошибка ${e}`);
    }
}

start()
