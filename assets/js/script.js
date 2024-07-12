let $ = document

let clockSecend = $.querySelector(".secend")
let clockMinute = $.querySelector(".minute")
let clockHour = $.querySelector(".hour")
let tiltok1 = $.querySelector(".tiltok1")
let tiltok2 = $.querySelector(".tiltok2")
let volume = $.querySelector(".volume")
let sound = false
let tiltokFlag = false


volume.addEventListener("click", function () {
    if (volume.className == "volume close") {
        volume.src = "./assets/img/volume-open.png"
        volume.className = "volume open"
        sound = true
    } else {
        volume.src = "./assets/img/volume-close.png"
        volume.className = "volume close"
        sound = false
    }
})


function setDate() {
    let nowDate = new Date()
    clockHour.style.transform = `rotate(${(nowDate.getMinutes() / 60) * 360 >= 180 && (nowDate.getMinutes() / 60) * 360 < 360 && (nowDate.getHours() / 12) * 360 + 15 || (nowDate.getHours() / 12) * 360}deg)`
    clockSecend.style.transform = `rotate(${(nowDate.getSeconds() / 60) * 360}deg)`
    clockMinute.style.transform = `rotate(${(nowDate.getMinutes() / 60) * 360}deg)`
    
    if (sound) {
        if (tiltokFlag) {
            tiltok1.play()
            tiltokFlag = false
        } else {
            tiltok2.play()
            tiltokFlag = true
        }
    }
}

setDate()

setInterval(function () {
    setDate()

}, 1000)