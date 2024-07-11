let contenorel= document.querySelector(".contenor")
let leftel = document.querySelector(".left")
let rightel= document.querySelector(".right")

leftel.addEventListener("mouseenter",()=>{
    contenorel.classList.add("active-left")
})
leftel.addEventListener("mouseleave",()=>{
    contenorel.classList.remove("active-left")
})
rightel.addEventListener("mouseenter",()=>{
    contenorel.classList.add("active-right")
})
rightel.addEventListener("mouseleave",()=>{
    contenorel.classList.remove("active-right")
})