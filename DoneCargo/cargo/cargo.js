let lngRus = document.getElementById("rus")
let lngEng = document.getElementById("eng")
let title = document.getElementById("title")
let office = document.getElementById("office")
let services = document.getElementById("services")
let aboutCompany = document.getElementById("aboutCompany")
let vacancies = document.getElementById("vacancies")
let contacts = document.getElementById("contacts")
let miniText = document.getElementById("miniText")
let h1 = document.getElementById("h1")
let miniText2 = document.getElementById("miniText2")
let but1 = document.getElementById("but1")
let h1Services = document.getElementById("h1Services")
let textInGrids1 = document.getElementById("textInGrids1")
let textInGrids2 = document.getElementById("textInGrids2")
let textInGrids3 = document.getElementById("textInGrids3")
let textInGrids4 = document.getElementById("textInGrids4")
let textInGrids5 = document.getElementById("textInGrids5")
let textInGrids6 = document.getElementById("textInGrids6")
let textInGrids7 = document.getElementById("textInGrids7")
let textInGrids8 = document.getElementById("textInGrids8")
let textInGrids9 = document.getElementById("textInGrids9")
let textInGrids10 = document.getElementById("textInGrids10")
let textInGrids11 = document.getElementById("textInGrids11")
let textInGrids12 = document.getElementById("textInGrids12")
let textInGrids13 = document.getElementById("textInGrids13")
let textInGrids14 = document.getElementById("textInGrids14")
let textInGrids15 = document.getElementById("textInGrids15")
let textInGrids16 = document.getElementById("textInGrids16")
let h1AboutCompany = document.getElementById("h1AboutCompany")
let miniText3 = document.getElementById("miniText3")
let gridsText1 = document.getElementById("gridsText1")
let gridsText2 = document.getElementById("gridsText2")
let gridsText3 = document.getElementById("gridsText3")
let gridsText4 = document.getElementById("gridsText4")
let gridsText5 = document.getElementById("gridsText5")
let number1 = document.getElementById("number1")
let address = document.getElementById("address2")
let developed = document.getElementById("developed")
let lng = 'rus'


function changeLng(event){
    event.preventDefault()
    if(lng === 'eng'){
        title.textContent = "ГРУЗОВЫЕ ПЕРЕВОЗКИ"
        office.textContent = "Наши офисы"
        services.textContent = "УСЛУГИ"
        aboutCompany.textContent = "О КОМПАНИИ"
        vacancies.textContent = "ВАКАНСИИ"
        contacts.textContent = "КОНТАКТЫ"
        miniText.textContent = "Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов"
        h1.textContent = "ГРУЗОПЕРЕВОЗКИ ПО ЕВРОПЕ"
        miniText2.textContent = "Страны Евросоюза, а также Украина, Белоруссия со всеми документами."
        but1.textContent = "ПОДРОБНЕЕ"
        h1Services.textContent = "УСЛУГИ"
        textInGrids1.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids2.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids3.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids4.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids5.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids6.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids7.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids8.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids9.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids10.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids11.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids12.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids13.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids14.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids15.textContent = "АВИАПЕРЕВОЗКИ"
        textInGrids16.textContent = "АВИАПЕРЕВОЗКИ"
        h1AboutCompany.textContent = "О КОМПАНИИ"
        miniText3.textContent = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
        gridsText1.textContent = "офисов"
        gridsText2.textContent = "в Европе и СНГ"
        gridsText3.textContent = "грузовиков"
        gridsText4.textContent = "сотрудников"
        gridsText5.textContent = "профессионалов"
        address.textContent = "123456, Санкт-Петербург, Невский пр-кт 127"
        developed.textContent = "Разработано - D-E-N.ru"
        lng = "rus"
    }else{
        title.textContent = "CARGO TRANSPORATIONS"
        office.textContent = "Our offices"
        services.textContent = "SERVICES"
        aboutCompany.textContent = "ABOUT COMPANY"
        vacancies.textContent = "VACANCIES"
        contacts.textContent = "CONTACTS"
        miniText.textContent = "Transportation of large-sized cargo throughout Russia and Europe. Full forwarding, insurance, packaging and storage of goods"
        h1.textContent = "CARGO TRANSPORTATIONS IN EUROPE"
        miniText2.textContent = "European Union countries, as well as Ukraine, Belarus with all documents."
        but1.textContent = "MORE DETAILS"
        h1Services.textContent = "SERVICES"
        textInGrids1.textContent = "AIR TRANSPORATIONS"
        textInGrids2.textContent = "AIR TRANSPORATIONS"
        textInGrids3.textContent = "AIR TRANSPORATIONS"
        textInGrids4.textContent = "AIR TRANSPORATIONS"
        textInGrids5.textContent = "AIR TRANSPORATIONS"
        textInGrids6.textContent = "AIR TRANSPORATIONS"
        textInGrids7.textContent = "AIR TRANSPORATIONS"
        textInGrids8.textContent = "AIR TRANSPORATIONS"
        textInGrids9.textContent = "AIR TRANSPORATIONS"
        textInGrids10.textContent = "AIR TRANSPORATIONS"
        textInGrids11.textContent = "AIR TRANSPORATIONS"
        textInGrids12.textContent = "AIR TRANSPORATIONS"
        textInGrids13.textContent = "AIR TRANSPORATIONS"
        textInGrids14.textContent = "AIR TRANSPORATIONS"
        textInGrids15.textContent = "AIR TRANSPORATIONS"
        textInGrids16.textContent = "AIR TRANSPORATIONS"
        h1AboutCompany.textContent = "ABOUT COMPANY"
        miniText3.textContent = "Lorem Ipsum is dummy text often used in printing and web design. Lorem Ipsum has been the industry's standard dummy text ever since the early 16th century. An unnamed printer at the time created a large collection of type sizes and shapes using Lorem Ipsum to produce type specimens. Lorem Ipsum has not only successfully survived five centuries without noticeable change, but has also entered electronic design."
        gridsText1.textContent = "offices"
        gridsText2.textContent = "in Europe and CIS"
        gridsText3.textContent = "trucks"
        gridsText4.textContent = "employees"
        gridsText5.textContent = "professionals"
        address.textContent = "123456, St. Petersburg, Nevsky Prospekt 127"
        developed.textContent = "Developed by D-E-N.ru"
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

services.addEventListener("click", function(event){
    event.preventDefault()
    h1Services.scrollIntoView({block: "center", inline:"nearest", behavior: "smooth"})
})
aboutCompany.addEventListener("click", function(event){
    event.preventDefault()
    h1AboutCompany.scrollIntoView({block: "center", inline:"nearest", behavior: "smooth"})
})
contacts.addEventListener("click", function(event){
    event.preventDefault()
    number1.scrollIntoView({block: "center", inline:"nearest", behavior: "smooth"})
})