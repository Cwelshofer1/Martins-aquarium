import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fishes of database.fish) {
        if (fishes.length % 3 === 0){
            holyFish.push(fishes)
        }
    }
    
    return holyFish
   
}

export const holyFishList = () => {

    const fishListTwo = mostHolyFish()
    let holyFishHTML = ""
    

    for (const fish of fishListTwo) {
         holyFishHTML += `
            <article class="fish">
             <h2 class="fish__name">${fish.name}</h2>
                <p class="fish__species">${fish.species}</p>
                <p class="fish__diet"> Diet:${fish.diet}</p>
                <p class="fish__diet"> Length:${fish.length}</p>
                <p class="fish__diet"> Location:${fish.location}</p>
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish__details">
                   
                </div>
            </article>
        `;
    }
    
    

    return holyFishHTML
    
    // Generate an HTML representation of each fish
};

export const renderHolyFishToDOM = (holyFishHTML) => {
    let holyFishesList = document.getElementById('holylist');
 
    if (holyFishesList) {
        holyFishesList.innerHTML = holyFishHTML;
    } else {
        console.error('Could not find element with id "fish-list"');
    }
 };


console.log(mostHolyFish())

export const soldierFish = () => {
     // 3, 6, 9, 12, etc... fish
     const soldierFishes = []
     for (const fishes of database.fish) {
         if (fishes.length % 5 === 0){
             soldierFishes.push(fishes)
         }
     }
     
     return soldierFishes
     
}

export const soldierFishList = () => {

    const fishListOne = soldierFish()
    let soldierFishHTML = ""
    

    for (const fish of fishListOne) {
         soldierFishHTML += `
            <article class="fish">
             <h2 class="fish__name">${fish.name}</h2>
                <p class="fish__species">${fish.species}</p>
                <p class="fish__diet"> Diet:${fish.diet}</p>
                <p class="fish__diet"> Length:${fish.length}</p>
                <p class="fish__diet"> Location:${fish.location}</p>
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish__details">
                   
                </div>
            </article>
        `;
    }
    
    

    return soldierFishHTML
    
    // Generate an HTML representation of each fish
};

export const renderSoldierFishToDOM = (soldierFishHTML) => {
    let soldierFishesList = document.getElementById('soldierlist');
 
    if (soldierFishesList) {
        soldierFishesList.innerHTML = soldierFishHTML;
    } else {
        console.error('Could not find element with id "fish-list"');
    }
 };

console.log(soldierFish())

export const regularFish = () => {
     
     const regularFishes = []
     for (const fishes of database.fish) {
         if (fishes.length % 5 !== 0 && fishes.length % 3 !== 0){
             regularFishes.push(fishes)
         }
     }
     
     return regularFishes
     
}
console.log(regularFish())

export const regularFishList = () => {

    const fishList = regularFish()
    let regularFishHTML= ""
    

    for (const fish of fishList) {
         regularFishHTML += `
            <article class="fish">
             <h2 class="fish__name">${fish.name}</h2>
                <p class="fish__species">${fish.species}</p>
                <p class="fish__diet"> Diet:${fish.diet}</p>
                <p class="fish__diet"> Length:${fish.length}</p>
                <p class="fish__diet"> Location:${fish.location}</p>
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish__details">
                   
                </div>
            </article>
        `;
    }
    
    

    return regularFishHTML
    
   
};

export const renderRegularFishToDOM = (regularFishHTML) => {
    let regularFishesList = document.getElementById('regularlist');
 
    if (regularFishesList) {
        regularFishesList.innerHTML = regularFishHTML;
    } else {
        console.error('Could not find element with id "fish-list"');
    }
 };