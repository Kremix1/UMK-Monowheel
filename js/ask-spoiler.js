function Spoiler(id){
    let item = document.getElementById("askSpoiler" + id);
    let element = document.getElementById("contentSpoiler" + id);
    item.classList.toggle('arrow-visible');
    element.classList.toggle('spoiler-visible');
};