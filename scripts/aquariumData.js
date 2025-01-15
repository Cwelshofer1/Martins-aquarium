export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://lumiere-a.akamaihd.net/v1/images/07ff8e314e2798d32bfc8c39f82a9601677de34c.jpeg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://qph.cf2.quoracdn.net/main-qimg-d12a2d93799f9c4fa645623611447827-lq"
        },
        {
            name:"Coin",
            species: "Koi Fish",
            length: 7,
            location: "Black, Caspian and Aral Seas",
            diet: "Omnivore",
            image: "https://cdn.shopify.com/s/files/1/1083/2612/files/shutterstock_381264712_c48f412e-ea48-4799-9427-efbdea995b72_480x480.jpg?v=1661948950"
        },
        {
            name:"Big Bass",
            species: "Bass fish",
            length: 10,
            location: "clear, vegetated lakes, ponds, swamps, and the backwaters of pools, creeks and rivers.",
            diet: "Carnivore",
            image: "https://www.mossyoak.com/sites/default/files/inline-images/big-bass.jpg"
        },
        {
            name:"Halo",
            species: "Angelfish",
            length: 5,
            location:"South American freshwater river basins",
            diet: "Omnivore",
            image:"https://www.30a.com/wp-content/uploads/2020/12/1438px-Pomocanthus_imperator_facing_right.jpg"

        },
        {
            name: "Mr. No Scales",
            species: "Mandarin fish",
            length: 5,
            location: "The Western Pacific",
            diet: "Carnivore",
            image: "https://i.ytimg.com/vi/cOrCxCsW220/maxresdefault.jpg"

        },
        {
            name: "Sunshine Dave",
            species: " Ocean Sunfish",
            length: 15,
            location: "near-shore oceans all over the globe",
            diet: "Carnivore",
            image: "https://sanctuaries.noaa.gov/media/videos/wk244-mola-mola.jpg"
        },
        {
            name: "Gold Buddy",
            species: "Goldfish",
            length: 3,
            location: "freshwater habitats such as ponds, rivers, lakes, streams, marshes, bogs, and swamps",
            diet: "Omnivore",
            image: "https://cafishvet.com/wp-content/uploads/2020/10/gold-fish-1.jpg"  
        }
    ],
    tips:[
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
         }
    ],
    locations:[
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
         }
    ]
}
console.log(database.fish)