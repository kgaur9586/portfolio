// typing animation
var typed = new Typed(".typing",{
    strings:["","Web Developer","Python Developer","Java Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// Aside
const sectionList = document.querySelectorAll(".section")
const navbar = document.querySelectorAll(".nav");
navbar.forEach(navbarItem => {
    nav = navbarItem.querySelectorAll("li");
});

for(let i = 0;i < nav.length; i++){
    const a = nav[i].querySelector("a");
    
    a.addEventListener("click",function(){
        for(j = 0 ; j < sectionList.length; j++){
            sectionList[j].classList.remove("back-section");
        }
        for(let j = 0; j < nav.length ; j++){
            if(nav[j].classList.contains("active")){
                sectionList[j].classList.add("back-section")
            }
            nav[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    
        showSection(this);
        if(window.innerWidth < 1200){
            asideTogglerbtn();
        }
    })
}

function showSection(element){
    const target = element.getAttribute("href").split("#")[1]
    for(j = 0 ; j < sectionList.length; j++){
        sectionList[j].classList.remove("active");
    }
    document.querySelector("#"+target).classList.add("active");
}

const navToggler = document.querySelector(".nav-toggler")
const aside = document.querySelector(".aside");
navToggler.addEventListener("click",() => {
        asideTogglerbtn();
});
function asideTogglerbtn(){
    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
    for(let i = 0;i<sectionList.length;i++){
        sectionList[i].classList.toggle("open")
    }
}
function updateNav(element){
    const target = element.getAttribute("href").split("#")[1]
    for(let j = 0; j < nav.length ; j++){
        nav[j].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1]
        if(target === nav[j].querySelector('a').getAttribute("href").split("#")[1]){
            nav[j].querySelector('a').classList.add("active");
        }
    }
}

document.querySelector(".GoToAbout").addEventListener("click",function(){
    updateNav(this);
    showSection(this);
})


