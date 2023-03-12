import { Warehouse } from "./Warehouse"

export class Discount implements Warehouse {
    name: string
    price: number
    fiveG: boolean
    discountedPrice: number

    constructor(name: string, price: number, fiveG: boolean, discountedPrice: number) {
        this.name = name;
        this.price = price;
        this.fiveG = fiveG;
        this.discountedPrice = discountedPrice;
    }
}
