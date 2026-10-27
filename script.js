let scenes = document.querySelectorAll(".scene");

let nextButtons = document.querySelectorAll(".next");

let currentScene = 0;



nextButtons.forEach(button => {


button.addEventListener("click",()=>{


scenes[currentScene].classList.remove("active");


currentScene++;



if(currentScene < scenes.length){

scenes[currentScene].classList.add("active");

}


});


});





const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");



musicBtn.addEventListener("click",()=>{


music.play();


musicBtn.innerHTML="🎵 Our Song is Playing";


});