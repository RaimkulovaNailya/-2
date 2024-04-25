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