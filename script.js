const slider = document.querySelector('.items');
let clickDown = false;
let startX;
let scrollY;


slider.addEventListener('mousedown',(e) => {
    let clickDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollY = slider.offsetLeft;
    console.log(startX);
});
slider.addEventListener('mouseleave',() => {
    let clickDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup',() => {
    let clickDown = false;
    slider.classList.removes('active');
});
slider.addEventListener('mousemove',() => {
    if(!clickDown) return; //stop function from runnung    console.log(clickDown);

    e.preventDefault();    //this will stop browser to think that you are doing some weird stuff

    const x = e.pageX - slider.offsetLeft;   // this is for how much we slide 
    const walk = (x - startX) * 3;   //this will tell us how far we deviated from the initial position

    slider.scrollLeft = scrollLeft - walk;

});
