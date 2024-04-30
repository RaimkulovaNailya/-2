let lngRus = document.getElementById("rus")
let lngEng = document.getElementById("eng")
let lngFr = document.getElementById("fr")
let title = document.getElementById("title")
let lng = 'rus'
function changeLng(){
    
    if(lng === 'eng'){
        title.textContent = "Грузоперевозки"
        lng = "rus"
        console.log("111")
    }else{
        title.textContent = "Cargo transporations"
        lng = "eng"
    }
}
lngRus.addEventListener("click", changeLng)
lngEng.addEventListener("click", changeLng)

let car1 = document.getElementById("CAR1")
let nextButton = document.getElementById("nextButton")
let prevButton = document.getElementById("prevButton")

let carNumber = 1

function nextCar(){
    if(carNumber === 4) return
    carNumber++
    car1.src = `../images/CAR${carNumber}.png`
}

function prevCar(){
    if(carNumber === 1) return
    carNumber--
    car1.src = `../images/CAR${carNumber}.png`
}


nextButton.addEventListener('click', nextCar)
prevButton.addEventListener('click', prevCar)


