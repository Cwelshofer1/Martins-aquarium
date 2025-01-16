import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';
    
    for (const location of database.locations) {
         locationHTML += `
         <br>
            <article class="locations">
             <section> ${location.name}</section>
                <section> ${location.country}</section>
                <section> ${location.description}</section
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
