const player = document.querySelector("#player");
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnStop = document.querySelector("#btnStop");
const btnShuffle = document.querySelector("#btnShuffle");
const v = document.querySelector('#volume');
const songs = document.querySelectorAll('.song')


player.volume = v.value; // valor de bolumen con el que empieza



function playeMusic(){
    //console.log("Empezar cancion")
    player.play();
}

function pauseMusic() {
    //console.log("Pausar cancion")
    player.pause()
}

function stopMusic() {
    //console.log("parar cancion")
    player.pause()
    player.currentTime = 0;
}

function changeVolume(evt) {
    //console.log("cambiar volumen");
    player.volume = evt.target.value;
}

function changeSong(evt){
    //console.log("Cambiar cancion");
    player.setAttribute('src', `media/${evt.target.textContent}.mp3`);
    playeMusic()
}

for (let song of songs) {
  song.addEventListener("click", changeSong);
  song.addEventListener("mouseover", (evt)=>{
    //console.log(evt.target)
    evt.target.style.backgroundColor = "yellow";
    evt.target.style.cursor = "pointer"
  })
  song.addEventListener("mouseout", (evt) => {
    //console.log(evt.target);
    evt.target.style.backgroundColor = "transparent";
    evt.target.style.cursor = "";
  });
}

function shuffle(){
    let item = Math.floor(Math.random() * songs.length);
    //console.log(item)
    player.setAttribute('src', `media/${songs[item].textContent}.mp3`);
    playeMusic();
}

btnPlay.addEventListener("click", playeMusic);
btnPause.addEventListener("click", pauseMusic);
btnStop.addEventListener("click", stopMusic);
btnShuffle.addEventListener("click", shuffle);
v.addEventListener("change", changeVolume);
