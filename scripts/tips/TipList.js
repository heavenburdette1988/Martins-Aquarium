/**
 *  FishList which renders individual fish objects as HTML
 */

import { useTip } from "./TipDataProvider.js"
import { tip } from "./Tip.js"
// TODO: Import `useFish` from the data provider module

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tip-list")
    const tips = useTip()

    let tipHTMLRepresentations = ""
     for (const tipObject of tips) {

        tipHTMLRepresentations += tip(tipObject)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
   <article class="Tiplist">
       ${tipHTMLRepresentations}
   </article>`
}

