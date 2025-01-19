import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = ``
    
    for (const fish of database.fish) {
         fishHTML += `
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
    
    

    return fishHTML
    
    // Generate an HTML representation of each fish
};

export const renderFishToDOM = (fishHTML) => {
    let fishesList = document.getElementById('fishList');
 
    if (fishesList) {
        fishesList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fish-list"');
    }
 };


 export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = ""

    for () {

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
}


// const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// Only display even numbers
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
// }
 