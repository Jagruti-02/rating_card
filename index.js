let buttons = document.querySelectorAll(".rate-btn");
let submitBtn = document.querySelector(".submit-btn");
let rating = document.querySelector(".first-half");
let thanks = document.querySelector(".thankyou-pg");
let selection = document.querySelector(".selection");
let userRating = 0;

//listeners and fucntions
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
    button.classList.toggle("active");
    userRating = index + 1;
  });
});

submitBtn.addEventListener("click", () => {
  rating.style.display = "none";
  thanks.style.display = "block";

  selection.textContent = `You selected ${userRating} out of 5`;
});
