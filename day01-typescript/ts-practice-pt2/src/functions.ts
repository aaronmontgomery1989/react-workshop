import { Discount } from "./models/Discount";
import { Warehouse } from "./models/Warehouse";

export function addPhone(warehouses: Warehouse[], warehouse: Warehouse): void {
    warehouses.push(warehouse);
}

export function deletePhoneByIndex(warehouses: Warehouse[], index: number): void {
    warehouses.splice(index, 1);
}

export function deletePhoneByName(warehouses: Warehouse[], name: string): void {
    warehouses.splice(warehouses.findIndex(x => x.name === name), 1);
}

export function filter5G(warehouses: Warehouse[], isFiveG: boolean): Warehouse[] {
    return warehouses.filter(x => x.fiveG === isFiveG);
}

export function filterPriceLessThan(warehouses: Warehouse[], price: number): Warehouse[] {
    return warehouses.filter(x => x.price < price);
}

export function filterPriceGreaterThan(warehouses: Warehouse[], price: number): Warehouse[] {
    return warehouses.filter(x => x.price > price);
}

export function findPhoneByName(warehouses: Warehouse[], name: string): Warehouse | undefined {
    return warehouses.find(x => x.name === name);
}

export function calcAverageCost(warehouses: Warehouse[]): number {
    return warehouses.flatMap(x => x.price).reduce((accumulator, currentValue) => accumulator + currentValue) / warehouses.length;
}

export function doWeHaveA5GPhone(warehouses: Warehouse[]): boolean {
    return warehouses.filter(x => x.fiveG === true).length > 0;
}

export function phoneFlashSale(warehouses: Warehouse[], percentage: number): Discount[] {
    return warehouses.flatMap(x => new Discount(x.name, x.price, x.fiveG, x.price - (x.price * percentage)));
}

export function phoneFlashSaleV2(warehouses: Warehouse[], percentage: number, names: string[]): Discount[] {
    return warehouses.filter(x => names.includes(x.name)).flatMap(x => new Discount(x.name, x.price, x.fiveG, x.price - (x.price * percentage)));
}
