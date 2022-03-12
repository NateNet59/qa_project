import {Builder, By, Capabilities, until, WebDriver,} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Dominos extends BasePage {
    driver; WebDriver 
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
    
    constructor(){
        super({url: "https://www.dominos.com"});
    }
    

}