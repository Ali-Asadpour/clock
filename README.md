## What is it?
##### This is a wristwatch that shows you the time according to the time zone you are in. By pressing the volume button at the bottom of the screen, you can even hear the ticking sound of the clock.
##### [Click](https://ali-asadpour.github.io/clock/) to have your own watch!

## How it Works?
<img src="./assets/video/clock.gif" width="250px">

## How can we access the current time?

```javascript

let nowDate, nowHour, nowMinute, nowSecond

setInterval(() => {
    nowDate = new Date()

    nowHour = nowDate.getHours()
    nowMinute = nowDate.getMinutes() 
    nowSecond = nowDate.getSeconds() 

    console.log(`${nowHour} : ${nowMinute} : ${nowSecond}`)
}, 1000)
```
##### With this code you can access the clock every second!

## Scills:
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" > 

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" > 

- <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" > 
