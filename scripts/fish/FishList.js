/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module*
import { useFish } from "./FishDataProvider.js"
import { Fish } from "./fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("#FishList")
    const fishes = useFish()

     // Generate all of the HTML for all of the fish
     let fishHTMLRepresentations = ""
     for (const SinglefishObject of fishes) {
         /*
             Invoke the Fish component function
             and pass the current fish object as an argument.
             Each time, add the return value to the
             fishHTMLRepresentations variable with `+=`
         */
     

     fishHTMLRepresentations += Fish(SinglefishObject)
    }
    


   // Add a section, and all of the fish to the DOM
   contentElement.innerHTML += `
   <article class="fishList">
       ${fishHTMLRepresentations}
   </article>
`
    }
