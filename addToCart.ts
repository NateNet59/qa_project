import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

const chromedriver = require("chromedriver")

describe("Adding an item to the cart",() => {
    beforeEach(async() => {
        await driver.get("https://www.dominos.com/en/pages/order/#!/section/Food/category/Pizza/");
        // Expect for the website to open
    });
    afterAll(async () => {
        await driver.quit();
    })

    const extravaganzza: By= By.xpath('//a[@class="btn media__btn js-orderNow"][2]');
    const cart: By= By.xpath('//a[@class="site-nav__toggle site-nav__toggle--cart js-cart-icon"]');

    test("adding an item to the cart", async () => {
        await driver.findElement(extravaganzza).sendKeys("ExtavaganZZa\n")
        let resultsText = await driver.findElement(cart).getText();
        expect(resultsText).toContain("ExtravaganZZa");
    })
})