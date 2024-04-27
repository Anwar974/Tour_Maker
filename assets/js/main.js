const navbar = document.querySelector('.navbar')
const captionInfoInner = document.querySelectorAll('.caption-info-inner')
const loading = document.querySelector('.loading')
const scrollToTopBtn = document.querySelector('.back-top')
const servicesSection = document.querySelector('.services')
const navLinks = document.querySelectorAll('.nav-link')
const countSection = document.querySelector('.deals-discounts')
let valueDisplay = document.querySelectorAll(".counter")
let interval1= 3000;


window.addEventListener('scroll', function(){
    for(let i=0 ; i<  captionInfoInner.length ;i++){
        if(window.scrollY >= 75){
        
        navbar.style.backgroundColor ="rgb(0, 0, 0, 0.85)"
        navbar.style.padding="15px 0"
    } else {
        navbar.style.backgroundColor ="transparent"
        navbar.style.padding="25px 0"
    }
    }
    
    if(window.scrollY>=countSection.offsetTop){
        counter();

    }else{
        valueDisplay.forEach((valueDisplay) =>{
         endValue = parseInt(valueDisplay.getAttribute("value"));
        valueDisplay.textContent = startValue;
        })
    }
    if(window.scrollY>servicesSection.offsetTop){
        
        scrollToTopBtn.classList.remove('opacity-0', 'invisible')
    }else{
        scrollToTopBtn.classList.add('opacity-0', 'invisible')
    }

    
})

window.addEventListener('load', function(){
    setTimeout(function(){
       loading.classList.add('opacity-0', 'invisible')
       document.body.style.overflow ='auto'
       }, 2000)
   
   })

   for(let i=0 ; i<  navLinks.length ;i++){
    navLinks[i].addEventListener('click', function(e){
        document.querySelector('.nav-link.active').classList.remove('active')
        navLinks[i].classList.add('active')
      
    })
}

function counter(){
    valueDisplay.forEach((valueDisplay) =>{
    
    let endValue = parseInt(valueDisplay.getAttribute("value"));
    let startValue=0;
    if(endValue>3500){
       startValue =3400; 
    }else if(endValue>500){
        startValue =250; 
    }
   
    duration = Math.floor(interval1/endValue);
   
    
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration);
});
}
