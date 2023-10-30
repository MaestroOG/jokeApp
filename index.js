import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", async (req, res) => {
    // res.send("Yo");
    try {
        const result = await axios.get("https://api.chucknorris.io/jokes/random");
        // console.log(result.data.value);
        res.render("index.ejs", { joke: result.data.value })
    }
    catch (err) {
        console.log(err.message);
    }
})

app.listen(port, () => {
    console.log(`Server started at port ${port}.`)
})