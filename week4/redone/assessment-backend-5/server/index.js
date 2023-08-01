const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAffirmation, addGoal, deleteGoal, } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/affirmation", getAffirmation);
app.post("/api/goal", addGoal);
app.delete("/api/goal/:goal", deleteGoal);



app.listen(4000, () => console.log("Server running on 4000"));
