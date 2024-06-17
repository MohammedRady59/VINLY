const playButton = document.querySelectorAll(".imgSong");
const audioElements = document.querySelectorAll(".myAudio");

playButton.forEach((el) => {
  el.addEventListener("click", function () {
    audioElements.forEach((el) => {
      el.pause();
    });
    const audioPlay = el.querySelector(".myAudio");
    audioPlay.play();
    playButton.forEach((el) => el.classList.remove("active"));
    el.classList.toggle("active");
  });
});
