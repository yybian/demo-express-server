const express = require("express")

const app = express()

const port = 5555;

app.get("/", (req, res) => {
    res.send("Response from server hosting on port " + port)
})

app.listen(port, () => {
    console.log("listening on port " + port);
})