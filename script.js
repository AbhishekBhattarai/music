console.log("welcome to Geet player");
let songIndex = 0;
let audioElement = new Audio("song/3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cover.jpg" },
  {
    songName: "teri nazron ne X your eyes got my heart falling for you",
    filePath: "song/2.mp3",
    coverPath: "cover.jpg",
  },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
  { songName: "tujhe", filePath: "song/2.mp3", coverPath: "cover/2.jpg" },
  { songName: "tujhe", filePath: "song/3.mp3", coverPath: "cover/3.jpg" },
  { songName: "tujhe", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
  { songName: "tujhe", filePath: "song/5.mp3", coverPath: "cover/5.jpg" },
  { songName: "tujhe", filePath: "song/6.mp3", coverPath: "cover/6.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
