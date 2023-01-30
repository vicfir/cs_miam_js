let menu = document.getElementById("menu");

//title
let divTitle = document.createElement("div");
divTitle.className = "title";
menu.appendChild(divTitle);

let pTitle = document.createElement("p");
pTitle.className = "titleS";
pTitle.innerText = "OUR MENU";
divTitle.appendChild(pTitle);

let h1Title = document.createElement("h1");
h1Title.classList = "titleL";
h1Title.innerHTML = "CHECK OUR <span class='green'>MIAM MENU</span>";
divTitle.appendChild(h1Title);

//nav
let nav =  document.createElement("div");
nav.className = "navMenu";
menu.appendChild(nav);

for (let i = 0; i < 4; i++) {
    nav.appendChild(document.createElement("p"));
}

let navSelect = document.querySelector(".navMenu");
navSelect.children.item(0).className="navActive"
navSelect.children.item(0).innerText="Starters";
navSelect.children.item(1).innerText="Breakfast";
navSelect.children.item(2).innerText="Lunch";
navSelect.children.item(3).innerText="Dinner";

//title menu
let titleMenu = document.createElement("div");
titleMenu.className="titleMenu";
menu.appendChild(titleMenu);

let titleMenuS = document.createElement("p");
titleMenuS.className="title titleS";
titleMenuS.innerText="MENU";
titleMenu.appendChild(titleMenuS);

let titleMenuL = document.createElement("h3");
let navActive = document.getElementsByClassName("navActive");
titleMenuL.innerText=`${navActive[0].innerText}`;
titleMenu.appendChild(titleMenuL);

for (let i = 0; i < navSelect.children.length; i++) {
    navSelect.children.item(i).addEventListener("click", (e)=>{
        
        //delete old  menu active
        navActive[0].className="";

        //select menu active
        e.target.className="navActive";

        //title menu change
        let titleMenuLSelect = document.querySelector(".titleMenu > h3");
        titleMenuLSelect.innerText=`${navActive[0].innerText}`;

        //rewrite variable
        navActive = document.getElementsByClassName("navActive");

        // if (navActive[0].innerText == "Starters") {
        //     console.log(navActive[0]);
        // }
    })
}

//choice in menu
let choiceMenu = document.createElement("div");
choiceMenu.className="choiceMenu";
menu.appendChild(choiceMenu);

for (let i = 0; i < 6; i++) {
    choiceMenu.appendChild(document.createElement("div"));
}

//add img
let choiceMenuSelect = document.getElementsByClassName("choiceMenu");
for (let i = 0; i < choiceMenuSelect[0].children.length; i++) {
    choiceMenuSelect[0].children.item(i).innerHTML=`<img src="./public/image/menu/menu-item-${i+1}.png">`
}