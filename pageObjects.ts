import {Builder, By, Capabilities, until, WebDriver,} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Dominos extends BasePage {
    driver: WebDriver 
    url: string = "https://www.dominos.com";
    buildPizza: By = By.xpath('(//h2[@class="media__title"])[1]')
    chooseSize: By = By.xpath ('(//span[@class="pizza-size__size"])[3]')
    chooseDough: By = By.xpath ('//input[@id="crust_type|14HANDTOSS"]')
    chooseSauce: By= By.xpath ('//input[@id="sauce-topping-Xm"]')
    chooseMeat: By = By.xpath ('//input[@data-quid="topping-H"]')
    chooseNonMeat: By = By.xpath ('//label[text()="Pineapple"]')
    addToOrder: By = By.xpath ('//button[@class="single-page-pizza-builder-desktop__add-to-order"]')
    orderOnline: By = By.xpath ('//a[@data-quid="main-navigation-order-online"]')
    carryOut: By = By.xpath ('//span[@data-quid="easy-order-locator-carryout"]')
    zipcode: By = By.xpath ('//input[@id="Postal_Code_Sep"]')
    searchLocations: By = By.xpath ('//button[@data-quid="locator-search-button"]') 
    storePickUp: By = By.xpath ('//a[@data-quid="locations-search-6676-order-carryout-button"]')
    extravaganzza: By= By.xpath('(//a[@class="btn media__btn js-orderNow"])[2]')
    cart: By= By.xpath('//a[@class="site-nav__toggle site-nav__toggle--cart js-cart-icon"]')
    specialty: By = By.xpath('(//a[@class="grid__cell--1/3@desktop grid__cell--1/2 grid__card"])[0]')

    
    constructor(){
        super({url: "https://www.dominos.com"});
    }
    

}

