const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const affirmationBtn = document.getElementById("affirmationButton");
const setGoalBtn = document.getElementById("setGoalBtn");
const deleteGoalBtn = document.getElementById("deleteGoalBtn");

const dailyGoalInput = document.getElementById("dailyGoalInput");
const deleteGoalInput = document.getElementById("deleteGoalInput");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
      const data = res.data;
      alert(data);
    })
    .catch(error => {
      console.error(error);
    });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
      const data = res.data;
      alert(data);
    })
    .catch(error => {
      console.error(error);
    });
};

const getAffirmation = () => {
  axios.get("http://localhost:4000/api/affirmation/")
    .then(res => {
      const data = res.data;
      alert(data);
    })
    .catch(error => {
      console.error(error);
    });
};

const setDailyGoal = () => {
  const newGoal = dailyGoalInput.value;
  axios.post("http://localhost:4000/api/goal", { goal: newGoal })
    .then(res => {
      alert(res.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const deleteDailyGoal = () => {
  const goalToDelete = deleteGoalInput.value;
  axios.delete(`http://localhost:4000/api/goal/${goalToDelete}`)
    .then(res => {
      alert(res.data);
    })
    .catch(error => {
      console.error(error);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
affirmationBtn.addEventListener('click', getAffirmation);
setGoalBtn.addEventListener('click', setDailyGoal);
deleteGoalBtn.addEventListener('click', deleteDailyGoal);
