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
        }
]

export const useFish = () => {
    return fishCollection.slice()
}