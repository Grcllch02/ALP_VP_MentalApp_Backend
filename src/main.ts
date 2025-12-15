import express from "express"
import { PORT } from "./utils/env-util"

const app = express()

app.listen(PORT || 3000, () => {
    console.log(`connected to port ${PORT}`);
})