cardsContainer = document.getElementById("cards");


/*** OGGETTO TEAM ***/
const team = [
    {
        image: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        image: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        image: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        image: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer"
    },
];


/*** CICLO, CREA GLI ELEMENTI CARD-ITEM NEL DIV HTML E ALL'INTERNO CREA IMMAGINE E PARAGRAFI CONTENENTI DATI OGGETTI ***/
for (let i = 0; i < team.length; i++) {

    const newCard = document.createElement("div")
    newCard.classList.add("card-item");
    newCard.classList.add("mb-5");
    newCard.innerHTML += `<img class="pb-3" src="../img/${team[i].image}">`;    
    newCard.innerHTML += `<p id="name">${team[i].name}</p>`;
    newCard.innerHTML += `<p id="role" class="pb-3">${team[i].role}</p>`;
    cardsContainer.appendChild(newCard);
}