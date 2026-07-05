const toggle= document.getElementById("toggle");
const navLink= document.getElementById("navLink");
const allNavLink= document.querySelectorAll(".nav-link a");
// toggle for mobile version
toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
    navLink.classList.toggle("active");
});

//close menu bar by click time
allNavLink.forEach((link)=>{
    link.addEventListener("click",()=>{
        
        toggle.classList.remove("active");
        navLink.classList.remove("active");
    });
});

// link header to section
const section = document.querySelectorAll('a[href^="#"]');
section.forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'))
        if(targetElement){
            targetElement.scrollIntoView({
            behavior: 'smooth'
        })}
    });
});

// header background change
const header= document.querySelector("header");
window.addEventListener("scroll", function(){
    if(window.scrollY>50){
        header.style.backgroundColor= '#000000ff';
    }
    else{
        header.style.backgroundColor='transparent';
    }
});
