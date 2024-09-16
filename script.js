const song = document.querySelector("#song");
const progress = document.querySelector("#progress");
const control = document.querySelector("#ctrl-icon");
const prev = document.querySelector("#prev");
const forward = document.querySelector("#forwd");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause(){
    if(control.classList.contains("fa-pause")){
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
        
    }else{
        song.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }

}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
song.play();
song.currentTime = progress.value;
control.classList.remove("fa-play");
control.classList.add("fa-pause");
}

forward.addEventListener("click" , () => {
   song.currentTime = Math.min(song.duration,song.currentTime + 10);
   progress.value = song.currentTime;
})

prev.addEventListener("click" , () => {
    song.currentTime = Math.max(0,song.currentTime - 10);
    progress.value = song.currentTime;
 })