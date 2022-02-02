const hamburger = document.querySelector(".ham");  
const linksd = document.querySelector(".linksd");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 linksd.classList.toggle("linksd-change")  
});  
