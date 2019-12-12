//start of carousel
const carousel_slide = document.querySelector('.carousel-slide');
const carousel_img = document.querySelectorAll('.carousel-slide img')

const prev_btn = document.querySelector('#prev');
const next_btn = document.querySelector('#next');

let counter = 1;
const size = carousel_img[0].clientWidth;


carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
console.log(carousel_slide.style.transform);

next_btn.addEventListener('click',()=>{
    if(counter >= carousel_img.length -1) return;
    carousel_slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prev_btn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carousel_slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carousel_slide.addEventListener('transitionend', () =>{
    if(carousel_img[counter].id === 'lastclone'){
        carousel_slide.style.transition = "none";
        counter = carousel_img.length - 2;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carousel_img[counter].id === 'firstclone'){
        carousel_slide.style.transition = "none";
        counter = carousel_img.length - counter;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

//end of carousel
function showDetails(divid){
    if (divid === "div1"){
        var one = document.getElementById(divid).innerHTML = "Starting from $2";
        one.element.classList.add("shadow-pop-tr");
    }
    else if (divid === "div2"){
        document.getElementById(divid).innerHTML = "Starting from $3";
    }
    else {
        document.getElementById(divid).innerHTML = "Starting from $1.75";
    }
}
function hideDetails(divid){
    if (divid === "div1"){
        document.getElementById(divid).innerHTML = "Donuts";
    }
    else if (divid === "div2"){
        document.getElementById(divid).innerHTML = "Cupcakes";
    }
    else {
        document.getElementById(divid).innerHTML = "Croissants";
    }
}