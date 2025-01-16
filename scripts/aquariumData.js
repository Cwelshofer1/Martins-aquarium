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
            location: "lakes, ponds, swamps etc.",
            diet: "Carnivore",
            image: "https://www.mossyoak.com/sites/default/files/inline-images/big-bass.jpg"
        },
        {
            name:"Halo",
            species: "Angelfish",
            length: 5,
            location:"South American freshwater",
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
            location: "all near-shore oceans",
            diet: "Carnivore",
            image: "https://sanctuaries.noaa.gov/media/videos/wk244-mola-mola.jpg"
        },
        {
            name: "Gold Buddy",
            species: "Goldfish",
            length: 3,
            location: "ponds, rivers, lakes",
            diet: "Omnivore",
            image: "https://cafishvet.com/wp-content/uploads/2020/10/gold-fish-1.jpg"  
        }
    ],
    tips:[
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
         },
         {
            topic: "Overfeeding Fish",
            text:"While you are getting to know your fish, feed small quantities and watch to make sure your fish is eating everything before adding any more"
         },
         {
            topic:"Use Caution With Treatments and Chemicals",
            text:"Do not add any chemicals or treatments to your tank until you completely understand their effects, both immediate and long-term."
         },
         {
            topic:"Join Some Aquarium Groups",
            text:"These are great places for beginners to ask questions and get quick responses"
         }

    ],
    locations:[
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
         },
         {
            name:"Apo Reef",
            country: "Philippines",
            description:"Apo Reef is the biggest coral reef in the Philippines "
         },
         {
            name:"Ningaloo Reef",
            country: "Australia",
            description:"The most dominant marine habitat is the Ningaloo reef, which sustains both tropical and temperate marine fauna and flora, including marine reptiles and mammals."
         },
         {
            name:"Belize Barrier Reef",
            country: "Belize",
            description:"The largest barrier reef in the northern hemisphere"
         },
         {
            name:"Palancar Reef",
            country:"Mexico",
            description: " Is a blend of several different coral formations, with dive depths ranging from 50 to 115 feet."
         }

    ]
}
console.log(database.fish)