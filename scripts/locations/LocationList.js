/**
 *  FishList which renders individual fish objects as HTML
 */

 import { useLocation } from "./locationsDataProvider.js"
 import { location } from "./locations.js"
 // TODO: Import `useFish` from the data provider module
 
 export const LocationList = () => {
 
     // Get a reference to the `<article class="content">` element
     const contentElement = document.querySelector(".location-list")
     const locations = useLocation()
 
     let locationHTMLRepresentations = ""
      for (const locationObject of locations) {
 
         locationHTMLRepresentations += location(locationObject)
     }
 
     // Add to the existing HTML in the content element
     contentElement.innerHTML += `
    <article class="LocationList">
        ${locationHTMLRepresentations}
    </article>`
 }