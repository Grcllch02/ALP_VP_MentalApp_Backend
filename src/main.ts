import express from "express"
import { PORT } from "./utils/env-util"

const app = express()

app.listen(PORT)