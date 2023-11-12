cardsContainer = document.getElementById("cards");

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

for (let i = 0; i < team.length; i++) {

    const newCard = document.createElement("div")
    newCard.classList.add("card-item");
    newCard.innerHTML += `<img src="../img/${team[i].image}">`;    
    newCard.innerHTML += `<p>${team[i].name}</p>`;
    newCard.innerHTML += `<p>${team[i].role}</p>`;
    cardsContainer.appendChild(newCard);
}