const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    console.log("NEW EVENT REGISTRATION RECEIVED");
    console.log(req.body);

    let id = Math.floor(Math.random() * 100000);

    res.json({
        message: "Registration Successful",
        registrationId: id
    });
});

app.listen(3000, () =>
    console.log("Registration Microservice Running On Port 3000")
);