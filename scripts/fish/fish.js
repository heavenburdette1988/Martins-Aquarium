/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.Length}</div>
            <div class="fish__location">${fish.Location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}
