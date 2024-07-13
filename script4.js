let scrollContainer = document.querySelector(".gallery");
let backbutton = document.getElementById("backbutton");
let nextbutton = document.getElementById("nextbutton");
let viewWidth = window.innerWidth * 0.82;

scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.style.scrollBehavior = 'smooth';
    evt.preventDefault();
    if(evt.deltaY < 0) {
        scrollContainer.scrollLeft = (Math.floor(scrollContainer.scrollLeft/viewWidth)*viewWidth)-viewWidth;
    } else if (evt.deltaY > 0) {
        scrollContainer.scrollLeft = (Math.floor(scrollContainer.scrollLeft/viewWidth)*viewWidth) + viewWidth;
    }
});

nextbutton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += viewWidth;
});
backbutton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= viewWidth;
});