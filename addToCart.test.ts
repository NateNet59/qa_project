import {Dominos} from "./pageObjects"

const dominos = new Dominos;

test("add to cart", async () => {
    await dominos.navigate()
    await dominos.click(dominos.orderOnline)
    await dominos.click(dominos.nateCarry)
    await dominos.click(dominos.zipcode)
    await dominos.setInput(dominos.zipcode, "84088")
    await dominos.click(dominos.searchLocations)
    await dominos.click(dominos.storePickUp)
    await dominos.click(dominos.specialty)
    await dominos.click(dominos.extravaganzza)
    await dominos.click(dominos.cart)
    await dominos.driver.quit()

})