let phones = document.querySelectorAll(".phones-category")
let mainPhone = document.querySelector(".current-phone")
mainPhone.attributes.src.nodeValue = localStorage.getItem("main-phone")
document.body.className = localStorage.getItem("current-mood")

if (localStorage.getItem("main-phone") == null) {
    mainPhone.attributes.src.nodeValue = "./images/0.png"
    localStorage.setItem("current-mood", "gold")
    mood = "gold"
    document.body.className = mood
}


function currentPhone(src) {
    mainPhone.setAttribute("src", src)
    
    
    if (src === "./images/0.png") {
        mood = "gold"
    }
    if (src === "./images/1.png") {
        mood = "blue"
    }
    if (src === "./images/2.png") {
        mood = "black"
    }
    if (src === "./images/3.png") {
        mood = "grey"
    }
    if (src === "./images/4.png") {
        mood = "red"
    }
    localStorage.setItem("current-mood", mood)
    localStorage.setItem("main-phone", src)

    document.body.className = localStorage.getItem("current-mood")
}

