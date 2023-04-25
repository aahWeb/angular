"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
const def_1 = require("./def");
const Product_1 = require("./Product");
const delivery = MockProducts_1.MockDelivery.filter(p => p.delivery == def_1.Delivery.Special);
const ids = delivery.map(p => p.id);
// tous les produits avec details et son statut delivery
const products = MockProducts_1.MockDetails.map(p => {
    const pDel = MockProducts_1.MockDelivery.find(pD => pD.id == p.id);
    const product = new Product_1.default(p, pDel.delivery);
    return product;
});
const specials = products.filter(p => p.option == def_1.Delivery.Special);
console.log(specials);
