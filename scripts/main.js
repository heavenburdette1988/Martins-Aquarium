
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'   

import { useTip } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js' 

import { LocationList } from './locations/LocationList.js'
import { useLocation } from "./locations/locationsDataProvider.js"
import { location } from "./locations/locations.js"

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()


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
