
const slide = document.querySelectorAll(".slide")
const containerSlide = document.querySelector(".slide-container")
const slides = document.querySelector(".slides")
let currentIndex = 0
let interval
function next() {
    if (currentIndex < slide.length - 1) {
        currentIndex++
    }
    else {
        currentIndex = 0
    }
    updateSlider()
}
function previous() {
    if (currentIndex > 0) {
        currentIndex++
    }
    else {
        currentIndex = slide.length - 1
    }
    updateSlider()
}
function updateSlider() {
    const transformvalue = -currentIndex * 100 + "%"
    slides.style.transform = `translateX(${ transformvalue })`
}
function startAutoPlay(params) {
    interval = setInterval(() => {
        if (currentIndex < slide.length - 1) {
            currentIndex++
        }
        else {
            currentIndex = 0
        }
        updateSlider()
    }, 3000)
}
function stopAutoPlay() {
    clearInterval(interval)
}
startAutoPlay()
containerSlide.addEventListener("mouseover", stopAutoPlay)
containerSlide.addEventListener("mouseleave", startAutoPlay)





function showTab(tabId) {
    const tabs=document.querySelectorAll(`.meals`)
    tabs.forEach(tab=>{
        tab.style.display="none"
    })
    const selectedTab=document.getElementById(tabId)
    selectedTab.style.display="flex"
}

document.getElementById("dinner").addEventListener("click",()=>{
    showTab('meal')
})
document.getElementById("break").addEventListener("click",()=>{
    showTab('meal2')
})
document.getElementById("lunch").addEventListener("click",()=>{
    showTab('meal2')
})

function changeColor(color) {
    const icon1=document.querySelectorAll(`.yemey`)
    icon1.forEach(icon=>{
        icon.style.color="rgb(89,102,114)"
    })
    const selectedIcon=document.getElementById(color)
    selectedIcon.style.color=" rgb(224,154,100)"
}

document.getElementById("dinner").addEventListener("click",()=>{
    changeColor('dinner')
})
document.getElementById("break").addEventListener("click",()=>{
    changeColor('break')
})
document.getElementById("lunch").addEventListener("click",()=>{
    changeColor('lunch')
})

function changeLine(lines) {
    const ox1 =document.querySelectorAll(`.line`)
    ox1.forEach(ox=>{
        ox.style.display="none"
    })
    const selectedOx=document.getElementById(lines)
    selectedOx.style.display="block"
}

document.getElementById("dinner").addEventListener("click",()=>{
    changeLine('dinner-line')
})
document.getElementById("break").addEventListener("click",()=>{
    changeLine('break-line')
})
document.getElementById("lunch").addEventListener("click",()=>{
    changeLine('lunch-line')
})

const burger=document.getElementById("burger-z")
const burgerbtn=document.getElementById("burger-btn")
const openSidebar=()=>{
    document.getElementById("sidebar").style.display="flex"
}
const closeSidebar=()=>{
    document.getElementById("sidebar").style.display="none"
}
burger.addEventListener("click",openSidebar)
burger-z.addEventListener("onclick",closeSidebar)