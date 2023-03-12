import chicagoWarehouse from "./data/Chicago";
import detroitWarehouse from "./data/Detroit";
import newYorkWarehouse from "./data/NewYork";
import { Warehouse } from "./models/Warehouse";
import {
    addPhone,
    calcAverageCost,
    deletePhoneByIndex,
    deletePhoneByName,
    doWeHaveA5GPhone,
    filter5G,
    filterPriceGreaterThan,
    filterPriceLessThan,
    findPhoneByName,
    phoneFlashSale,
    phoneFlashSaleV2
} from "./functions";

chicagoWarehouse;
detroitWarehouse;
newYorkWarehouse;

const warehouse: Warehouse = {
    name: "Test Phone",
    price: 599.99,
    fiveG: true
};

//addPhone(chicagoWarehouse, warehouse);

//console.log(chicagoWarehouse);

//deletePhoneByIndex(chicagoWarehouse, 9);

//console.log(chicagoWarehouse);

//deletePhoneByName(chicagoWarehouse, "Galaxy S10+");

//console.log(chicagoWarehouse);

//console.log(filter5G(chicagoWarehouse, false));

//console.log(filter5G(chicagoWarehouse, true));

//console.log(filterPriceLessThan(chicagoWarehouse, 1500));

//console.log(filterPriceGreaterThan(chicagoWarehouse, 1000));

//console.log(findPhoneByName(chicagoWarehouse, "Galaxy S10+"));

//console.log(calcAverageCost(chicagoWarehouse));

//console.log(doWeHaveA5GPhone(chicagoWarehouse));

//console.log(phoneFlashSale(chicagoWarehouse, .1));

//console.log(phoneFlashSaleV2(chicagoWarehouse, .1, ["Pixel 4a", "Pixel 5"]));
