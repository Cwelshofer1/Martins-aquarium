// import { fishList } from './fishList.js'
// import { renderFishToDOM } from './fishList.js'
import { tipList } from './tipList.js'
import { renderTipsToDOM } from './tipList.js'
import { locationList } from './locationList.js'
import { renderLocationsToDOM } from './locationList.js'
import { renderHolyFishToDOM, holyFishList } from './fishFilter.js'
import { renderSoldierFishToDOM, soldierFishList } from './fishFilter.js'
import { renderRegularFishToDOM, regularFishList } from './fishFilter.js'
// import { soldierFish } from './fishFilter.js'
// import { regularFish } from './fishFilter.js'


// Generate the fish list
// const fishHTML = fishList() 
// renderFishToDOM(fishHTML)

// // Generate the care tips
const tipHTML = tipList()
renderTipsToDOM(tipHTML)

// // Generate the location list
const locationHTML = locationList()
renderLocationsToDOM(locationHTML)

// Render each HTML string to the correct DOM element
const holyFishHTMLTwo = holyFishList()
renderHolyFishToDOM(holyFishHTMLTwo)

const soldierFishHTML = soldierFishList()
renderSoldierFishToDOM(soldierFishHTML)

const regularFishHTML = regularFishList()
renderRegularFishToDOM(regularFishHTML)