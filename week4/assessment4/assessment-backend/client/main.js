const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
      .then(res => {
        const data = res.data;
        document.getElementById("complimentResult").innerText = data;
      })
      .catch(err => {
        console.error("Error fetching compliment:", err);
      });
  };
  
  const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
      .then(res => {
        const data = res.data;
        document.getElementById("fortuneResult").innerText = data;
      })
      .catch(err => {
        console.error("Error fetching fortune:", err);
      });
  };
  
  const getInspirationalQuote = () => {
    axios.get("http://localhost:4000/api/inspirational-quote").then((res) => {
      const data = res.data;
      alert(data);
    });
  };
  
  const deleteFortune = (fortuneIndex) => {
    axios
      .delete(`/api/fortune/${fortuneIndex}`)
      .then((res) => {
        const data = res.data;
        alert(data);
      })
      .catch((error) => {
        alert("Failed to delete the fortune. Please try again.");
        console.error(error);
      });
  };
  
  const complimentBtn = document.getElementById("complimentButton");
  const fortuneBtn = document.getElementById("fortuneButton");
  const inspirationalQuoteBtn = document.getElementById("inspirationalQuoteButton");
  const deleteButtons = document.querySelectorAll(".delete-fortune");
  
  complimentBtn.addEventListener("click", getCompliment);
  fortuneBtn.addEventListener("click", getFortune);
  inspirationalQuoteBtn.addEventListener("click", getInspirationalQuote);
  
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const fortuneIndex = button.dataset.index;
      deleteFortune(fortuneIndex);
    });
  });
  
