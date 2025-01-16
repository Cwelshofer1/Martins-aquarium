import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = '';
    
    for (const tip of database.tips) {
         tipHTML += `
            <article class="tip__details">
            
             <h4 class="tip__topic">${tip.topic}</h4>
                <ul class="tips">
                <li>${tip.text}</li>
                </ul>
                <div class="tip__details">
                   
                </div>
            </article>
        `;
    }
 
    return tipHTML
    
};

export const renderTipsToDOM = (tipHTML) => {
    const tipsList = document.getElementById('tipList');
 
    if (tipsList) {
        tipsList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
 };

