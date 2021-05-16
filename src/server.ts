import express from "express"
import { interviewRouter } from './routes/interviewRoutes';



// App Config

const app = express();

// Middleware

app.use(express.json())
app.use('/interview', interviewRouter)


// Database Config

// Server Config

const server = app.listen(8080, () => {
    console.log("App running on port 8080")
})

server.on("error", (err: Error) => {
    console.log("Error on connection:", err)
})
