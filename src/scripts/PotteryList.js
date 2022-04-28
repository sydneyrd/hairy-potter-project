import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let allPots = usePottery()
    let htmlString = ``
    for (const pot of allPots) {
     htmlString += `<section class="pottery" id="pottery--${pot.id}">
     <h2 class="pottery__shape">${pot.shape}</h2>
     <div class="pottery__properties">
     Item weighs ${pot.weight} grams and is ${pot.height} cm in height
     </div>
     <div class="pottery__price">
     Price is $${pot.price}
     </div>
     </section>`
        
    } return htmlString
}


















/*Create Pottery HTML
Create a scripts/PotteryList.js module.
Define and export a PotteryList function.
The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">Mug</h2>
    <div class="pottery__properties">
        Item weighs 3 grams and is 6 cm in height
    </div>
    <div class="pottery__price">
        Price is $20
    </div>
</section>
The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.*/