const BASE_URL = "http://localhost:3000"; 
const DOCTORS_URL = `${BASE_URL}/doctors`;
const main = document.querySelector('main')
const docCollection = document.createElement('div')
docCollection.setAttribute('id', 'doc_collection')
//docCollection.className = 'row row-cols-1 row-cols-md-2'



function homeBtn(){
    let doctorsBtn = document.querySelector("#doc_btn")
    doctorsBtn.addEventListener("click", () => {
        playFantastic(); 
        doctorsHandler();
    })
}

function playFantastic(){
    let audio = new Audio("fantastic.m4a");
    audio.play();
}

function doctorsHandler(){
    fetch(DOCTORS_URL)
    .then(resp => resp.json())
    .then(json => renderDoctors(json));
}

function renderDoctors(json){
    json.forEach(doctor => {
        renderDoctor(doctor)
    })
}

function renderCompanion(doctor){
    doctor.companions.forEach(companion => {
        let companionsLi = document.createElement('li')
        companionsLi.innerText = companion 
        console.log(doctor.companions)
    })
}

function renderDoctor(doctor){
    main.appendChild(docCollection)
    let docCard = document.createElement('div')
    docCard.setAttribute('id', 'doc-card') 
    docCard.className = 'card' //use dataset eventually `${doctor.id}`
    let cardTitle = document.createElement('h2')
    cardTitle.innerText = `${doctor.doctor_number}`
    cardTitle.className = 'card-title'
    let actorName = document.createElement('h4')
    actorName.innerText = `Played by: ${doctor.actor_name}`
    let docImage = document.createElement('img')
    docImage.setAttribute('id', 'doc_img')
    docImage.setAttribute('src', doctor.image)
    docImage.className = 'card-img-top float-right'
    docImage.innerText = `${doctor.image}`
    let companionsTitle = document.createElement('h4')
    companionsTitle.innerText = `${doctor.doctor_number}'s companions:`
    let companionsUl = document.createElement('ul')
    companionsTitle.appendChild(companionsUl)
    companionsUl.setAttribute('id', 'companions-ul')
    doctor.companions.forEach(companion => {
        let companionsLi = document.createElement('li')
        companionsLi.innerText = companion 
        companionsUl.appendChild(companionsLi)
    })
    
    let quotesTitle = document.createElement('h4')
    quotesTitle.innerText = `${doctor.doctor_number}'s Famous Quotes:`
    let quotesUl = document.createElement('ul')
    quotesTitle.appendChild(quotesUl)
        doctor.popular_quotes.forEach(quote => {
        let quotes = document.createElement('li')
        quotes.innerText = quote 
        quotesUl.appendChild(quotes)
    })

    let screwdriverImg = document.createElement('img')
    screwdriverImg.setAttribute('id', 'driver_img')
    screwdriverImg.setAttribute('src', doctor.screwdriver)
    screwdriverImg.innertext = `${doctor.screwdriver}`
    screwdriverImg.className = 'card-img-bottom'


    docCollection.appendChild(docCard)
    docCard.append(docImage, cardTitle, actorName, companionsTitle, quotesTitle, screwdriverImg)
    
}

homeBtn(); 

/* 
let catchphraseTitle = document.createElement('h4')
    catchphraseTitle.innerText = `${doctor.doctor_number}'s Famous Catchphrase(s):`
    let phraseUl = document.createElement('ul')
doctor.catchphrase.forEach(phrase => {
        let catchphrase = document.createElement('li')
        catchphrase.innerText = phrase
        phraseUl.appendChild(catchphrase)
        console.log(doctor.companions.typeof)
    })
let catchphraseTitle = document.createElement('h4')
    catchphraseTitle.innerText = `${doctor.doctor_number}'s Famous Catchphrase(s):`
    let phraseUl = document.createElement('ul')
    catchphraseTitle.appendChild(phraseUl)
    if (doctor.catchphrase.length > 1){
    doctor.catchphrase.forEach(phrase => {
        let catchphrase = document.createElement('li')
        catchphrase.innerText = phrase
        phraseUl.appendChild(catchphrase) 
    })}

Need to check if an array and iterate if it is if not just need to create an li and be done 
*/ 