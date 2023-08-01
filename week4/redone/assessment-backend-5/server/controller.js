const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["A smile is your passport into the hearts of others.","You will soon embark on a thrilling adventure that will lead to great rewards.","Your creative talents will soon be recognized and celebrated.","A pleasant surprise awaits you in the near future.","Luck is on your side today, seize the opportunities that come your way."
];
const affirmations = [
  "You are capable of achieving great things!","You have the strength to overcome any challenges!","You radiate positivity and attract success!","Your hard work and dedication will lead to wonderful results!","You are worthy of all the good things life has to offer!"
];

let dailyGoals = [];

const getCompliment = (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
};

const getFortune = (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
};

const getAffirmation = (req, res) => {
  let randomIndex = Math.floor(Math.random() * affirmations.length);
  let randomAffirmation = affirmations[randomIndex];
  res.status(200).send(randomAffirmation);
};

const addGoal = (req, res) => {
  const newGoal = req.body.goal;
  dailyGoals.push(newGoal);
  res.status(201).send("Daily goal added successfully!");
};

const deleteGoal = (req, res) => {
  const goalToDelete = req.params.goal;
  const index = dailyGoals.indexOf(goalToDelete);
  if (index !== -1) {
    dailyGoals.splice(index, 1);
    res.status(200).send("Daily goal deleted successfully!");
  } else {
    res.status(404).send("Daily goal not found.");
  }
};

module.exports = {
  getCompliment,
  getFortune,
  getAffirmation,
  addGoal,
  deleteGoal,
};
