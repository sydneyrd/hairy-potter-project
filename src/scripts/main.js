import { makePottery } from './PotteryWheel.js'
import {firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'
// Make 5 pieces of pottery at the wheel
let mug = makePottery('cup', 7, 8)
let vase = makePottery('vase', 11, 5)
let plate = makePottery('Plate', 2, 8)
let teaCup = makePottery('cup', 8, 9)
let smallPlate = makePottery('plate', 3, 6)
firePottery(mug, 2600)
firePottery(vase, 1000)
firePottery(plate, 1500)
firePottery(teaCup, 2000)
firePottery(smallPlate, 2000)
usePottery()
toSellOrNotToSell(mug)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
toSellOrNotToSell(teaCup)
toSellOrNotToSell(smallPlate)

console.log(mug, vase, plate, teaCup, smallPlate)
const mainContainer = document.querySelector(".potteryList")
 mainContainer.innerHTML = PotteryList()

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



