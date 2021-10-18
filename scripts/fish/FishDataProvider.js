const fishCollection = [
    {
        name: "George",
        food: "crustaceans",
        species: "Gold Fish",
        Length: "Hefty",
        Location: "Ohio River"
    },
        {
        name: "Bart",
        food: "pellats",
        species: "Karp",
        Length: "Small",
        Location: "New River"
        },
        {
            name: "Goldie",
            food: "Greens",
            species: "Karp",
            Length: 5,
            Location: "Kanawha River"
            },
            {
                name: "Machintosh",
                food: "Minnows",
                species: "Catfish",
                Length: 3,
                Location: "Bluestone Lake",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaAa2Slimx9S0pMDxu6nXcjq27MS-sIsdCw&usqp=CAU"
                },
                {
                    name: "Harry",
                    food: "People",
                    species: "Squid",
                    Length: 6,
                    Location: "Black Lake",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hUjDfNzpbwMyczRviLaxMm6DfspQ6nUKeQ&usqp=CAU"
                    },
                    {
                        name: "Herminone",
                        food: "Pasta",
                        species: "Merpeople",
                        Length: 10,
                        Location: "Black Lake",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTklTg-XlZfYss5jBKIrWEA4QTkhJQ0gTuMA&usqp=CAU"
                        },
                        {
                            name: "Ron",
                            food: "Wizards",
                            species: "Grindows",
                            Length: 11,
                            Location: "Black Lake",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wbSDeFRHN4537zR-IwJdW8j6UHVsbr_UX40ZiSHhYNbuWH-quhjmyO1vXxez04v0Z40&usqp=CAU"
                            }
]

export const useFish = () => {
    return fishCollection.slice()
}


//  Fish by 3 and 5 and the unworthy 
// export const mostHolyFish = () => {
//     // 3, 6, 9, 12, etc... fish
//     const holyFish = []

//     for (const fish of fishCollection) {
//         if(fish.Length % 3 === 0)
//         holyFish.push(fish)
//     }

//     return holyFish
// }

// export const soldierFish = () => {
//     // 5, 10, 15, 20, 25, etc... fish
//     const soldiers = []
//     for (const fish of fishCollection) {
//         if(fish.Length % 5 === 0){
//         soldiers.push(fish)
//     }
// }
//     return soldiers
// }

// export const nonHolyFish = () => {
//     const regularFish = []
//     // Any fish not a multiple of 3 or 5
//     for (const fish of fishCollection) {
//         if(fish.Length % 3 !== 0 && fish.Length % 5 !== 0){
//         regularFish.push(fish)
//     }
// }
//     return regularFish
// }


// Fish by 3 and 5 and the unworthy 
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.Length % 3 === 0)
        holyFish.push(fish)
    } 
    console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
        if(fish.Length % 5 === 0 && fish.Length % 3 !== 0){
        soldiers.push(fish)
    }
}
console.log(nonHolyFish)
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    // Any fish not a multiple of 3 or 5
    for (const fish of fishCollection) {
        if(fish.Length % 3 !== 0 && fish.Length % 5 !== 0){
        regularFish.push(fish)
    }
}
console.log(regularFish)
    return regularFish
}

