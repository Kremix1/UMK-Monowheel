const imageUrls = [
    'img/main/main-background.jpg',
    'img/main/main-background2.jpg'
]

//Кеширую картинки, чтобы не мерцали
const images = imageUrls.map(url => {
    const img = new Image()
    img.src = url
    return img
});

let timerId = setInterval(MainSlider, 10000);
let flag = true;
let background = document.getElementById("bg");
let leftBox = document.getElementById("box1");
let rightBox = document.getElementById("box2");
window.onload = MainSlider();

function ColorLeft(){
    if(flag){
        MainSlider();
        clearInterval(timerId);
        timerId = setInterval(MainSlider, 10000);
    }
}

function ColorRight(){
    if(!flag){
        MainSlider();
        clearInterval(timerId);
        timerId = setInterval(MainSlider, 10000);
    }
}


function MainSlider(){
    if(flag){
        leftBox.style.background = "#fff";
        rightBox.style.background = "rgba(255, 255, 255, 0.36)";
        background.style.backgroundImage = `url(${images[0].src})`;
        flag = false;
    }
        
    else{
        leftBox.style.background = "rgba(255, 255, 255, 0.36)";
        rightBox.style.background = "#fff";
        background.style.backgroundImage = `url(${images[1].src})`;
        flag = true;
    }
    
    
}