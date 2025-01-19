import { database } from './aquariumData.js';


// const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// // Only display even numbers
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
// }




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
console.log(soldierFish())

export const regularFish = () => {
     // 3, 6, 9, 12, etc... fish
     const regularFishes = []
     for (const fishes of database.fish) {
         if (fishes.length % 5 !== 0 && fishes.length % 3 !== 0){
             regularFishes.push(fishes)
         }
     }
     
     return regularFishes
     
}
console.log(regularFish())
