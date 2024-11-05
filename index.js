const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")



function clock() {
    const data = new Date();
    hours.innerText = String(data.getHours()).padStart(2, '0');
    minutes.innerText = String(data.getMinutes()).padStart(2, '0');
    seconds.innerText = String(data.getSeconds()).padStart(2, '0');

    const redValue = parseInt(Math.random()* 256)
    const greenValue = parseInt(Math.random()* 256)
    const bluValue = parseInt(Math.random()* 256)


    document.body.style.backgroundColor = (`rgb(${redValue}, ${greenValue}, ${bluValue})`)


}



// setInterval(clock, 1000)
