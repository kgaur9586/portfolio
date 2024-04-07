// typing animation
var typed = new Typed(".typing",{
    strings:["","Web Developer","Python Developer","Java Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// Aside
const sectionList = document.querySelectorAll(".section")
const nav = document.querySelectorAll("#nav_a");
for(let i = 0;i < nav.length; i++){
    const a = nav[i]
    a.addEventListener("click",function(){
        for(j = 0 ; j < sectionList.length; j++){
            sectionList[j].classList.remove("back-section");
        }
        for(let j = 0; j < nav.length ; j++){
            if(nav[j].classList.contains("active")){
                sectionList[j].classList.add("back-section")
            }
            nav[j].classList.remove("active");
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
    console.log(element.getAttribute("href").split("#")[1])
}

document.querySelector(".hire-me").addEventListener("click",() => {
    console.log(this)
})
