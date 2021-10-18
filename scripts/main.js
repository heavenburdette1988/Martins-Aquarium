
import { useFish, mostHolyFish, soldierFish, nonHolyFish} from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'   

import { useTip } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js' 

import { LocationList } from './locations/LocationList.js'
import { useLocation } from "./locations/locationsDataProvider.js"
import { location } from "./locations/locations.js"
import { Fish } from './fish/fish.js'



const allTheFish = useFish()
const mostHolyFishReturn = mostHolyFish()
const soldierFishReturn = soldierFish()
const nonHolyFishReturn = nonHolyFish()
// for (const fish of allTheFish) {
//     console.log(fish)

FishList(mostHolyFishReturn)
FishList(soldierFishReturn)
FishList(nonHolyFishReturn)
// FishList()

const allTheTip = useTip()

for (const Tip of allTheTip) {
    console.log(Tip)
}

TipList()

const allTheLocation = useLocation()

for (const location of allTheLocation) {
    console.log(location)
}

LocationList()
