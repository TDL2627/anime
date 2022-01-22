
// creating a object that contains an array 
let projects = [
  {
    imgURL: "/images/1.gif",
    title: "Smile of Sadness",
    genre:"Sad"
    
  },
  {
    imgURL: "/images/2.gif",
    title: "Brxken",
    genre:"Sad"
    
  },
  {
    imgURL: "/images/3.gif",
    title: "Wrist Slit",
    genre:"Sad"
    
  }
  ,
  {
    imgURL: "/images/4.gif",
    title: "Forgive myself",
    genre:"Sad"
    
  },
  {
    imgURL: "/images/5.gif",
    title: "Shinobi",
    genre:"Cartoon"
    
  }
  ,
  {
    imgURL: "/images/6.gif",
    title: "Brains Blown",
    genre:"Sad"
    
  },
  {
    imgURL: "/images/7.gif",
    title: "Hung Gold Chain",
    genre:"Sad"
    
  }
  ,
  {
    imgURL: "/images/8.gif",
    title: "Life",
    genre:"Abstract"
    
  },
  {
    imgURL: "/images/9.gif",
    title: "Sharingan",
    genre:"Cartoon"
    
  }
  ,
  {
    imgURL: "/images/10.gif",
    title: "The Last Sayjin",
    genre:"Cartoon"
    
  },
  {
    imgURL: "/images/11.gif",
    title: "Charizard",
    genre:"Cartoon"
    
  }
  ,
  {
    imgURL: "/images/12.gif",
    title: "Nike",
    genre:"Abstract"
    
  },
  {
    imgURL: "/images/13.gif",
    title: "Alter Ego",
    genre:"Abstract"
    
  }
  ,
  {
    imgURL: "/images/14.gif",
    title: "Numb The Pain",
    genre:"Sad"
    
  },
  {
    imgURL: "/images/15.gif",
    title: "Message in a bottle",
    genre:"Romance"
    
  }

];

function createCard(card) {
  let createdCard = `<div class="project-card" genre=${card.genre} >
      <img  class="d-block w-100 gift" src="${card.imgURL}">
      <h1>${card.title}</h1>
      <a href="${card.imgURL}" download>Download</a>
    </div>
  `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

// filter
function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[genre='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
