import {Dominos} from "./pageObjects"

const dominos = new Dominos

test("custom pizza", async () => {
    await dominos.navigate()
    await dominos.click(dominos.orderOnline)
    await dominos.click(dominos.carryOut)
    await dominos.click(dominos.zipcode)
    await dominos.setInput(dominos.zipcode,"77441")
    await dominos.click(dominos.searchLocations)
    await dominos.click(dominos.storePickUp)
    await dominos.click(dominos.buildPizza)
    await dominos.click(dominos.chooseSize)
    await dominos.click(dominos.chooseDough)
    await dominos.click(dominos.chooseSauce)
    await dominos.click(dominos.chooseMeat)
    await dominos.click(dominos.chooseNonMeat)
    await dominos.click(dominos.addToOrder)
    await dominos.driver.quit()


})