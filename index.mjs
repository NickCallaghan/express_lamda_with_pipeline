import express from "express";
import serverless from "serverless-http";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/api/:id", (req, res) => {
    res.status(200).json({ id: req.params.id, message: "Hello World" });
});

console.log({ env: process.env });

if (process.env.NODE_ENV === "dev") {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export const handler = serverless(app);
