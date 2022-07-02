setInterval(function(){
    var now = new Date()
var day = now.getDay()
var month = now.getMonth()
var year = now.getFullYear()

var hour = now.getHours()
var munite = now.getMinutes()
var second = now.getSeconds()

var fullDate = `${year} - 0${month + 1} - 0${day} / `
var fullHour = `${hour} : ${munite} ${second}`

let dateLocation = document.querySelector(".date_content")
dateLocation.innerHTML=fullDate
let hourLocation = document.querySelector(".heure_content")
hourLocation.innerHTML=fullHour
}, 1000);