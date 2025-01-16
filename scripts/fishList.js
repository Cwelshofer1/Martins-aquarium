import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';
    
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
    const fishesList = document.getElementById('fishList');
 
    if (fishesList) {
        fishesList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "movie-list"');
    }
 };
