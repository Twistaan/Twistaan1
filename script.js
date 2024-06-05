const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too!";
  gif.src =
  "https://i.pinimg.com/originals/17/57/6d/17576d138bcc88f6d4385d2d02c4eebd.gif"
});

noBtn.addEventListener('mouseover', ()=> {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.lefy = randomX + "px";
  noBtn.style.top = randomY + "px";
})