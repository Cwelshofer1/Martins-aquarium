import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';
    
    for (const location of database.locations) {
         locationHTML += `
         <br>
            <article class="locations">
             <p> ${location.name}</p>
                <p> ${location.country}</p>
                <p> ${location.description}</p>
                <div class="location__details">
                   
                </div>
            </article>
        `;
    }
 
    return locationHTML
    
};



export const renderLocationsToDOM = (locationsHTML) => {
    const locationsList = document.getElementById('locationList');
 
    if (locationsList) {
        locationsList.innerHTML = locationsHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
 };
