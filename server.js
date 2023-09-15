const express = require("express")
const app = express()

const PORT = 3333

app.get("/", async (req, res) => {
    res.status(201)
    res.json({message: "Working"})
})

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
