import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';
    
    for (const location of database.locations) {
         locationHTML += `
            <article class="locations">
            <h2> Locations </h2>
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
